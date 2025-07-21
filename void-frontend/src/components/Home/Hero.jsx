import { Link } from 'react-router-dom';
import yellowHoodie from '../../assets/yellow-hoodie.jpg'

function Hero() {
  return (
<section className=" w-full lg:grid lg:h-screen lg:place-content-center">

  <div className="mx-auto w-full  px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 lg:flex lg:justify-between items-center">
    <aside className=" text-left lg:w-1/2  flex justify-center items-center">
      <div className='lg:h-110 lg:w-200'>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
       {/* Anime lives in <br /> the */}
        <strong className="text-indigo-600 text-6xl lg:text-8xl"> VOID <br /> </strong>
        Go Beyond the Limits <span className='text-s'>🚀</span>
      </h1>
      

      <p className="mt-4 text-base text-pretty text-gray-700 dark:text-white sm:text-lg/relaxed">
        "Explore premium anime-inspired t-shirts that blend iconic characters with bold, eye-catching style. Each product is a statement piece crafted to turn heads and spark conversations."
      </p>

      <div className="mt-4 flex gap-4 sm:mt-6">
        <Link
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          to={"/collections"}
        >
          Explore
        </Link>

        {/* <a
          className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
          href="#"
        >
          Learn More
        </a> */}
      </div>
      </div>
    </aside>

    <aside className='w-1/2 hidden lg:block'>
      <img className='rounded-tl-full' src={yellowHoodie} alt="" />
    </aside>
    

  </div>
</section>


  )
}

export default Hero