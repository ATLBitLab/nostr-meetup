import Head from 'next/head'
import LandingLayout from '@/components/LandingLayout'

export default function Login() {
  return (
    <>
      <LandingLayout title="Login" description="Log in to Nostr Meetup easily with your Nostr profile.">
        <div>This is the login page</div>
      </LandingLayout>
    </>
  )
}
