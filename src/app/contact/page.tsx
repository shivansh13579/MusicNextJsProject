'use client';
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className='bg-gray-900 min-h-screen py-12 pt-15 flex items-center justify-center'>
       <div className="text-center"> 
           <h2 className="text-white font-extrabold text-[30px]">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold 
               tracking-tight text-white sm:text-4xl">We have to help with any question about our courses, program, or events.Reach out and let us know how we can assist you in your musical Journey</p>
           </div>
           <Meteors number={20} />
    </div>
  )
}

export default page
