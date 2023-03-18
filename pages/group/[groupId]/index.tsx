import Head from 'next/head'
import LandingLayout from '@/components/LandingLayout'

export default function Login() {
  return (
    <>
      <Head>
        <title>Group Detail</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingLayout title="Group Detail" description="">
        <div>This is the group detail page</div>
      </LandingLayout>
    </>
  )
}
