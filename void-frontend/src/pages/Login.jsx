import React from 'react'
import logo from '../assets/LOGO_Bold.png'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="hero w-full bg-white-200 min-h-screen">
  <div className="hero-content w-full h-screen flex-col lg:flex-row-reverse lg:justify-around">
     <div className="text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Login with <span className="text-indigo-600">VOID</span>
        <motion.span
          className="inline-block ml-1"
          initial={{ rotate: 180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut", delay: 0.6 }}
        >
          <img src={logo} alt="Void Logo" className="w-12 h-13 pb-2 inline" />
        </motion.span>
      </motion.h1>
      <motion.p
        className="text-sm text-gray-600 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Go Beyond the Limits
      </motion.p>
    </div>
    
      
    <div className="card bg-base-100 w-full max-w-sm shrink-0">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" />
          <div className='flex justify-between'>
            <a className="link link-hover">Forgot password?</a> 
            {/* <Link to={'/register'} className='link link-hover'>Register</Link> */}
          </div>
          
            <Link to={'/'} className='w-full'><button className="btn btn-neutral w-full bg-indigo-600 mt-4">Login</button></Link>
            <Link to={'/register'} className='w-full'><button className="btn btn-neutral w-full bg-white text-black mt-4">Register if New !</button></Link>
          
        </fieldset>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login