import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LandingLayout from '@/components/LandingLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <LandingLayout description="Meetup with folks using Nostr meetup">
        <div>This is the LANDING page</div>
      </LandingLayout>
    </>
  )
}
