import React from 'react';
import heromp4 from "../assets/videos/earth.mp4"
import Particles from './Particles';
import logo from "../assets/icons/logo.png"
export const Hero = () => {
  return (
    <div className="relative w-full ">
      {/* <video
        className="w-full md:h-60 h-40 object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={heromp4}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
<div style={{ width: '100%', height: '300px', position: 'relative', borderBottom:'solid 2px grey'  }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={300}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={40}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
      {/* Circle slightly overlapping from bottom */}
      <div className="absolute md:bottom-[-4rem] bottom-[-3rem] md:left-25 left-16 transform -translate-x-1/2 z-10 md:h-40 md:w-40 h-28 w-28 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-125 transition-all ease-in-out">
        <img className='rounded-full md:h-36 md:w-36 h-28 w-28 object-cover' src={logo}/>
      </div>
      
    </div>
  );
};
