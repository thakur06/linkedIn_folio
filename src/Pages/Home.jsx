import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Hero } from '../Components/Hero';
import { Mini_Navbar } from '../Components/Mini_Navbar';
import { Header } from '../Components/Header';
import { General } from '../Components/General';
export default function Home() {

  return (
 <>
 <Hero/>
    <section className="relative flex min-h-screen flex-col justify-center ">
    
    <div className="min-w-full w-full relative z-10 mt-18">
<Header/>
<General/>
<Mini_Navbar/>
    </div>
    <Outlet/>
  </section>
  </>
  );
}