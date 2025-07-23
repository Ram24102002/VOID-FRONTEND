import React from 'react'
import misa from '../../assets/Anime/misa-amane.jpg'

function AnimeQuality() {
  return (
   <section className="overflow-hidden flex flex-col-reverse  sm:grid sm:grid-cols-2 sm:items-center py-20 animate-fadeIn">
     <div className="p-8 md:p-12 lg:px-16 lg:py-24">
       <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
         <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          “What you wear is how you present yourself to the world.”
         </h2>
   
         <p className=" text-gray-500 dark:text-white md:mt-4 md:block">
         – Misa Amane
         </p>
   
         
       </div>
     </div>
   
     <img
       alt=""
       src={misa}
       className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
     />
   </section>
  )
}

export default AnimeQuality