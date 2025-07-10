import { Phone } from "lucide-react";import React from 'react'


function ContactUsForm() {
  return (
    <div>
        <section className='flex flex-col  w-full lg:p-10 bg-white items-center justify-center'>
            <h3 className="text-2xl lg:text-3xl text-gray-700  mb-10 w-full justify-start items-start flex">Send Us a Message</h3>
        <form className="space-y-4  flex flex-col justify-start items-start">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-8">
            <input type="text" placeholder="your Name" className="form-input" />
            <input type="text" placeholder="Phone Number" className="form-input" />
            <select className="form-input text-gray-400">
            <option>Select Service</option>
            <option>Web Development</option>
            <option>UI/UX Design</option>
            <option>Consultation</option>
          </select>
            <input type="email" placeholder="Email" className="form-input" />
            <input type="text" placeholder="Subject" className="form-input" />

          </div>
          

          

          <textarea
            rows="7"
            placeholder="Message"
            className="form-input rounded-xl mt-4 w-full  lg:w-[680px]"
          ></textarea>

          <button
            type="submit"
            className="md:block opacity-100 bg-gradient-to-r from-[#0088FD] via-[#1B5BD6] to-[#001FAA] text-white  mt-1 w-full md:w-[327px] lg:w-[327px] py-3 rounded-xl text-base md:text-lg shadow-md hover:from-blue-500 hover:via-blue-600 hover:to-blue-800 transition-all duration-300"
          >
            Send a Message
          </button>
        </form>
        </section>
        
    </div>
  )
}

export default ContactUsForm