import Head from 'next/head'
import AppLayout from '@/components/AppLayout'

export default function Feed() {
  return (
    <>
      <AppLayout title="Feed" description="Latest events">
        <div>
          This is the feed page
        </div>
      </AppLayout>
    </>
  )
}
