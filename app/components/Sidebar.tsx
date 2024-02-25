import React from 'react'

export default function Sidebar() {
  return (
    <div className='fixed -left-2 top-1/3  pt-20 z-50'>
      <div className="links  flex flex-col gap-3 sm:gap-4 bg-header  
       px-1 pl-3 py-2  sm:py-3 pt-3 rounded-xl ">
        <div className="github">
          <a href="https://github.com/bhuwanpp" target='_blank'>
        <i className="fa-brands fa-github   relative top-0 hover:-top-[2px]   
         transition-all duration-500 text-3xl  "></i>
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/bhuwan-paudel-591468224/" target='_blank'>
        <i className="fa-brands fa-linkedin text-3xl   text-[#0077b5]
         transition-all duration-500  relative top-0 hover:-top-[2px] "></i>
          </a>
        </div>
        <div className="twitter">
          <a href="https://twitter.com/Bhuwanpp" target='_blank'>
        <i className="fa-brands fa-twitter text-3xl   text-[#1da1f2] 
         transition-all duration-500  relative top-0 hover:-top-[2px] "></i>
          </a>
        </div>
      </div>
    </div>
  )
}
