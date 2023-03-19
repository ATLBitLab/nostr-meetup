import useNostr from "../hooks/useNostr";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const { setPubkey } = useNostr();

  const router = useRouter();

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
    <div className="flex justify-end px-16 h-full items-center">
      <div className="flex flex-col gap-6 border bg-white rounded border-black w-1/3 px-6 py-8">
        <h1 className="text-3xl font-semibold">Log In</h1>

        {/* Login with nostr ext */}
        <div className="flex flex-col gap-2">
          <p> Log in with a Nostr browser extension </p>
          <button
            className="border rounded bg-purple-700 text-white px-2 py-1 w-fit"
            onClick={handleLogin}
          >
            Log in with Nostr
          </button>
        </div>

        {/* Sign up link */}
        <div className="flex flex-col gap-2">
          <p>Not on Nostr yet? Sign up.</p>
          <Link href="/signup">
            <button className="border rounded border-purple-700 text-purple-700 px-2 py-1 w-fit">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
