import { About, Catalouge, Footer, Hero, Partners, Review } from '@/components'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Catalouge />
      <Partners />
      <Review />
      <Footer/>
    </main>
  )
}
