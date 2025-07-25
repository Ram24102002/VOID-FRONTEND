import React from 'react'

function Hero() {
  return (
<section className=" w-full lg:grid lg:h-screen lg:place-content-center">
  <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div className="max-w-prose text-left">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
       Anime lives in <br /> the
        <strong className="text-indigo-600"> VOID <br /> </strong>
        between worlds.
      </h1>
      

      {/* <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
        accusamus impedit minima harum corporis iusto.
      </p> */}

      <div className="mt-4 flex gap-4 sm:mt-6">
        <a
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 "
          href="#theme-card"
        >
          Explore
        </a>

      </div>
    </div>
  </div>
</section>


  )
}

export default Hero