import LandingLayout from '@/components/LandingLayout'
import Tag from '@/components/Tag'

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
        <div className="bg-purple-600 min-h-full p-4 lg:p-16">
          <div className="bg-white p-4 rounded-md drop-shadow-sm max-w-xl h-auto ml-auto lg:p-8">
            <h1 className="sr-only">Nostr Meetup</h1>
            <p className="font-display text-3xl mb-4">Find people with shared interests and meetups to attend</p>
            <h2 className="font-display font-bold text-2xl mb-4">Topics</h2>
            <div className="flex flex-row flex-wrap gap-4">
              {topics.map((topic, key)=>(
                <Tag name={topic.name} slug={topic.slug} key={key} />
              ))}
            </div>
          </div>
        </div>
      </LandingLayout>
    </>
  )
}
