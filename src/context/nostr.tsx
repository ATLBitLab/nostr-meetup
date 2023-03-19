import { SimplePool } from "nostr-tools";
import { ReactNode, createContext, useState, useEffect } from "react";

// export const NostrContext = createContext<SimplePool | null>(null);
interface contextType {
  pubkey: string | null;
  setPubkey: (pk: string | null) => void;
}
// export const NostrContext = createContext<{ pubkey: string | null }>({
export const NostrContext = createContext<contextType>({
  pubkey: null,
  setPubkey: (pk: string | null) => null,
});

const NostrProvider = ({ children }: { children: ReactNode }) => {
  // const [pool, setPool] = useState<SimplePool>(new SimplePool());
  const [pubkey, setPubkey] = useState<string | null>(null);

  useEffect(() => {
    const pk = localStorage.getItem("pubkey");
    if (pk) {
      setPubkey(pk);
    }
  }, []);

  const setStoragePubkey = (pk: string | null) => {
    setPubkey(pk);
    if (!pk) {
      localStorage.removeItem("pubkey");
      return;
    }
    localStorage.setItem("pubkey", pk);
  };

  // useEffect(() => {
  //   return () => {
  //     pool.close()
  //   }
  // }, [])

  const val = {
    pubkey: pubkey,
    setPubkey: setStoragePubkey,
  };

  return <NostrContext.Provider value={val}>{children}</NostrContext.Provider>;
};

export default NostrProvider;
