import About from '@/components/About'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen p-24">
      <div className='gap-y-10'>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      </div>
    </main>
  )
}
