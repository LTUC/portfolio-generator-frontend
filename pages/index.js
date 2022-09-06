import Head from 'next/head'
import LandingPage from '../components/LandingPage'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </div>
  )
}