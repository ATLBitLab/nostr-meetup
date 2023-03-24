import { NostrProvider } from "nostr-react";
import { PubkeyProvider } from "@/context/pubkey";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

// TODO: Save default relays in store, allow user to set and remove, retrieve user
// relays in a smart way based off who they are interacting with
// ...or just leave as fixed for hackathon (we have custom relay anyways)
const relays = [
  // "wss://nostr.terminus.money",
  // "wss://brb.io",
  // "wss://nostr.wine",
  // "wss://relay.snort.social",
  // "wss://gratten.duckdns.org/nostrrelay/relay2",
  "ws://localhost:8080"
  // "wss://relay.meetup.terminus.money"
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NostrProvider relayUrls={relays} debug={true}>
      <PubkeyProvider>
        <Component {...pageProps} />
      </PubkeyProvider>
    </NostrProvider>
  );
}
