import { useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import { Filter, Event as NostrEvent } from "nostr-tools";
import pool from "~/lib/Pool";

const useGet = (relays: string[], filter: Filter) => {
  const [note, setNote] = useState<NostrEvent | null>(null);

  useDeepCompareEffect(() => {
    const nostrGet = async () => {
      const res = await pool.get([...relays], filter);
      setNote(res);
      return res;
    };

    nostrGet();
  }, [relays, filter]);

  return note;
};

export default useGet;
