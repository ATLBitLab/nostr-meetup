import Head from 'next/head'
import AppLayout from '@/components/AppLayout'
import Image from 'next/image'
import camping from '../public/camping.jpg'
import Button from '@/components/Button'

export default function SignUp() {
  return (
    <>
      <AppLayout title="Sign Up" description="Sign up for Nostr to use Nostr Meetup">
        <div className="bg-purple-600 min-h-full p-4 lg:p-16 lg:pt-24">
          <div className="relative z-10 bg-white p-4 rounded-md drop-shadow-sm max-w-2xl h-auto ml-auto flex flex-col gap-4 lg:p-12">
            <h1 className="font-display text-3xl">Sign up</h1>
            <p className="text-2xl mb-4">
              Nostr is a censorship resistant social protcol. Catherd uses Nostr to help you find meetups,
              so you need a Nostr account and a Nostr browser extension to sign in with us. We suggest
              using Alby or Nos2x.
            </p>

            <div className="flex flex-row gap-2">

              <Button href="https://getalby.com/">
                Get Alby
              </Button>

              <Button href="https://github.com/fiatjaf/nos2x">
                Get Nos2x
              </Button>

              <Button format="secondary" href="/">
                Help me with Nostr
              </Button>
            </div>
            

            <p className="text-2xl mb-4">
              Already have a Nostr account? Log in here:
            </p>

            <Button format="secondary" href="/login">
              Log in
            </Button>
          </div>
          <div className="w-full h-full absolute top-0 left-0">
            <Image src={camping} alt="" className="w-full h-full object-cover" />
          </div>
          
        </div>
      </AppLayout>
    </>
  )
}
