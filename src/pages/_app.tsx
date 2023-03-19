import "~/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "~/components/Layout";
import NostrProvider from "../context/nostr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NostrProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NostrProvider>
  );
}
