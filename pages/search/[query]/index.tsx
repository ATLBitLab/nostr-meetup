import Head from 'next/head'
import LandingLayout from '@/components/LandingLayout'

export default function SearchResults() {
  return (
    <>
      <LandingLayout title="Search results" description="Search for groups and events near you">
        <h1>Search Results</h1>
        <h2>Groups</h2>
        <p>Test</p>
        <h2>Events</h2>
        <p>Test</p>
      </LandingLayout>
    </>
  )
}
