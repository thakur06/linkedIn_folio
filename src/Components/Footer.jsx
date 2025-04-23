import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from '@tabler/icons-react'
import { div } from 'framer-motion/client'

import React from 'react'

export const Footer = () => {
  return (
    <div>
    <div className='flex flex-row gap-4 justify-center items-center p-3'>

      <IconBrandLinkedin color='white' className='cursor-pointer'/>
      <IconBrandGithub color='white'   className='cursor-pointer'/>
      <IconBrandInstagram color='white'className='cursor-pointer'/>
      <IconBrandLeetcode color='white' className='cursor-pointer'/>
      </div>
      <p className='text-gray-500 font-semibold w-full text-center text-xs p-1 pb-10'>Abhishek Thakur © 2025</p>
    </div>
  )
}
