"use client"
import { headers } from '@/next.config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState,useEffect } from 'react'
const Navbar = () => {
  const [active,setactive]=useState()
  const Headerhandler=async ()=>{
     const link=window.location.href; 
     if(link.includes("#about")){
      setactive("#about")
     }
     else if(link.includes("#intro")){
      setactive("#intro")
     }
     else if(link.includes("#contact")){
      setactive("#contact")
     } 
  }
  Headerhandler;
 console.log(active)
 
  return (
    <nav className='fixed w-full p-6 pt-3 mb-16 flex-between bg-neutral-400/10' >
    <div className='flex gap-3 '>
      <Image src="/assests/profile.jpg" height={35} width={30} className='rounded-3xl'></Image>
      <p className='font-black logo_text montserrat'> Rudra manikanta</p>
    </div>
    <div className='gap-6 flex-end'>
      <Link href="#about" onClick={Headerhandler} className={`text-xl  text-thin montserrat ${active==="#about"?'text-green-500':'text-slate-gray'}`} >About</Link>
      <Link href="#intro" onClick={Headerhandler} className={`text-xl  text-thin montserrat ${active==="#intro"?'text-green-500':'text-slate-gray'}`}>Intro</Link>
      <Link href="#contact" onClick={Headerhandler} className={`text-xl  text-thin montserrat ${active==="#contact"?'text-green-500':'text-slate-gray'}`}>contact</Link>
    </div>
    </nav>
  )
}

export default Navbar