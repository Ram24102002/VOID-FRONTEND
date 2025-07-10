import React from 'react'
import IsolatedHoodie from "../../assets/Isolated-Hoodie-Mockup-2.jpg"

function QualityBanner() {
  return (
    <section className="overflow-hidden flex flex-col-reverse bg-white sm:grid sm:grid-cols-2 sm:items-center py-20 animate-fadeIn">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
       Premium anime tees. Built to last, made to flex your fandom.
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
      Soft, breathable cotton meets vibrant, fade-proof prints. Designed for daily wear with strong stitching, lasting comfort, and standout anime style.
      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="#"
          className="inline-block rounded-sm bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-hidden"
        >
          Get One Today
        </a>
      </div>
    </div>
  </div>

  <img
    alt=""
    src={IsolatedHoodie}
    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>
  )
}

export default QualityBanner