import { useZodForm } from "../utils/useZodForm";
import { z } from "zod";

const defaultTopics = [
  "acting",
  "bitcoin",
  "nostr",
  "movies",
  "art",
  "photography",
  "spirituality",
  "technology",
  "comedy",
];

export default function Home() {
  const { register, handleSubmit } = useZodForm({
    mode: "onSubmit",
    schema: z.object({
      topic: z.string().optional(),
      location: z.string().optional(),
    }),
    defaultValues: {
      topic: "",
      location: "",
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex justify-end px-16 h-full items-center">
      <div className="flex flex-col gap-4 border bg-white rounded border-black w-1/3 px-6 py-8">
        <h1 className="text-3xl font-semibold">
          Find people with shared interests and meetups to attend
        </h1>

        <form className="flex grow gap-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border rounded border-gray-700 grow px-2 py-1"
            defaultValue="test"
            placeholder="Search by topic"
            {...register("topic")}
          />
          <input
            className="border rounded border-gray-700 grow px-2 py-1"
            defaultValue="test"
            placeholder="Search by location"
            {...register("location")}
          />
        </form>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Topics</h2>
          <div className="flex gap-2 flex-wrap">
            {defaultTopics.map((dt) => {
              return (
                <button
                  key={dt}
                  className="capitalize px-2 py-1 border rounded border-gray-700 w-fit"
                >
                  {dt}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
