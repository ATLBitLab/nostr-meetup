import { NostrProvider } from "@/context/nostr";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NostrProvider>
      <Component {...pageProps} />
    </NostrProvider>
  );
}
