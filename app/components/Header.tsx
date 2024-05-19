'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

export default function Header() {
 
  const [showX,setShowX] = useState(false)
  const [showBar,setShowBar] = useState(true)
  const [showRight,setShowRight] = useState(false)
  const moreInfoRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false);
  const [initialScroll, setInitialScroll] = useState(false);
  const handleBar = () =>{
    setShowX((prevShow) => !prevShow)
    setShowBar(false)
    setShowRight(true)

  }
  const handleX = () =>{
    setShowBar((prevShow) => !prevShow)
    setShowX(false)
    setShowRight(false)
    

  }
 
  useEffect(() =>{
  const handleScroll = () => {
    if (window.scrollY > 0 && !initialScroll) {
      setScrolled(true);
      setInitialScroll(true);
    } else if (window.scrollY === 0) {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
})

  
  return (
    <>
   <div  ref={moreInfoRef} className={`bg-header fixed
    top-0 w-full z-50 flex justify-between items-center text-xl px-4 md:px-10 pr-20 md:pr-24   transition-all duration-1000  ${scrolled ? " h-16 " : "h-20 "} `} >

    <div className="left">
      <Link href='#home'>
    <h2 className='hover:text-hover'> 🧑🏻‍💻 Bhuwan Paudel</h2>
      </Link>
    </div>

    <div className="right ">
        <ul className='sm:flex hidden gap-5 md:gap-10'>
      
          <Link href='#about'  className='hover:text-hover 
           transition-all'>
            <li className=" relative cursor-pointer group px-1 pb-1">About
            <span className=" mr-[2px] absolute block left-0 right-0 bottom-0  h-[1px] bg-hover scale-x-0 transform  transition-transform ease-in-out  origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left "></span>
            </li>
          </Link>
          <Link href='#project' className='hover:text-hover 
           transition-all'>
            <li className=" relative cursor-pointer group px-1 pb-1">Projects
            <span className=" absolute block left-0 right-0 bottom-0  h-[1px] bg-hover scale-x-0 transform  transition-transform ease-in-out  origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left "></span>
            </li>
          </Link>

              <Link href='hackathon' className=' hover:text-hover
           transition-all'>
            <li className=" relative cursor-pointer group px-1 pb-1">Hackathon
            <span className=" mr-1 absolute block left-0 right-0 bottom-0  h-[1px]
             bg-hover scale-x-0 transform  transition-transform ease-in-out
               origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left ">

               </span>
            </li>
          </Link>

          <Link href='#contact' className='hover:text-hover 
           transition-all'>
            <li className=" relative cursor-pointer group px-1 pb-1">Contacts
            <span className=" absolute block left-0 right-0 bottom-0  h-[1px] bg-hover scale-x-0 transform  transition-transform ease-in-out  origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left "></span>
            </li>
          </Link>
            </ul>
            </div>
            {/* right small */}
            <div className="button sm:hidden block">
              {showBar && 
              <button onClick={handleBar}>
            <i className="fa-solid fa-bars text-2xl p-1 hover:text-black duration-500"></i>
              </button>
              }

              {/* x */}
              {showX &&
              <button onClick={handleX} className=' '>
              <i className="fa-solid fa-x text-2xl text-red-700 p-1
               hover:text-red-800 duration-500"></i>
              </button>
              }
            </div>
            {showRight &&
         <div className={` right-small grid py-2  sm:hidden   bg-[#EEF7FF] fixed left-0 transition-all 
          ${scrolled ? "top-16" : "top-20 "} `}>
        <ul className=' py-2 relative   text-center  grid  items-center justify-center w-screen gap-3 md:gap-10'>
          <Link href='#about'  className='hover:text-hover 
           transition-all'>
            <li  onClick={handleX} className=" relative cursor-pointer group px-1 pb-1">About
            <span className=" mx-3 mr-4 absolute block left-0 right-0 bottom-0  h-[1px] bg-hover scale-x-0 transform  transition-transform ease-in-out  origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left "></span>
            </li>
          </Link>
          <Link href='#project' className='hover:text-hover 
           transition-all'>
            <li  onClick={handleX} className=" relative cursor-pointer group px-1 pb-1">Projects
            <span className="mr-2 absolute block left-0 right-0 bottom-0  h-[1px] bg-hover scale-x-0 transform  transition-transform ease-in-out  origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left "></span>
            </li>
          </Link>
              <Link href='hackathon' className=' hover:text-hover
           transition-all'>
            <li className=" relative cursor-pointer group px-1 pb-1">Hackathon
            <span className=" mr-1 absolute block left-0 right-0 bottom-0  h-[1px]
             bg-hover scale-x-0 transform  transition-transform ease-in-out
               origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left ">

               </span>
            </li>

          </Link>

          <Link href='#contact' className='hover:text-hover 
           transition-all'>
            <li  onClick={handleX} className=" relative cursor-pointer group px-1 pb-1">Contacts
            <span className="mr-2 absolute block left-0 right-0 bottom-0  h-[1px] bg-hover scale-x-0 transform  transition-transform ease-in-out  origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left "></span>
            </li>
          </Link>
            </ul>
            </div>
}
   </div>
   
   </>
  )
}
