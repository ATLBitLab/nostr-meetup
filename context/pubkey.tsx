import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface PubkeyContextType {
  pubkey: string | null;
  setPubkey: (pk: string | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}
const PubkeyContext = createContext<PubkeyContextType>({
  pubkey: null,
  setPubkey: () => null,
  isLoading: true,
  setIsLoading: () => null,
});

export const PubkeyProvider = ({ children }: { children: ReactNode }) => {
  const [pubkey, setPubkey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const pk = localStorage.getItem("pubkey");
    if (pk) {
      setPubkey(pk);
    }
    setIsLoading(false);
  }, []);

  const setStoragePubkey = (pk: string | null) => {
    setPubkey(pk);
    if (!pk) {
      localStorage.removeItem("pubkey");
      return;
    }
    localStorage.setItem("pubkey", pk);
  };

  const val: PubkeyContextType = {
    pubkey: pubkey,
    setPubkey: setStoragePubkey,
    isLoading: isLoading,
    setIsLoading: setIsLoading,
  };

  return (
    <PubkeyContext.Provider value={val}>{children}</PubkeyContext.Provider>
  );
};

export const usePubkey = () => {
  return useContext(PubkeyContext);
};
