import LandingLayout from '@/components/LandingLayout'
import Tag from '@/components/Tag'
import Image from 'next/image'
import collegeStudents from '../public/college-students.jpg'

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
    {
      name: 'Spirituality',
      slug: 'art',
    },
    {
      name: 'Comedy',
      slug: 'comedy',
    },
    {
      name: 'Photogrphy',
      slug: 'photography',
    },
    {
      name: 'Movies',
      slug: 'movies',
    },
  ]

  return (
    <>
      <LandingLayout description="Meetup with folks using Nostr meetup">
        <div className="bg-purple-600 min-h-full p-4 lg:p-16 lg:pt-24">
          <div className="relative z-10 bg-white p-4 rounded-md drop-shadow-sm max-w-2xl h-auto ml-auto lg:p-12">
            <h1 className="sr-only">Nostr Meetup</h1>
            <p className="font-display text-3xl mb-4">Find people with shared interests and meetups to attend</p>
            <h2 className="font-display font-bold text-2xl mb-4">Topics</h2>
            <div className="flex flex-row flex-wrap gap-4">
              {topics.map((topic, key)=>(
                <Tag name={topic.name} slug={topic.slug} key={key} />
              ))}
            </div>
          </div>
          <div className="w-full h-full absolute top-0 left-0">
            <Image src={collegeStudents} alt="" className="w-full h-full object-cover" />
          </div>
          
        </div>
      </LandingLayout>
    </>
  )
}
