import React from 'react'

export default function Contacts() {
  return (
    <div className='  lg:flex grid gap-5 lg:gap-28 px-16 lg:px-20 py-5' id='contact'>
      <div className="left">
        <h2 className='text-2xl pb-3 '>Find me on Socials:</h2>
        <div className="links flex gap-5 pl-5 px-2 py-2 rounded-xl ">
        <div className="github pb-3">
          <a href="https://github.com/bhuwanpp" target='_blank'>
        <i className="fa-brands fa-github  relative top-0 hover:-top-1  text-4xl
         transition-all duration-500"></i>
          </a>
        </div>
        <div className="linkedin pb-3">
          <a href="https://www.linkedin.com/in/bhuwan-paudel-591468224/" target='_blank'>
        <i className="fa-brands fa-linkedin text-4xl
        relative top-0 hover:-top-1 text-[#0077b5] transition-all duration-500"></i>
          </a>
        </div>
        <div className="twitter">
          <a href="https://twitter.com/BhuwanP69" target='_blank'>
        <i className="fa-brands fa-twitter text-4xl relative top-0 hover:-top-1
         text-[#1da1f2] 
         transition-all duration-500"></i>
          </a>
        </div>
      </div>
      </div>
      {/* left  */}
      <div className="right text-start  md:text-center  py-0 lg:py-20 ">
        <h2 className=' text-2xl md:text-3xl   pb-2 tracking-wider font-semibold'>Have any Questions? Reach out.</h2>
        <h5 className='text-md'>Send me a 
        {/* tweet */}
        <a href="https://twitter.com/BhuwanP69" target='_blank' className='text-contact font-normal relative text-button-color4 cursor-pointer group px-1 pb-1'>Tweet
           <span className=" mr-1 absolute block left-0 right-0 bottom-0  h-[1px]
            bg-contact scale-x-0 transform  transition-transform ease-in-out  origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left "></span>
           
           </a> or you can email me at:
           {/* email */}
         <a href="mailto:bhubanpaudel79@gmail.com" target='_blank' className='relative text-button-color4 cursor-pointer group pb-1 px-1  text-contact font-normal'>bhubanpaudel79@gmail.com
         {/* underline  */}
           <span className=" mr-2 absolute block left-0 right-0 bottom-0  h-[1px]
            bg-contact  scale-x-0 transform  transition-transform ease-in-out  origin-right duration-300  group-hover:scale-x-105 group-hover:origin-left "></span>
           </a></h5>
      </div>
    </div>
  )
}
