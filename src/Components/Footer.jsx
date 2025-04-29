import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from '@tabler/icons-react'

import React from 'react'



export const Footer = () => {
  return (
    <div>
    <div className='flex flex-row gap-6 justify-center items-center p-3'>

      <a href="" target='_blank'><IconBrandLinkedin color='white' className='cursor-pointer'size={35}/></a>
      <a href="https://github.com/thakur06" target='_blank'><IconBrandGithub color='white'   className='cursor-pointer' size={35}/></a>
      <a href="https://github.com/thakur06" target='_blank'><IconBrandInstagram color='white'className='cursor-pointer'size={35} /></a>
      <a href="https://leetcode.com/u/ar497477/" target='_blank'><IconBrandLeetcode color='white' className='cursor-pointer' size={35}/></a>
      </div>
      <p className='text-gray-500 font-semibold w-full text-center text-xs p-1 pb-10'>Abhishek Thakur © 2025</p>
    </div>
  )
}
