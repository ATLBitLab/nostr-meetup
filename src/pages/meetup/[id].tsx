import { useRouter } from "next/router";
import { MeetupType } from "@/src/types";
import MeetupCard from "@/src/components/MeetupCard";
// Meetup page is the expand view on a specific meetup event
// All information stems from the event ID of the published meetup event

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
    name: "Another Group",
    about:
      "Mauris vitae ultricies leo integer. Auctor eu augue ut lectus arcu. Non nisi est sit amet facilisis magna. Amet nisl purus in mollis nunc sed id. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Cursus mattis molestie a iaculis at erat. Tristique senectus et netus et. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Ipsum consequat nisl vel pretium lectus quam. Ac auctor augue mauris augue neque gravida. Consectetur adipiscing elit pellentesque habitant. Tellus molestie nunc non blandit. Risus nullam eget felis eget. Pellentesque habitant morbi tristique senectus et. Fermentum leo vel orci porta non pulvinar neque laoreet.",
    picture: "https://picsum.photos/id/240/300/300",
    date: "October 42, 2142",
    location: "Murrieta, CA",
    topics: ["programming", "linux"],
    id: "2",
  },
  {
    name: "A group to overflow",
    about:
      "Mauris vitae ultricies leo integer. Auctor eu augue ut lectus arcu. Non nisi est sit amet facilisis magna. Amet nisl purus in mollis nunc sed id. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Cursus mattis molestie a iaculis at erat. Tristique senectus et netus et. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Ipsum consequat nisl vel pretium lectus quam. Ac auctor augue mauris augue neque gravida. Consectetur adipiscing elit pellentesque habitant. Tellus molestie nunc non blandit. Risus nullam eget felis eget. Pellentesque habitant morbi tristique senectus et. Fermentum leo vel orci porta non pulvinar neque laoreet.",
    picture: "https://picsum.photos/id/240/300/300",
    date: "October 42, 2142",
    location: "Murrieta, CA",
    topics: ["programming", "linux"],
    id: "2",
  },
];

const Attendee = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="rounded-[50%] h-16 w-16 bg-gray-700" />
      <p>Full Name</p>
    </div>
  );
};

const getEventbyId = (id: string[] | string | undefined) => {
  if (typeof id !== "string") return null;

  const result = testMeetups.filter((obj) => {
    return obj.id === id;
  });
  return result[0];
};

export default function Meetup({}) {
  const { query, isReady } = useRouter();

  if (!isReady) {
    return null;
  }

  // TODO: Verify ID and then search relays for event id
  const event = getEventbyId(query.id);
  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <div className="flex flex-col h-full px-64 bg-white overflow-y-auto gap-8 pt-8">
      <div className="flex rounded gap-8">
        <img className="h-64 w-64 rounded shrink-0" src={event.picture} />

        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-2xl font-semibold capitalize">{event.name}</h1>
            <h2 className="text-xl font-light capitalize">{event.date}</h2>
            <h3 className="text-lg font-light capitalize">{event.location}</h3>
          </div>

          <p>{event.about}</p>

          <div className="flex gap-2">
            {/* TODO: Publish attend event */}
            <button className="border rounded w-fit bg-purple-600 capitalize text-white px-2 py-1">
              attend
            </button>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-semibold">Attending</h1>
      <div className="flex gap-8 w-10/12 flex-wrap">
        {[...Array(16)].map((e, i) => (
          <Attendee />
        ))}
      </div>

      <h1 className="text-3xl font-semibold">Topics</h1>
      <div className="flex gap-2 flex-wrap">
        {event.topics.map((t) => {
          return (
            <button
              key={t}
              className="capitalize px-2 py-1 border rounded border-gray-700 w-fit"
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}
