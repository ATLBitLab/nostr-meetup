import { useEffect, useState } from "react";
import { Filter, Event as NostrEvent } from "nostr-tools";
// import useNostr from "./useNostr";
import pool from "~/lib/Pool";

const useGet = (relays: string[], filter: Filter) => {
  // const pool = useNostr();
  const [note, setNote] = useState<NostrEvent | null>(null);

  useEffect(() => {
    const nostrGet = async () => {
      const res = await pool.get([...relays], filter);
      setNote(res);
      return res;
    };

    nostrGet();
    // }, [relays, filter]);
  }, []);

  return note;
};

export default useGet;
