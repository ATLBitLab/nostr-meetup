import Head from 'next/head'
import LandingLayout from '@/components/LandingLayout'

export default function SignUp() {
  return (
    <>
      <LandingLayout title="Sign Up" description="Sign up for Nostr to use Nostr Meetup">
        <div>This is the sign up page</div>
      </LandingLayout>
    </>
  )
}
