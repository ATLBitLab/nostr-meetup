import { Filter, Event as NostrEvent } from "nostr-tools";
import useGet from "./useGet";

export interface UserProfile {
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

// TODO: Later responses overwriting good ones
// I thought get returns once and then is done?
const useProfile = (relays: string[], pubkey: string | null) => {
  const filter: Filter = {
    kinds: [0],
    authors: [pubkey],
  };

  const note = useGet(relays, filter);
  const profile: UserProfile = note ? JSON.parse(note.content) : null;

  return profile;
};

export default useProfile;
