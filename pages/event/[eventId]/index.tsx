import Head from 'next/head'
import LandingLayout from '@/components/LandingLayout'

export default function EventDetail() {
  return (
    <>
      <LandingLayout title="Event Detail" description="All about this event">
        <div>This is the event detail page</div>
      </LandingLayout>
    </>
  )
}
