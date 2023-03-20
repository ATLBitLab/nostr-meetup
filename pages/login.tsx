import Head from 'next/head'
import LandingLayout from '@/components/LandingLayout'
import Image from 'next/image'
import cyberpunks from '../public/cyberpunks.jpg'

export default function Login() {
  return (
    <>
      <LandingLayout title="Login" description="Log in to Nostr Meetup easily with your Nostr profile.">
      <div className="bg-purple-600 min-h-full p-4 lg:p-16 lg:pt-24">
          <div className="relative z-10 bg-white p-4 rounded-md drop-shadow-sm max-w-2xl h-auto ml-auto lg:p-12">
            <h1 className="font-display text-3xl">Log in</h1>
            <p className="text-2xl mb-4">Log in with a Nostr browser extension.</p>
          </div>
          <div className="w-full h-full absolute top-0 left-0">
            <Image src={cyberpunks} alt="" className="w-full h-full object-cover" />
          </div>
          
        </div>
      </LandingLayout>
    </>
  )
}
