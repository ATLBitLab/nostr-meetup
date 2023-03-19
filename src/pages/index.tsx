import useNostr from "../hooks/useNostr";
import Events from "~/components/Events";

export default function Home() {
  const { pubkey } = useNostr();

  return (
    <>
      {!pubkey && (
        <div className="flex justify-end px-16 h-full items-center">
          <div className="flex border bg-white rounded border-black w-1/3 px-6 py-8">
            <h1 className="text-3xl font-semibold">
              Find people with shared interests and meetups to attend
            </h1>
          </div>
        </div>
      )}
      {pubkey && (
        <div>
          <Events />
        </div>
      )}
    </>
  );
}
