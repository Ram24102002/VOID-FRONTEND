import { Shirt } from "lucide-react";
function WhoAreWe() {
  return (
    <div>
         <a href="#" className="group relative block w-100 lg:w-150  h-50 sm:h-50 lg:h-60">
  <span className="absolute inset-0 border-2 border-dashed border-black"></span>

  <div
    className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      className="p-4 !pt-0 flex transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
     
       
      <h2 className="mt-4 text-4xl font-medium lg:text-5xl">As a Brand, <br /> Who are we? 🤔</h2>
    </div>

    <div
      className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 className="mt-4 text-xl font-medium flex sm:text-2xl">Go around the world <Shirt size={30} /></h3>

      <p className="mt-4 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
        omnis atque culpa repellendus.
      </p>

      <p className="mt-8 font-bold">Read more</p>
    </div>
  </div>
</a>
    </div>
  )
}

export default WhoAreWe