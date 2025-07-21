import React from 'react'

function Stats() {
  return (
        <div className="stats shadow dark:text-gray-800 stats-vertical lg:stats-horizontal bg-gray-100 dark:bg-gray-200 flex flex-col lg:flex-row justify-around items-center p-6 my-20 rounded-lg  ">
  <div className="stat ">
    <div className="stat-figure text-primary">
      {/* Heart icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    </div>
    <div className='flex flex-col items-center'>
      <div className="stat-title  dark:text-gray-800 xl:text-xl">Number of customer</div>
    <div className="stat-value text-primary xl:text-6xl xl:p-4">2.6M</div>
    <div className="stat-desc dark:text-gray-800 xl:text-xl">15% more than last month</div>
    </div>
  </div>



  <div className="stat">
    <div className="stat-figure text-secondary">
      {/* thunder icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    </div>
      <div className='flex flex-col items-center justify-center'>
      <div className="stat-title dark:text-gray-800 xl:text-xl">New customer last month</div>
    <div className="stat-value text-secondary xl:text-6xl p-4">25.6K</div>
    <div className="stat-desc dark:text-gray-800 xl:text-xl">21% more than last month</div>
    </div>
  </div>




  
</div>
  )
}

export default Stats