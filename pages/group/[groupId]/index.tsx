import Head from 'next/head'
import AppLayout from '@/components/AppLayout'
import Image from 'next/image'
import EventCard from '@/components/EventCard'
import Button from '@/components/Button'
import { useState } from 'react'
import { useNostrEvents } from 'nostr-react'
import { Kind } from 'nostr-tools'

export default function GroupDetail() {
  const [member, setMember] = useState(false)

  type EventData = {
    name: string,
    date: string,
    attendeeCount: number,
    desc: string,
    id: string,
    imgSrc: string,
    location: string,
  };
  type OrganizerData = {
    name: string;
  }
  const dummyOrganizers: OrganizerData[] = [
    {
      name: 'Stephen DeLorme'
    },
    {
      name: 'Chad Welch'
    },
    {
      name: 'Bryan Nonni'
    },
  ]
  
  const dummy = {
    name: 'Event Title 1',
    date: 'Saturday, April 1, 2023 11:30am',
    attendeeCount: 121,
    desc: 'Consensus cryptocurrency, hard fork nonce decentralized SHA-256, genesis block miner, blockchain! Pizza Bitcoin Improvement Proposal, halvening public key satoshis freefall together, bitcoin halvening. Transaction sats freefall together UTXO wallet consensus nonce Satoshi Nakamoto. Bitcoin Improvement Proposal blocksize soft fork, SHA-256, consensus full node pizza, sats. Difficulty, whitepaper.',
    id: 'def456',
    imgSrc: '/opt/group-abstract-1.jpg',
    location: 'Event Location',
  };

  const filterEvent = (content): EventData => {
      return {
          name: content?.name,
          date: content?.date,
          desc: content?.description,
          attendeeCount: Math.floor(Math.random() * 25),
          imgSrc: `/opt/group-abstract-${Math.floor(Math.random() * 4)}.jpg`,
          id: content?.name,
          location: 'ATL BAYBEE'
      }
  }
  const filterGroups = (content): EventData => {
    console.log('content', content, typeof content);
      return {
          name: content?.name,
          date: content?.date,
          desc: content?.description,
          attendeeCount: Math.floor(Math.random() * 25),
          imgSrc: `/opt/group-abstract-${Math.floor(Math.random() * 4)}.jpg`,
          id: content?.name,
          location: 'ATL BAYBEE'
      }
  }
  const { events } = useNostrEvents({
      filter: {
          kinds: [600, 700],
      }
  })
  const groups = events.filter(e => e.kind === 600 as Kind);
  const sessions = events.filter(e => e.kind === 700 as Kind);
  const mappedGroup = filterGroups(groups ? JSON.parse(groups[0]?.content ?? "{}") : "{}" ?? "{}");
  // console.log('groups', groups);
  // console.log(mappedGroup);
  // console.log('sessions', sessions);
  // console.log('session', sessions);
  return (
    <>
      <AppLayout title="Group Detail" description="All about this group">
        <div className="max-w-6xl min-h-full mx-auto p-4 lg:p-16 lg:pt-16 flex flex-col gap-12">
          {/* Group Info */}
          <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-4 w-3/5">
              <h1 className="text-4xl font-display">{mappedGroup.name}</h1>
              <p className="text-lg">
                When lambo UTXO double-spend problem, timestamp server genesis block mining difficulty block height. Hard fork when lambo address satoshis peer-to-peer, money printer go brrrrr timestamp server stacking sats, public key. Peer-to-peer blocksize transaction hodl block height hash few understand this. Segwit outputs.
              </p>

              <div className="flex flex-row gap-4">
                {!member ? 
                <Button onClick={()=>{setMember(true)}}>
                  Join Group
                </Button>
                :
                <Button onClick={()=>{setMember(true)}} disabled>
                  You&rsquo;re a member
                </Button>
                }

                {member ? 
                <Button href="/group/abc123/create">
                  Schedule Event
                </Button>
                : ``}
              </div>
              
            </div>
            <div className="order-first w-2/5">
              <Image src="/opt/group-abstract-1.jpg" alt="" width="832" height="480" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          {/* Organizers */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-display">Organizers</h2>
            <div className="flex flex-row flex-wrap gap-12">
              {dummyOrganizers.map((organizer)=>(
                <>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-b from-cyan-500 to-purple-500" />
                    <p className="font-display">{organizer.name}</p>
                  </div>
                </>
              ))}
              
          
            </div>
          </div>
          
          {/* Events */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-display">Upcoming Events</h2>
            <div className="flex flex-col gap-8">
              {sessions.map((session) => (
                <>
                  <EventCard
                    {...filterEvent(session)}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  )
}
