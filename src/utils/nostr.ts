import { nip19 } from "nostr-tools";
export const queryToPubkey = (
  group: string[] | string | undefined,
  isReady: boolean
) => {
  if (!isReady) return null;
  if (typeof group !== "string") return null;
  if (group.startsWith("npub1")) {
    try {
      let { type, data: nipData } = nip19.decode(group);
      if (type === "npub") {
        return nipData as string;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // might be hex format
  try {
    // try npub encode to validate hex public key
    nip19.npubEncode(group);
    return group;
  } catch (error) {
    console.error(error);
    return null;
  }
};
