import Head from 'next/head'
import AppLayout from '@/components/AppLayout'
import InputText from '@/components/InputText'
import TextArea from '@/components/TextArea'
import Button from '@/components/Button'
import { SetStateAction, useState } from 'react'
import { useNostr } from 'nostr-react'
import { usePubkey } from '@/context/pubkey'
import { Event, getEventHash, UnsignedEvent, validateEvent, verifySignature } from 'nostr-tools'

export default function SearchResults() {
  const { publish } = useNostr()
  const { pubkey } = usePubkey()
  const [groupName, setGroupName] = useState('')
  const [groupDesc, setGroupDesc] = useState('')

  const publishGroup = async (e: any) => {
    e.preventDefault()

    const content = {
      name: groupName,
      description: groupDesc
    }

    const event: any = {
      content: JSON.stringify(content),
      kind: 600,
      tags: [],
      created_at: Math.round(Date.now() / 1000) 
    };

    try {
      const signedEvent = await window.nostr.signEvent(event)
      console.debug('signedEvent', signedEvent)
      let ok = validateEvent(signedEvent)
      if (!ok) throw new Error('Invalid event')
      let veryOk = verifySignature(signedEvent)
      if (!veryOk) throw new Error('Invalid signature')

      console.debug('event id', signedEvent.id)
      publish(signedEvent)
    } catch (err: any) {
      console.error(err.message)
    }

  }

  return (
    <>
      <AppLayout title="Create a meetup group" description="Create your very own meetup group">
        <div className="max-w-6xl min-h-full mx-auto p-4 lg:p-16 lg:pt-16 flex flex-col gap-12">
          <h1 className="text-4xl font-display">Create a meetup group</h1>

          <form className="flex flex-col gap-8">
            <InputText
              label="Group Name"
              placeholder="My group"
              value={groupName}
              onChange={(e)=>{setGroupName(e.target.value)}}
            />
            
            <TextArea
              label="Description"
              placeholder="All about this meetup group..."
              value={groupDesc}
              onChange={(e)=>{setGroupDesc(e.target.value)}}
              rows={5}
            />

          <Button onClick={publishGroup}>Create Group</Button>
        </form>
      </div>
      </AppLayout>
    </>
  )
}
