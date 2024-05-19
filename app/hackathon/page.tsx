
'use client'
import Link from "next/link"

export default function Hackathon() {
    const img1 = '/images/winner.png'
    const img2 = '/images/deerhack1.jpg'
    const imgs:any =[
    {
    title: "Image 1",
    image: img1,
  },
  {
    title: "Image 2",
    image: img2,
  },
]

  return (
    <>
    <div className="home  px-10 py-5 flex items-center gap-1">
        <Link href="/" className="">
            <img src="/images/bp.png" alt="logo" className="w-12 rounded-full" />
        </Link>
    </div>

    <div className="px-10   flex flex-col justify-center items-center overflow-hidden ">
           {/* project  */}
           <h1 className=" text-xl pb-2 tracking-wider font-thin uppercase text-gray-500">  Hackathon Project</h1>

              <p className="text-xm pt-2 text-start pb-5"> <span
         className=" bg-clip-text bg-gradient-to-r from-[#6434cb] to-[#f5c144] inline-block text-transparent font-bold  pr-2">DEERHACK 2024 Hackthon Winner
         </span></p>
    <div className="project relative mb-20 border border-gray-700 z-20   group cursor-pointer">
        <a href="https://github.com/sairash/pixel-chain" target="_blank">
        <img src="/images/project.png" alt=""  className="w-[700px] h-[240px] sm:h-full"/>
        <div className="w-full h-full overflow-auto
         bg-black absolute  top-0 transition-all duration-500
          opacity-0 group-hover:opacity-80 text-[#838383] text-sm pr-2 lg:pr-20 lg:text-base px-1 lg:px-10  py-1 lg:py-5">
            <h2 className="text-xl text-white pb-2">PixelChain</h2>
            <p className=" font-thin tracking-wider ">At Deer Hack 2024, a group of six solo participants came together to form a team called &quot;Solo&quot; and tackled a common problem faced at events like hackathons: keeping track of all the photos clicked during the event, especially the ones you are featured in
</p>
<p className="pt-5  font-thin tracking-wider">We create an app called PixelChain, using IPFS, Blockchain, Machine Learning ,AI and React in 36-hour.</p>
<p className="pt-5  font-thin tracking-wider">PixelChain solves this problem by creating a dedicated event space where participants can upload their photos.</p>
        </div>
        </a>
    </div>

        <h1 className=" text-xl pb-10 tracking-wider font-thin uppercase text-gray-500">  Hackathon Photos</h1>
        <div className="photos  ">
    {imgs.map((img:any,key:any) =>(
        <div className=" " key={key}>
            <img src={img.image}  alt={img.title} className="  w-[700px] pb-1  flex" />

        </div>
    ))}
    </div>
    </div>
    </>
  )
}
