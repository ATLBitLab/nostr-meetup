import Head from 'next/head'
import AppLayout from '@/components/AppLayout'
import InputText from '@/components/InputText'
import TextArea from '@/components/TextArea'
import Button from '@/components/Button'
import { SetStateAction, useState } from 'react'

export default function SearchResults() {
  const [groupName, setGroupName] = useState('')
  const [groupDesc, setGroupDesc] = useState('')

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

          <Button>Create Group</Button>
        </form>
      </div>
      </AppLayout>
    </>
  )
}
