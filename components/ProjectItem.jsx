import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group bg-gradient-to-r from-[#231f99] to-[#1e4497]'>
    <Image className='rounded-xl opacity-75' src={backgroundImg} alt='/' /> 
    <div className='group-hover:block absolute lg:top-[85%] md:left-[50%] left-[80%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-xl text-white tracking-wider text-center pb-3'></h3>
        
        <Link href={projectUrl}>
            <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-sm cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem

