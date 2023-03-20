import { useRouter } from "next/router";
import { queryToPubkey } from "~/utils/nostr";
import useProfile from "~/hooks/useProfile";
import { MeetupType } from "@/src/types";
import MeetupCard from "@/src/components/MeetupCard";
import ProfileCard from "@/src/components/ProfileCard";
import Link from "next/link";

// Profile view into a pubkey
// Displays a list of upcoming events from all groups the pubkey attends
// Displays a list of all groups that this person attends
// (essentially contact list w/ additional has created a meetup event?)
// Assumption is no difference between user and group - just a different view

const testMeetups: MeetupType[] = [
  {
    name: "Atlanta BitDevs",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picture: "https://picsum.photos/id/238/300/300",
    date: "October 42, 2142",
    location: "atlanta, GA",
    topics: ["nostr", "bitcoin"],
    id: "123",
  },
  {
    name: "OS People from Somewhere",
    about:
      "Mauris vitae ultricies leo integer. Auctor eu augue ut lectus arcu. Non nisi est sit amet facilisis magna. Amet nisl purus in mollis nunc sed id. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Cursus mattis molestie a iaculis at erat. Tristique senectus et netus et. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Ipsum consequat nisl vel pretium lectus quam. Ac auctor augue mauris augue neque gravida. Consectetur adipiscing elit pellentesque habitant. Tellus molestie nunc non blandit. Risus nullam eget felis eget. Pellentesque habitant morbi tristique senectus et. Fermentum leo vel orci porta non pulvinar neque laoreet.",
    picture: "https://picsum.photos/id/239/300/300",
    date: "October 42, 2142",
    location: "Murrieta, CA",
    topics: ["programming", "linux"],
    id: "13",
  },
  {
    name: "OS People from Somewhere",
    about:
      "Mauris vitae ultricies leo integer. Auctor eu augue ut lectus arcu. Non nisi est sit amet facilisis magna. Amet nisl purus in mollis nunc sed id. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Cursus mattis molestie a iaculis at erat. Tristique senectus et netus et. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Ipsum consequat nisl vel pretium lectus quam. Ac auctor augue mauris augue neque gravida. Consectetur adipiscing elit pellentesque habitant. Tellus molestie nunc non blandit. Risus nullam eget felis eget. Pellentesque habitant morbi tristique senectus et. Fermentum leo vel orci porta non pulvinar neque laoreet.",
    picture: "https://picsum.photos/id/240/300/300",
    date: "October 42, 2142",
    location: "Murrieta, CA",
    topics: ["programming", "linux"],
    id: "2",
  },
];

const testPubkeys = [
  "7c5f24e1c95f6f1f75555498f0019be1259a65c75ae851c235f7b15c9f88e0ee",
  "000000dd7a2e54c77a521237a516eefb1d41df39047a9c64882d05bc84c9d666",
  "5b6bfd0b8b1b2107e247d1750519ef30c142d5e6da8503cd28293ee22446c43b",
];

export default function Group() {
  const { query, isReady } = useRouter();

  const hexkey = queryToPubkey(query?.pubkey, isReady);
  console.debug("hexkey", hexkey);

  const profile = useProfile(hexkey);

  if (!isReady) {
    return <div className="h-full bg-white"></div>;
  }

  if (!hexkey) {
    return <p>Invalid hex public key or bech32 public key!</p>;
  }

  return (
    <div className="flex flex-col h-full px-64 bg-white overflow-y-auto gap-8 pt-8">
      <h1 className="text-3xl font-semibold">Upcoming events</h1>

      <div className="flex gap-6 w-full">
        {testMeetups.map((m) => {
          return <MeetupCard minimized key={m.id} info={m} />;
        })}
      </div>

      <h1 className="text-3xl font-semibold">Groups you attend</h1>
      <div className="flex gap-6 w-full">
        {testPubkeys.map((pk) => {
          return (
            <Link href={`/g/${pk}`} className="w-1/3">
              <ProfileCard minimized pubkey={pk} key={pk} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
