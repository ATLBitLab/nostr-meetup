import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface contextType {
  pubkey: string | null;
  setPubkey: (pk: string | null) => void;
}
const NostrContext = createContext<contextType>({
  pubkey: null,
  setPubkey: (pk: string | null) => null,
});

export const NostrProvider = ({ children }: { children: ReactNode }) => {
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

  const val: contextType = {
    pubkey: pubkey,
    setPubkey: setStoragePubkey,
  };

  return <NostrContext.Provider value={val}>{children}</NostrContext.Provider>;
};

export const useNostr = () => {
  const context = useContext(NostrContext);
  return context;
};
