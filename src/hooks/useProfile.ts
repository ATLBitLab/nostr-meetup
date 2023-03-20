import { useState, useEffect } from "react";
import { Filter, Event as NostrEvent } from "nostr-tools";
import pool from "~/lib/Pool";

interface UserProfile {
  name?: string;
  pubkey?: string;
  npub?: string;
  display_name?: string;
  picture?: string;
  about?: string;
  website?: string;
  banner?: string;
  lud06?: string;
  lud16?: string;
  nip05?: string;
}

const defaultProfileRelays: string[] = [
  "wss://nostr.terminus.money",
  "wss://brb.io",
  "wss://nostr.wine",
  "wss://relay.snort.social",
  "wss://gratten.duckdns.org/nostrrelay/relay2",
];

// TODO: Later responses overwriting good ones
// I thought get returns once and then is done?
// const useProfile = (relays: string[], pubkey: string | null) => {
export default function useProfile(
  pubkey: string | null,
  relays: string[] = defaultProfileRelays
) {
  const [note, setNote] = useState<NostrEvent | null>(null);

  useEffect(() => {
    if (!pubkey) return;

    const filter: Filter = {
      kinds: [0],
      authors: [pubkey],
    };

    const nostrGet = async () => {
      const res = await pool.get([...relays], filter);
      console.log("res", res);
      if (!res) console.debug("uhhh");
      setNote(res);
    };

    nostrGet();
  }, [relays, pubkey]);

  const profile: UserProfile = note ? JSON.parse(note.content) : null;
  return profile;
}

// export default useProfile;
