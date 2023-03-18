import Head from 'next/head'
import LandingLayout from '@/components/LandingLayout'

export default function Login() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign up for Nostr meetup" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingLayout title="Sign Up" description="Sign up for Nostr to use Nostr Meetup">
        <div>This is the sign up page</div>
      </LandingLayout>
    </>
  )
}
