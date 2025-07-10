import React from 'react'

function LocateUsOnMaps() {
  return (
    <div className="flex flex-col w-full p-0 lg:p-10 bg-white items-center justify-center">
      <h3 className="text-2xl lg:hidden px-10 lg:p-0 lg:text-3xl text-gray-700 mb-10 w-full justify-start items-start flex  lg:justify-center lg:items-center">
        Locate Us on Maps
      </h3>
      <div className="w-full h-[400px] lg:h-[500px]  lg:w-[375px] lg:h-[413px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320986.03404830414!2d80.20867324999999!3d13.04752545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1752131160227!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

      </div>
    </div>
  )
}




export default LocateUsOnMaps