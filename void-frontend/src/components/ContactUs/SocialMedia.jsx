import React from 'react'
import insta from '../../assets/contactUs/Instagram.png'
import linkedin from '../../assets/contactUs/linkedin.png'
import youtube from '../../assets/ContactUs/youtube.png'
import whatsapp from '../../assets/ContactUs/whatsapp.png'

function SocialMedia() {
  return (
    <div className='w-full flex flex-col items-center justify-center p-10 lg:pt-0'>
        <div className='w-full lg:w-[375px] font-semibold'>
          <p className="text-lg">Follow us on</p>
          <div className='flex gap-6 mt-4'>
            <a href="https://www.instagram.com/"><img src={insta}    className='h-10' alt="Instagram" /></a>
            <a href="https://www.linkedin.com/"><img src={linkedin} className='h-10'  alt="Linked in" /></a>
            <a href="https://www.youtube.com/"><img src={youtube}  className='h-10'  alt="Youtube" /></a>
            <a href="https://wa.me/917305790119"><img src={whatsapp} className='h-10' alt="Whatsapp" /></a>
          </div>
        </div>
    </div>
  )
}

export default SocialMedia