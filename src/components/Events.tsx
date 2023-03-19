import { Filter } from "nostr-tools";
import useSubscription from "~/hooks/useSubscription";

const relays = [
  // "wss://nostr.terminus.money",
  // "wss://brb.io",
  // "wss://nostr.wine",
  // "wss://relay.snort.social",
  "wss://gratten.duckdns.org/nostrrelay/relay2",
];

export default function Events() {
  const filters: Filter = {
    since: Math.floor(Date.now() / 1000),
    kinds: [1],
  };

  const notes = useSubscription(relays, [filters]);

  return (
    <div className="flex flex-col overflow-y-auto h-full border bg-white border-black">
      {notes.map((note) => (
        <div className="" key={note.id}>
          <span className="text-purple-700">{note.pubkey.slice(0, 10)}</span>
          <span>: {note.content}</span>
        </div>
      ))}
    </div>
  );
}
