import React from 'react'

function DiffSlider() {
  return (
   
        <figure className="diff lgp-10 h-100 w-full lg:w-200 aspect-16/9" tabIndex={0}>
  <div className="diff-item-1" role="img" tabIndex={0}>
    <div className="bg-primary text-primary-content grid place-content-center text-8xl font-black">
      VOID
    </div>
  </div>
  <div className="diff-item-2" role="img">
    <div className="bg-base-200 grid place-content-center text-8xl font-black">VOID</div>
  </div>
  <div className="diff-resizer"></div>
</figure>
   
  )
}

export default DiffSlider