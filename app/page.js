import { About, Catalouge, Hero, Partners } from '@/components'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Catalouge />
    </main>
  )
}
