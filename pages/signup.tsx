import Head from 'next/head'
import LandingLayout from '@/components/LandingLayout'
import Image from 'next/image'
import camping from '../public/camping.jpg'

export default function SignUp() {
  return (
    <>
      <LandingLayout title="Sign Up" description="Sign up for Nostr to use Nostr Meetup">
        <div className="bg-purple-600 min-h-full p-4 lg:p-16 lg:pt-24">
          <div className="relative z-10 bg-white p-4 rounded-md drop-shadow-sm max-w-2xl h-auto ml-auto lg:p-12">
            <h1 className="font-display text-3xl">Sign in</h1>
            <p className="text-2xl mb-4">
              Nostr is a censorship resistant social protcol. Catherd uses Nostr to help you find meetups, so you need a Nostr account to sign in with us. If you need help getting setup with a Nostr account, see these resources:
            </p>
          </div>
          <div className="w-full h-full absolute top-0 left-0">
            <Image src={camping} alt="" className="w-full h-full object-cover" />
          </div>
          
        </div>
      </LandingLayout>
    </>
  )
}
