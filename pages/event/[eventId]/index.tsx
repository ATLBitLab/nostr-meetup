import Head from 'next/head'
import AppLayout from '@/components/AppLayout'
import Button from '@/components/Button'
import Image from 'next/image'
import { useState } from 'react'

export default function EventDetail() {
  let eventData = {
    name: 'Event Title 1',
    date: 'Saturday, April 8, 2023 11:30am',
    attendeeCount: 98,
    desc: 'Consensus cryptocurrency, hard fork nonce decentralized SHA-256, genesis block miner, blockchain! Pizza Bitcoin Improvement Proposal, halvening public key satoshis freefall together, bitcoin halvening. Transaction sats freefall together UTXO wallet consensus nonce Satoshi Nakamoto. Bitcoin Improvement Proposal blocksize soft fork, SHA-256, consensus full node pizza, sats. Difficulty, whitepaper.',
    id: 'def456',
    imgSrc: '/opt/group-abstract-1.jpg',
    location: 'Event Location',
    attending: false
  }

  const [attending, setAttending] = useState(false)

  return (
    <>
      <AppLayout title="Event Detail" description="All about this event">
        <div className="max-w-6xl min-h-full mx-auto p-4 lg:p-16 lg:pt-16 flex flex-col gap-12">
          {/* Group Info */}
          <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-4 w-3/5">
              <h1 className="text-4xl font-display">{eventData.name}</h1>
              <p className="text-2xl font-display">{eventData.date}</p>
              <p className="text-xl font-display">{eventData.location}</p>
              <p className="text-lg">{eventData.desc}</p>

              <div className="flex flex-row gap-4 items-center">
                {!attending ? 
                <Button onClick={()=>{setAttending(true)}}>
                  Attend
                </Button>
                : ``}

                <p className="text-xl">{eventData.attendeeCount} going</p>
              </div>
              
            </div>
            <div className="order-first w-2/5">
              <Image src="/opt/group-abstract-1.jpg" alt="" width="832" height="480" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  )
}
