export default function About() {
  return (
    <div className="about pb-10 md:pb-40 px-5  lg:px-20  pt-5 sm:pt-28" id='about'>
      <h2 className='text-center text-3xl font-bold
      '>About Me</h2>
      <hr className="h-[0.9px] my-8 mx-5 md:mx-0  bg-line border-0"></hr>

    <div className='md:flex grid  gap-10  md:gap-20  justify-between px-5 lg:px-10'>
      <div className="left w-80 sm:w-[425px] text-lg px-2">
        <p className='font-semibold text-xl pb-2 '>Who am I ? </p>
        <h1 className='font-normal'>Hi ! I am Bhuwan Paudel, a software developer who loves to build website .
        <p className='pt-2'>
         I have a strong foundation in <span className=' font-mono  italic text-[#edd115] font-semibold px-1'>JavaScript</span> and <span className='text-[#61dafb] italic font-semibold px-1'>React</span>  and I&apos;m currently learning <span className='text-black font-mono italic font-semibold'>FullStack Development.
         </span>
        </p>
        <p className='pt-2 italic'> &quot;I just want to work with computers and get paid.&quot;
        <span className=" pl-5 text-[#F6995C]"> -- Big Head
        <img src="/images/bighead.jpg" alt="big head" className="inline w-14 pl-2 rounded-full" />
        </span>
        </p>
         </h1>
        <p className="text-xm pt-2  flex gap-1">Also <span
         className=" bg-clip-text bg-gradient-to-r from-[#6434cb] to-[#f5c144] inline-block text-transparent font-bold ">DEERHACK 2024 
         </span>
         <img src="/images/winner.png" alt="" className="w-16 pr-1  rounded-xl inline" />
          Hackthon Winner.
          </p>
      </div>
      <div className="right ">
        <h2 className=' text-center pb-8 text-xl font-semibold'>My skills </h2>
        <div className="skills text-base   sm:text-lg grid gap-1 sm:gap-5 grid-cols-3 md:grid-cols-2  lg:grid-cols-3 ">
        <h5 className='bg-blue-200 hover:text-black text-center
          rounded-md  hover:rotate-2  duration-500 py-2 w-24 sm:w-28 m-2'>JavaScript</h5>
        <h5 className='bg-blue-200 hover:text-black  text-center py-2 rounded-md
         duration-500 hover:-rotate-2 w-24 sm:w-28 m-2' > TypeScript </h5>
        <h5 className='bg-blue-200 hover:text-black  px-1 sm:px-2 text-center rounded-md 
        hover:rotate-2 duration-500 py-2  w-24 sm:w-28 text-nowrap m-2 '>NextJs</h5>
        <h5 className='bg-blue-200 hover:text-black text-center rounded-md 
        hover:rotate-2 duration-500 py-2  w-24 sm:w-28 px-2 text-nowrap m-2 '>SQL</h5>
        <h5 className='bg-blue-200 hover:text-black  px-1 sm:px-2 text-center rounded-md 
        hover:-rotate-2 duration-500 py-2  w-24 sm:w-28 text-nowrap m-2 '>NodeJs</h5>
        <h5 className='bg-blue-200 hover:text-black  px-1 sm:px-1 text-center rounded-md 
        hover:rotate-2 duration-500 py-2  w-24 sm:w-28 text-nowrap m-2 '>TailwindCss</h5>
        <h5 className='bg-blue-200 hover:text-black px-2 text-center rounded-md
        hover:rotate-2 duration-500   w-24 sm:w-28 py-2 m-2'>Git</h5>
        <h5 className='bg-blue-200 hover:text-black px-2 text-center rounded-md
        hover:-rotate-2 duration-500 w-24  sm:w-28 py-2 m-2'>Html</h5>
        <h5 className='bg-blue-200 hover:text-black w-24 sm:w-28 px-2 text-center rounded-md 
        hover:rotate-2 duration-500 py-2 m-2'>CSS</h5>
 </div>
        
      </div>

    </div>
    </div>
  )
}
