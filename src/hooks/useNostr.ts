import { useContext } from "react";
import { NostrContext } from "../context/nostr";

export default function useNostr() {
  const context = useContext(NostrContext);
  if (context === null) {
    throw new Error("usenostr must be used within a nostrprovider");
  }
  return context;
}
