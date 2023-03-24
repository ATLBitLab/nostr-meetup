import { useNostr, useNostrEvents } from "nostr-react";

const testEvent = {"content":"editing group","kind":600,"pubkey":"55a3fd367611e5161719388e9ca8d0eea5fea62374340bf98c85c3c0fcd42a57","tags":[],"created_at":1679684265,"id":"852ab6265f06b30fd2ebc211925e7c0788ac0f8dd01f12ffb3b1acbbdf2ca627","group_id":"47dddc4a5478e6d0a35a23f6ccb4112c6818e3305d4503b355c3ef331febf38e","sig":"64dd4dd32d5b3aa5cbaceeba7d467fd61404fefb12e044f204f99b166d82dc2c7d149bf6658c1b173e154c1cf62e5ff88ec0d796c76f4c0d9b60836104ce5417"}

export default function Test() {
  const { publish } = useNostr()
  const filter = {
    filter: {
      kinds: [600],
      // since: 1679671974
      // ids: ['852ab6265f06b30fd2ebc211925e7c0788ac0f8dd01f12ffb3b1acbbdf2ca627']
    }
  }
  const {events} = useNostrEvents(filter)
  console.log('events', events)

  const handleClick = () => {
    publish(testEvent)
  }
  return (
    <>
    <div className="grid columns-12">
      {events.map(n => {
        return <div key={n.id}>{n.id.slice(0,12)}</div>
      })}
    </div>
      <button onClick={handleClick}>POST</button>
    </>
  )
}