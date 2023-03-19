import { useEffect, useState } from "react";
import { Filter, Event as NostrEvent } from "nostr-tools";
// import useNostr from "./useNostr";
import pool from "~/lib/Pool";

const useSubscription = (relays: string[], filters: Filter[]) => {
  // const pool = useNostr();
  const [notes, setNotes] = useState<NostrEvent[]>([]);

  useEffect(() => {
    if (!pool) return;
    console.debug("pool", pool);
    console.debug("relays", relays);

    let sub = pool.sub([...relays], filters);
    console.debug("sub", sub);

    sub.on("event", (event: NostrEvent) => {
      console.debug("event", event);
      setNotes((prev) => {
        if (prev.some((a) => a.id === event.id)) {
          return prev;
        }
        return [...prev.slice(0, 50), event];
      });
    });
  }, [pool]);

  return notes;
};

export default useSubscription;
