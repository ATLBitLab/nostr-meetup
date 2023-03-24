import Head from 'next/head'
import AppLayout from '@/components/AppLayout'
import InputText from '@/components/InputText'
import TextArea from '@/components/TextArea'
import Button from '@/components/Button'
import { useState } from 'react'

export default function Login() {
  const [eventTitle, setEventTitle] = useState('')
  const [eventDesc, setEventDesc] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [eventLocation, setEventLocation] = useState('')

  return (
    <>
      <AppLayout title="Search results" description="Search for events near you">
        <div className="max-w-6xl min-h-full mx-auto p-4 lg:p-16 lg:pt-16 flex flex-col gap-12">
          <h1 className="text-4xl font-display">Schedule Event</h1>

          <p className="text-2xl font-display">Group Title 1</p>

          <InputText
            label="Title"
            placeholder="Nostrween"
            value={eventTitle}
            onChange={(e)=>{setEventTitle(e.target.value)}}
          />

          <InputText
            label="Date"
            placeholder="Saturday, April 1, 2023 11:30am"
            value={eventTitle}
            onChange={(e)=>{setEventTitle(e.target.value)}}
          />
          
          <InputText
            label="Location"
            placeholder="Carla & Walker's Old Timey Saloon"
            value={eventTitle}
            onChange={(e)=>{setEventTitle(e.target.value)}}
          />

          <TextArea
            label="Description"
            placeholder="A party where we all wear purple feathered bird costumes"
            value={eventDesc}
            onChange={(e)=>{setEventDesc(e.target.value)}}
            rows={5}
          />

          <Button>
            Create Event
          </Button>
        </div>
      </AppLayout>
    </>
  )
}
