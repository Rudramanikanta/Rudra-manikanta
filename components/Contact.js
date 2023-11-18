import React from 'react'
import { FaInstagram ,FaFacebook,FaTwitter} from "react-icons/fa";
const Contact = () => {
  return (
    <footer className='max-container '>
    <div className='flex flex-wrap items-start justify-between gap-20 max-lg:flex-col'>
      <div className='flex flex-col items-start'>
        <p className='float-left text-4xl font-black mt-7 align-left'>Contact on</p>
        <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
          
        </p>
        <div className='flex items-center gap-5 mt-8'>
          <FaInstagram size={50}></FaInstagram>
          <FaFacebook size={50}/>
          <FaTwitter size={50}/>
        </div>
      </div>

     
    </div>

  
  </footer>
  )
}

export default Contact