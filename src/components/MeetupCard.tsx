import { MeetupType } from "../types";

export default function MeetupCard({
  info,
  minimized = false,
}: {
  info: MeetupType;
  minimized?: boolean;
}) {
  console.debug("minimized", minimized);
  return (
    <div
      className={`${
        minimized ? "w-1/3" : "w-full"
      } flex border rounded p-4 gap-4`}
    >
      <img
        className="h-32 w-32 rounded"
        src={info.picture}
        height={128}
        width={128}
      />

      <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-2xl font-semibold capitalize">{info.name}</h1>
          <h2 className="text-xl font-light capitalize">{info.date}</h2>
          <h3 className="text-lg font-light capitalize">{info.location}</h3>
        </div>

        {!minimized && <p>{info.about}</p>}

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
}
