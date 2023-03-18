import Head from 'next/head'
import LandingLayout from '@/components/LandingLayout'

export default function Login() {
  return (
    <>
      <Head>
        <title>Search Results</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingLayout title="Search results" description="">
        <h1>Search Results</h1>
        <h2>Groups</h2>
        <p>Test</p>
        <h2>Events</h2>
        <p>Test</p>
      </LandingLayout>
    </>
  )
}
