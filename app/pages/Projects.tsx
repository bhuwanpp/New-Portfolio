
export default function Project() {
  return (
   <div className=" px-16 sm:pl-36 md:pl-16 lg:px-16 py-20 " id="project">
    <h2 className="text-center text-3xl  -pl-32 font-bold"> My Projects</h2>
    <hr className="h-[0.5px] my-8 bg-line border-0 "></hr>
    <div className="project1  md:flex  items-center grid gap-8  md:gap-20 pb-10 sm:pb-32 ">
        <div className="left w-[350px] md:w-[400px] lg:w-[600px]">
          {/* project 1 */}
            <div className="do it ">
                <h3 className="text-3xl pb-3 font-semibold">Do It ✔️ </h3>
                <div className="tools flex gap-5 pb-5">
                <p className="bg-green-200 rounded-md px-3 py-0">NextJs </p>
                <p className="bg-green-200 rounded-md px-3 py-0">TypeScript </p>
                <p className="bg-green-200 rounded-md px-3 py-0">TailwindCss </p>
                </div>
                <div className=" flex gap-5 pb-2">
                <p className="bg-green-200 rounded-md px-3 py-0">Mongodb</p>
                </div>
                <div className="link pb-5 font-normal pt-5 flex gap-5">

                <a href="https://task-do-it.netlify.app/" target="_blank" className="underline 
                 text-lg text-lime-700">Project Link 
                 <i className="fa-solid fa-arrow-up-right-from-square text-sm pl-1"></i></a>
                <a href="https://github.com/bhuwanpp/Do-it" target="_blank" className="underline 
                 text-lg text-lime-700">Github🚀</a>
             
                </div>
                <h5 className="lg:text-lg text-base">"Do It" is a user-friendly task management website designed to help your achieve your goals efficiently.
                    This app reduces stress by providing users with a clear overview 
                    of their tasks and progress, thereby minimizing overwhelm.
                    <p className="pt-5 text-gray-700">
                    Features - ➕Add / ❌Delete/ 🛠️Update Task 🔐Authentication,
                    🔎Search Task,🌞🌛light / dark mode,
                    ⬆️ backToTopButton.
                    </p>
                </h5>
            </div>
        </div>
        {/* right  */}
        <div className=" px-3">
            <img src='/images/do.png' alt="" className=" w-[800px]" />
        </div>

    </div>
    {/* project quotes  */}
    <div className="projects  md:flex md:flex-row flex items-center  flex-col-reverse gap-8  md:gap-20 pb-5 ">
        {/* left  */}
        <div className=" px-3">
            <img src="/images/quotes.png" alt="" className=" w-[800px]" />

        </div>
        {/* left  */}
        <div className=" w-[350px] md:w-[400px] lg:w-[600px]">
            <div className=" px-2">
                <h3 className="text-3xl pb-3 font-semibold">Quotes.all 💡 </h3>
                <div className="tools flex gap-5 pb-5">
                <p className="bg-green-200 rounded-md px-3 py-0">NextJs </p>
                <p className="bg-green-200 rounded-md px-3 py-0">TypeScript </p>
                <p className="bg-green-200 rounded-md px-3 py-0">TailwindCss </p>
                </div>
                <div className=" flex gap-5 pb-2">
                <p className="bg-green-200 rounded-md px-3 py-0">Supabase</p>
                </div>
                <div className="link pb-5 font-normal pt-5 flex gap-5">

                <a href="https://quotes-all.vercel.app/" target="_blank" className="underline 
                 text-lg text-lime-700">Project Link 
                 <i className="fa-solid fa-arrow-up-right-from-square text-sm pl-1"></i></a>
                <a href="https://github.com/bhuwanpp/Quotes.all" target="_blank" className="underline 
                 text-lg text-lime-700">Github🚀</a>
             
                </div>
                <h5 className="lg:text-lg text-base ">"Quotes.all" is a web application that allows users to create their own custom quotes and fetch quotes from an external API...
                Need to save only Quotes with my own quote website not in google docs.
                If I need a Motivation I would find the quote.
                If I saw some quote or made it of my own I can save it
                <p className="pt-5 text-gray-700">
                    Features - ➕Add / ❌Delete / 🛠️Update Quotes,🌐fetch Quotes
                    </p>
                </h5>
            </div>
        </div>
    </div>
 
  <div className="see flex justify-center items-center pt-10">
    <a href="https://github.com/bhuwanpp" target="_blank">
    <button className="bg-blue-200 hover:bg-blue-300 px-2 py-1 text-lg
    duration-500 rounded-lg">See more</button>
    </a>
  </div>
   </div>
  )
}
