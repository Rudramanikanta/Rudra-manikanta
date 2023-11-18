import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='mt-10 p-x' id="intro">
        <div>
            <h3 className='text-[70px] font-black duration-300 lg:leading-2  animate group-hover:scale-110 hover:blue_gradient'>Projects.</h3>
            <p className='leading-[40px] montserrat hover:organe_gradient font-semibold  width-[200px]'>I mainly focused on building my project on ReactJS and its libraries to leverage the power of this popular JavaScript framework. ReactJS provides a robust and efficient way to create dynamic user interfaces, making it an ideal choice for web development projects.</p>
        </div>
        <div className='grid gap-y-5 gap-x-4 lg:grid-cols-3 align-center'>
                <div className=' duration-150 align-middle gap-x-4 ease-in p-[50px] h-[300px] px-8 bg-opacity-50 group bg-gradient-to-r from-cyan-500 to-blue-500 hover:rounded-md hover:scale-110   py-10  hover:bg-neutral-500/5 ring-1 ring-blue_gradient hover:ring-2 animate hover:ring-green_gradient rounded-[20px]'>
                    <div className='flex text-center align-top gap-x-4'>
                    <a href='https://github.com/rudramanikanta'><Image src="/assests/github.png" height={50} width={50}></Image></a>
                    <p className='text-4xl font-bold text-white montserrat '>Farmer Seva</p>
                    </div>
                    <p className='font-thin leading-7 text-white montserrat'>Overall, the MERN full stack architecture is a powerful and flexible choice for building Framer websites. This architecture allows for the development of dynamic and interactive websites with a rich user experience.</p>
                </div>
                <div className=' duration-150 align-middle gap-x-4 ease-in p-[50px] h-[300px] px-8 bg-opacity-50 group bg-gradient-to-r from-cyan-500 to-blue-500 hover:rounded-md hover:scale-110   py-10  hover:bg-neutral-500/5 ring-1 ring-blue_gradient hover:ring-2 animate hover:ring-green_gradient rounded-[20px]'>
                    <div className='flex text-center align-top gap-x-4'>
                    <a href='https://github.com/rudramanikanta'><Image src="/assests/github.png" height={50} width={50}></Image></a>
                    <p className='text-4xl font-bold text-white montserrat '>Movie  site</p>
                    </div>
                    <p className='font-thin leading-7 text-white montserrat'>A movie website developed using Next.js is a dynamic and user-friendly web application that showcases and provides information about movies. It utilizes the Next.js framework, a popular React-based framework, to deliver a good .</p>
                </div>
                <div className=' duration-150 align-middle gap-x-4 ease-in p-[50px] h-[300px] px-8 bg-opacity-50 group bg-gradient-to-r from-cyan-500 to-blue-500 hover:rounded-md hover:scale-110   py-10  hover:bg-neutral-500/5 ring-1 ring-blue_gradient hover:ring-2 animate hover:ring-green_gradient rounded-[20px]'>
                    <div className='flex text-center align-top gap-x-4'>
                    <a href='https://github.com/rudramanikanta'><Image src="/assests/github.png" height={50} width={50}></Image></a>
                    <p className='text-4xl font-bold text-white montserrat '>Book store</p>
                    </div>
                    <p className='font-thin leading-7 text-white montserrat'>bookstore website developed using servlets and JSP is a web application that enables users to browse online. It typically consists of a front-end, which is the user interface , and a back-end, which handles the data processing and storage.</p>
                </div>
            </div>
    </div>
  )
}

export default Projects