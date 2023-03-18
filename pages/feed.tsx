import Head from 'next/head'
import LandingLayout from '@/components/LandingLayout'

export default function Feed() {
  return (
    <>
      <LandingLayout title="Feed" description="Latest events">
        <div>This is the feed page</div>
      </LandingLayout>
    </>
  )
}
