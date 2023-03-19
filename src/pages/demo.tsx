import Events from "../components/Events";
import { useZodForm } from "../utils/useZodForm";
import { z } from "zod";
import useNostr from "../hooks/useNostr";
import pool from "../lib/Pool";
import {
  verifySignature,
  validateEvent,
  UnsignedEvent,
  Event as SignedEvent,
} from "nostr-tools";

const relays = ["wss://gratten.duckdns.org/nostrrelay/relay2"];

export default function Demo() {
  const { pubkey } = useNostr();

  const disabled = !pubkey;

  const { register, handleSubmit } = useZodForm({
    mode: "onSubmit",
    schema: z.object({
      content: z.string(),
    }),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = async (data: any) => {
    if (disabled) return;
    console.log("data", data);

    // NOTE: SimplePool has bugs...
    // 1.7.5 is broken. Have to use 1.7.4 and ensureRelay before publishing.
    // also have to use quick connecting relays
    for (const r of relays) {
      console.debug(r, await pool.ensureRelay(r));
    }

    let unsignedEvent: UnsignedEvent = {
      kind: 1,
      pubkey: pubkey,
      created_at: Math.floor(Date.now() / 1000),
      tags: [],
      content: data.content,
    };

    try {
      const signedEvent: SignedEvent = await window.nostr.signEvent(
        unsignedEvent
      );

      console.debug("signedEvent", signedEvent);
      let ok = validateEvent(signedEvent);
      if (!ok) throw new Error("Invalid signedEvent");
      let veryOk = verifySignature(signedEvent);
      if (!veryOk) throw new Error("Invalid signature");

      console.debug("publishing signedEvent");
      let pubs = pool.publish(relays, signedEvent);
      pubs.on("ok", () => {
        // this may be called multiple times, once for every relay that accepts the event
        console.debug("ok");
        // ...
      });
      pubs.on("failed", () => {
        console.debug("failed");
      });
    } catch (err: any) {
      console.debug("err", err);
    }

    console.debug("done");
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2 w-1/3 h-64">
        <Events />
        <form className="flex gap-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border rounded border-gray-700 grow px-2 py-1"
            placeholder="Kind-1 message content"
            disabled={disabled}
            {...register("content")}
          />
        </form>

        <div className="flex justify-end">
          <button
            className={`${
              disabled ? "bg-gray-700" : "bg-purple-700"
            } w-fit border rounded px-2 py-1 uppercase`}
            disabled={disabled}
            onClick={handleSubmit(onSubmit)}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
