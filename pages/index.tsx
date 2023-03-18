import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LandingLayout from '@/components/LandingLayout'
import Tag from '@/components/Tag'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const topics = [
    {
      name: 'Bitcoin',
      slug: 'bitcoin',
    },
    {
      name: 'Nostr',
      slug: 'nostr',
    },
    {
      name: 'Acting',
      slug: 'acting',
    },
    {
      name: 'Art',
      slug: 'art',
    },
  ]

  return (
    <>
      <LandingLayout description="Meetup with folks using Nostr meetup">
        <>
          <h1>Nostr Meetup</h1>
          <p>Find people with shared interests and meetups to attend</p>
          <h2>Topics</h2>
          <div className="flex flex-row gap-4">
            {topics.map((topic, key)=>(
              <Tag name={topic.name} slug={topic.slug} key={key} />
            ))}
          </div>
          
        </>
      </LandingLayout>
    </>
  )
}
