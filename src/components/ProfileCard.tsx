import { nip19 } from "nostr-tools";
import useProfile from "../hooks/useProfile";
import Link from "next/link";

export default function ProfileCard({
  pubkey,
  minimized = false,
}: {
  pubkey: string;
  minimized?: boolean;
}) {
  const profile = useProfile(pubkey);

  const imgDimensions = minimized ? "w-32 h-32" : "w-64 h-64";

  return (
    <div
      className={`${
        minimized ? "border rounded px-4 py-2" : ""
      } w-full flex gap-8`}
    >
      {profile?.picture ? (
        <img
          className={`${imgDimensions} rounded shrink-0`}
          src={profile.picture}
        ></img>
      ) : (
        <div className={`${imgDimensions} rounded bg-gray-300 shrink-0`}> </div>
      )}

      <div className="flex flex-col gap-4 pt-4 w-full">
        {/* TODO:  npub doesn't overflow right*/}
        {profile?.name ? (
          <h1 className="text-3xl">{profile.name}</h1>
        ) : (
          <h1 className="text-3xl truncate">
            {nip19.npubEncode(pubkey).slice(0, 12) + "..."}
          </h1>
        )}

        {!minimized && (
          <>
            {profile?.nip05 && <h2 className="text-xl">{profile.nip05}</h2>}
            {profile?.about && <p>{profile.about}</p>}
          </>
        )}
        <p>101 members</p>
      </div>
    </div>
  );
}
