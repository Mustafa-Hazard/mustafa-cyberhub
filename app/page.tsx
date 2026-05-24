import Cursor    from '@/components/ui/Cursor'
import Loader     from '@/components/ui/Loader'
import Navbar     from '@/components/ui/Navbar'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Hero       from '@/components/sections/Hero'
import About      from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects   from '@/components/sections/Projects'
import Skills     from '@/components/sections/Skills'
import Beyond     from '@/components/sections/Beyond'
import Education  from '@/components/sections/Education'
import Contact    from '@/components/sections/Contact'
import Footer     from '@/components/ui/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Beyond />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
