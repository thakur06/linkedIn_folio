import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Hero } from '../Components/Hero';
import { IconBriefcase } from '@tabler/icons-react';
import { IconCake } from '@tabler/icons-react';
import { IconCalendarWeek } from '@tabler/icons-react';
import { Mini_Navbar } from '../Components/Mini_Navbar';
import bg_image from "../assets/icons/half_character.png"
// import { JaggedPath } from './JaggedPath'; // From artifact ID d48d4f55-0be5-4a69-b7fb-01966eb94aaf
export default function Home() {
  return (<>
  <Hero/>
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* <JaggedPath className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[600px] sm:max-w-[800px] opacity-20" /> */}
      <div className="relative z-10  px-1 sm:px-6 max-w-7xl mx-auto py-16 animate-fade-in">
      <h1 className='text-3xl font-semibold'>Abhishek Thakur</h1>
      <p>Brings ideas to life with code! ✨</p>
      <p className='text-wrap'>Senior Web Engineer. Creative Developer. Content Creator. Whimsical Specialist. International Speaker. Ex-Google.</p>
      <div className='flex flex-row gap-3 h-20  items-center w-full'>
        <IconBriefcase color='grey' height={25} width={40}/>
        <span className='left-0'>Available</span>
        <IconCake color='grey' height={25} width={40}/><span>October 6th</span>
        <IconCalendarWeek color='grey' height={25} width={40}/><span>Joined on April 2025</span>

      </div>
<Mini_Navbar/>
<div
  className="animate-fade-in relative p-5  "
  
>
  <Outlet />
</div>

              </div>
    </div>
    </>
  );
}