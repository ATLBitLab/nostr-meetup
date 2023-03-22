import Head from "next/head";
import LandingLayout from "@/components/LandingLayout";
import Image from "next/image";
import cyberpunks from "../public/cyberpunks.jpg";
import { EventTemplate, Event } from "nostr-tools";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { usePubkey } from "@/context/pubkey";
import Link from "next/link";
import Button from "@/components/Button";

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
              <div className="flex flex-col gap-8">
                <div className="mt-4 flex flex-col gap-4">
                  <p className="text-2xl">Not on Nostr yet? Sign up.</p>
                  <Button href="/signup" format="secondary">
                    Sign up
                  </Button>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-2xl">
                    Log in with a Nostr browser extension.
                  </p>

                  <Button onClick={handleLogin}>
                    Log in with Nostr
                  </Button>
                </div>
              </div>
              
            ) : (
              <div className="flex flex-col gap-8">
                <p className="text-2xl">
                  A Nostr browser extension is required to log in to this website.
                </p>

                <Button href="/signup">
                  Learn how to sign up
                </Button>
              </div>
            )}
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
