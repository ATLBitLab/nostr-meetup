import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex justify-end px-16 h-full items-center">
      <div className="flex flex-col gap-6 border bg-white rounded border-black w-1/3 px-6 py-8">
        <h1 className="text-3xl font-semibold">Sign up</h1>

        {/* Login with nostr ext */}
        <div className="flex flex-col gap-2">
          <p>
            Nostr is a censorship resistant protocol. Catherd uses Nostr to help
            you find meetups, so you need a Nostr account to sign in with us. If
            you need help getting set up with a Nostr account, see these
            resources.
          </p>
          <button
            className="border rounded bg-purple-700 text-white px-2 py-1 w-fit"
            onClick={() => console.log("TODO")}
          >
            Help me with Nostr
          </button>
        </div>

        {/* Sign up link */}
        <div className="flex flex-col gap-2">
          <p>Already have a Nostr account? Log in here.</p>
          <Link href="/login">
            <button className="border rounded border-purple-700 text-purple-700 px-2 py-1 w-fit">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
