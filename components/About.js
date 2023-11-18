"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const About = () => {
   
    return (
        <div className='grid grid-cols-1 gap-y-[100px] '>
            <div className='group width-[150px]' id="">
                <h3 className='text-[70px] font-black duration-300 lg:leading-2  animate group-hover:scale-110 hover:blue_gradient'>
                    <span> Hi, I'm </span>
                    <br className='lg:hidden '></br>
                    <span className='lg:p-2'>
                        <span className='duration-150 blue_gradient animate '>Rudra</span> manikanta</span>
                </h3>
                <p className='leading-[40px] montserrat hover:organe_gradient font-semibold  width-[200px]'>
                    As a <span className='text-xl green_gradient'>full-stack developer</span>, I have the exciting role of crafting entire web experiences from the ground up, using my skills to design and develop both the frontend and backend of websites, ensuring they function seamlessly and look visually appealing.
                </p>
            </div>
            <div className='grid gap-y-5 gap-x-4 lg:grid-cols-3 align-center'>
                <div className='text-center duration-150 align-middle  ease-in p-[50px] h-[300px] px-8 bg-opacity-50 group hover:rounded-md hover:scale-110  flex-center gap-x-3 py-10  hover:bg-neutral-500/5 ring-1 ring-blue_gradient hover:ring-2 animate hover:ring-green_gradient bg-[url("/assests/herobg.png")] rounded-[20px]'>
                    <Image src="/assests/web.png" height={50} width={50}></Image>
                    <p className='text-4xl font-bold text-white montserrat '>Web developer</p>
                </div>
                <div className='text-center duration-150 align-middle  ease-in p-[50px] h-[300px] px-8 bg-opacity-50 group hover:rounded-md hover:scale-110  flex-center gap-x-3 py-10  hover:bg-neutral-500/5 ring-1 ring-blue_gradient hover:ring-2 animate hover:ring-green_gradient 
                bg-[url("/assests/herobg.png")]  rounded-[20px]'>
                    <Image src="/assests/creator.png" height={50} width={50}></Image>
                    <p className='text-4xl font-bold text-white montserrat '>React developer</p>
                </div>
                <div className='text-center duration-150 align-middle  ease-in p-[50px] h-[300px] px-8 bg-opacity-50 group hover:rounded-md hover:scale-110  flex-center gap-x-3 py-10  hover:bg-neutral-500/5 ring-1 ring-blue_gradient hover:ring-2 animate hover:ring-green_gradient bg-[url("/assests/herobg.png")] rounded-[20px]'>
                    <Image src="/assests/backend.png" height={50} width={50}></Image>
                    <p className='text-4xl font-bold text-white montserrat '>java programmer</p>
                </div>
            </div>
        </div>
    )
}

export default About