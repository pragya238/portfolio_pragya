import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Marquee from '@/components/Marquee'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Stack from '@/components/Stack'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </main>
  )
}
