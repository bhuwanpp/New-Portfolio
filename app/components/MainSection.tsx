'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
export default function MainSection() {
  return (
    <main className=' px-10 lg:px-20 py-16 sm:py-24' id='home' >
      <div className='md:flex  grid  gap-5 md:gap-20 '>
        <div className="left pt-10 md:pt-20 pl-5   w-full md:w-[450px] lg:w-[500px]">
          <div className="hello pb-2 md:pb-5 flex items-center gap-5">
          <h1 className='text-5xl bg-clip-text bg-gradient-to-r from-[#50c9c3] to-[#ff7eb3] inline-block text-transparent font-bold'>Hello🌐
          </h1>
          </div>
          <h2 className='text-3xl font-normal pb-3 md:pb-5'>I am Bhuwan Paudel.🧑🏻‍💻</h2>
          <p className='text-xl'>Frontend Developer who likes 
       <span className='text-[#edd115] font-semibold  pl-2 font-serif'>
       <Typewriter
            words={[' JavaScript']}
            typeSpeed={50}
            loop={2}
            deleteSpeed={10}
          />
        </span>.
          And also love making websites. </p>
          <div className="button pt-5">
            <a href="mailto:bhubanpaudel79@gmail.com">
          <button className='bg-blue-200 hover:bg-blue-300 hover:text-hover transition-all duration-500  px-7 py-2 rounded-md mb-3'>Say Hi 👋
          </button>
            </a>
          <br />
          <a href="/resume/cv.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <button className='bg-blue-200 hover:bg-blue-300  hover:text-hover transition-all duration-500  px-2 py-2 rounded-md'> 
              📄 My Resume</button>
          </a>
          </div>
        </div>
        <div className="right  relative pt-5 md:pl-0 pl-0 sm:pl-32  md:pt-10 ">
          <img src='/images/myself.png' alt="my pic" className='rounded-lg  h-96 md:h-96' />
        </div>
      </div>

    </main>
  )
}
