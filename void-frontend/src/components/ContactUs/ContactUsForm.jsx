


function ContactUsForm() {
  return (
    <div>
        <section className='flex flex-col  w-full p-10 bg-white items-center justify-center'>
            <h3 className="text-2xl lg:text-3xl text-gray-700  mb-10 w-full justify-start items-start flex">Send Us a Message</h3>
        <form className="space-y-4 justify-start items-start flex flex-col w-full ">
          <div className="grid w-full grid-cols-1 gap-8">
            <div>
              <label htmlFor="name" className="text-sm  font-semibold">Full Name</label>
              <input type="text" placeholder="Enter Your Name" className="form-input  w-full" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm  font-semibold">Email</label>
              <input type="email" placeholder="Enter Your Email" className="form-input  w-full" />
            </div>
            <div>
              <label htmlFor="subject"  className="text-sm  font-semibold">Subject</label>
              <input type="text" placeholder="Enter Subject" className="form-input  w-full" />
            </div>
            
            
          </div>

          
          <label htmlFor="message" className="mb-[-10px] mt-[10px] text-sm">Message</label>
          <textarea
            rows="7"
            placeholder="Message"
            className="form-input rounded-xl mt-4 w-full "
          ></textarea>

          <button
            type="submit"
            className="md:block opacity-100 bg-indigo-600 text-white  mt-1 w-full py-3 rounded-xl text-base md:text-lg shadow-md hover:from-blue-500 hover:via-blue-600 hover:to-blue-800 transition-all duration-300"
          >
            Send a Message
          </button>
        </form>
        </section>
        
    </div>
  )
}

export default ContactUsForm