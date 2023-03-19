import { nip19 } from "nostr-tools";
import { useRouter } from "next/router";
import useProfile from "@/src/hooks/useProfile";

interface MeetupType {
  name: string;
  about: string;
  picture: string;
  date: string;
  location: string;
  topics: string[];
  id: string;
}

const testMeetups: MeetupType[] = [
  {
    name: "Atlanta BitDevs",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    picture: "https://picsum.photos/200",
    date: "October 42, 2142",
    location: "atlanta, GA",
    topics: ["nostr", "bitcoin"],
    id: "123",
  },
  {
    name: "OS People from Somewhere",
    about:
      "Mauris vitae ultricies leo integer. Auctor eu augue ut lectus arcu. Non nisi est sit amet facilisis magna. Amet nisl purus in mollis nunc sed id. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Cursus mattis molestie a iaculis at erat. Tristique senectus et netus et. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Ipsum consequat nisl vel pretium lectus quam. Ac auctor augue mauris augue neque gravida. Consectetur adipiscing elit pellentesque habitant. Tellus molestie nunc non blandit. Risus nullam eget felis eget. Pellentesque habitant morbi tristique senectus et. Fermentum leo vel orci porta non pulvinar neque laoreet.",
    picture: "https://picsum.photos/200",
    date: "October 42, 2142",
    location: "Murrieta, CA",
    topics: ["programming", "linux"],
    id: "13",
  },
  {
    name: "OS People from Somewhere",
    about:
      "Mauris vitae ultricies leo integer. Auctor eu augue ut lectus arcu. Non nisi est sit amet facilisis magna. Amet nisl purus in mollis nunc sed id. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Cursus mattis molestie a iaculis at erat. Tristique senectus et netus et. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Ipsum consequat nisl vel pretium lectus quam. Ac auctor augue mauris augue neque gravida. Consectetur adipiscing elit pellentesque habitant. Tellus molestie nunc non blandit. Risus nullam eget felis eget. Pellentesque habitant morbi tristique senectus et. Fermentum leo vel orci porta non pulvinar neque laoreet.",
    picture: "https://picsum.photos/200",
    date: "October 42, 2142",
    location: "Murrieta, CA",
    topics: ["programming", "linux"],
    id: "2",
  },
];

const Meetup = ({ info }: { info: MeetupType }) => {
  return (
    <div className="flex border rounded p-4 gap-4">
      <img className="h-32 w-32" src={info.picture} height={128} width={128} />

      <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-2xl font-semibold capitalize">{info.name}</h1>
          <h2 className="text-xl font-light capitalize">{info.date}</h2>
          <h3 className="text-lg font-light capitalize">{info.location}</h3>
        </div>

        <p>{info.about}</p>

        <div className="flex gap-2">
          <button className="border rounded w-fit bg-purple-600 capitalize text-white px-2 py-1">
            attend
          </button>
          <button className="border rounded w-fit border-purple-600 capitalize text-purple-600 px-2 py-1">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

const getChannelPubkey = (
  group: string[] | string | undefined,
  isReady: boolean
) => {
  if (!isReady) return null;
  if (typeof group !== "string") return null;
  if (group.startsWith("npub1")) {
    try {
      let { type, data: nipData } = nip19.decode(group);
      if (type === "npub") {
        return nipData as string;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // might be hex format
  try {
    // try npub encode to validate hex public key
    nip19.npubEncode(group);
    return group;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const relays = [
  "wss://nostr.terminus.money",
  "wss://brb.io",
  "wss://nostr.wine",
  "wss://relay.snort.social",
  "wss://gratten.duckdns.org/nostrrelay/relay2",
];

export default function Group() {
  const { query, isReady } = useRouter();

  const groupPubkey = getChannelPubkey(query?.group, isReady);
  console.debug("groupPubkey", groupPubkey);

  const profile = useProfile(relays, groupPubkey);
  console.debug("profile", profile);

  if (!isReady) {
    return <div className="h-full bg-white"></div>;
  }

  if (!groupPubkey) {
    return <p>Invalid hex public key or bech32 public key!</p>;
  }

  return (
    <div className="flex flex-col h-full px-64 bg-white overflow-y-auto gap-8 pt-8">
      <div className="w-full flex gap-8">
        {profile?.picture ? (
          <img className="w-64 h-64 shrink-0" src={profile.picture}></img>
        ) : (
          <div className="w-64 h-64 bg-gray-300 shrink-0"> </div>
        )}

        <div className="flex flex-col gap-4 pt-4 w-full">
          {/* <h1 className="text-3xl">
                {profile?.name
                  ? profile.name
                  : nip19.npubEncode(groupPubkey)}
              </h1> */}

          {/* <div> */}
          {profile?.name ? (
            <h1 className="text-3xl">{profile.name}</h1>
          ) : (
            <h1 className="text-3xl truncate">
              {nip19.npubEncode(groupPubkey)}
            </h1>
          )}
          {profile?.nip05 && <h2 className="text-xl">{profile.nip05}</h2>}
          {/* </div> */}
          {profile?.about && <p>{profile.about}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-6 w-2/3">
        {testMeetups.map((m) => {
          return <Meetup key={m.id} info={m} />;
        })}
      </div>
    </div>
  );
}
