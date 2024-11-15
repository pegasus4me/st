import Image from 'next/image'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import Blog from '@/components/blog'

import { Questrial } from 'next/font/google'
const questrial = Questrial({subsets : ['latin'], weight : "400"})

export default function Home() {

  
  return (
    <main className="mt-10">
      <h1 className={` ${questrial.className} text-white text-2xl text-start p-5`}>safoan touil</h1>
     <Intro/>
     <Projects/>
     <Blog/>
    </main>
  )
}
