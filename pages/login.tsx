import Head from "next/head";
import LandingLayout from "@/components/LandingLayout";
import Image from "next/image";
import cyberpunks from "../public/cyberpunks.jpg";
import { EventTemplate, Event } from "nostr-tools";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { usePubkey } from "@/context/pubkey";
import Link from "next/link";

declare global {
  interface Window {
    nostr: Nostr;
  }
}

type Nostr = {
  getPublicKey(): Promise<string>;
  signEvent(event: EventTemplate): Promise<Event>;
};

export default function Login() {
  const { setPubkey } = usePubkey();
  const router = useRouter();

  const [nostrExt, setNostrExt] = useState(false);

  useEffect(() => {
    setNostrExt("nostr" in window);
  }, []);

  const handleLogin = async () => {
    try {
      const pubkey = await window.nostr.getPublicKey();
      setPubkey(pubkey);

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <LandingLayout
        title="Login"
        description="Log in to Nostr Meetup easily with your Nostr profile."
      >
        <div className="bg-purple-600 min-h-full p-4 lg:p-16 lg:pt-24">
          <div className="relative z-10 bg-white p-4 rounded-md drop-shadow-sm max-w-2xl h-auto ml-auto lg:p-12">
            <h1 className="font-display text-3xl mb-4">Log in</h1>

            {nostrExt ? (
              <div className="flex flex-col gap-2">
                <p className="text-2xl">
                  Log in with a Nostr browser extension.
                </p>
                <button
                  className="border rounded bg-purple-700 text-white px-2 py-1 w-fit"
                  onClick={handleLogin}
                >
                  Log in with Nostr
                </button>
              </div>
            ) : (
              <div className="">
                <p className="text-2xl">Nostr browser extension required!</p>
                <span>Get one here: &nbsp;</span>
                <a
                  href="https://getalby.com/"
                  className="capitalize text-purple-700 hover:underline"
                >
                  alby
                </a>
                <span>,&nbsp;</span>
                <a
                  href="https://github.com/fiatjaf/nos2x"
                  className="capitalize text-purple-700 hover:underline"
                >
                  nos2x
                </a>
              </div>
            )}

            <div className="mt-4 flex flex-col gap-2">
              <p className="text-2xl">Not on Nostr yet? Sign up.</p>
              <Link href="/signup">
                <button className="border rounded border-purple-700 text-purple-700 px-2 py-1 w-fit">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full h-full absolute top-0 left-0">
            <Image
              src={cyberpunks}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </LandingLayout>
    </>
  );
}
