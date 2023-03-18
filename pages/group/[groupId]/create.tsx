import Head from 'next/head'
import LandingLayout from '@/components/LandingLayout'

export default function Login() {
  return (
    <>
      <Head>
        <title>Create Event</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingLayout title="Search results" description="">
        <h1>Create Event</h1>
        Create your event here
      </LandingLayout>
    </>
  )
}
