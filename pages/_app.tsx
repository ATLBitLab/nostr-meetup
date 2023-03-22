import { PubkeyProvider } from "@/context/pubkey";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <PubkeyProvider>
        <Component {...pageProps} />
      </PubkeyProvider>
  );
}
