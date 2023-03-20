import { nip19 } from "nostr-tools";
import { useRouter } from "next/router";
import { queryToPubkey } from "@/src/utils/nostr";
import useProfile from "@/src/hooks/useProfile";
import { MeetupType } from "@/src/types";
import MeetupCard from "@/src/components/MeetupCard";
import ProfileCard from "@/src/components/ProfileCard";

// Group view into a pubkey
// Displays group profile information and upcoming group events
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

export default function Group() {
  const { query, isReady } = useRouter();

  const hexkey = queryToPubkey(query?.pubkey, isReady);

  if (!isReady) {
    return <div className="h-full bg-white"></div>;
  }

  if (!hexkey) {
    return <p>Invalid hex public key or bech32 public key!</p>;
  }

  return (
    <div className="flex flex-col h-full px-64 bg-white overflow-y-auto gap-8 pt-8">
      <ProfileCard pubkey={hexkey} />
      <div className="flex flex-col gap-6 w-2/3">
        {testMeetups.map((m) => {
          return <MeetupCard key={m.id} info={m} />;
        })}
      </div>
    </div>
  );
}
