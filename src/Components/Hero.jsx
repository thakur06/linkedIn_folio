import React from 'react';
import heromp4 from "../assets/videos/earth.mp4"
export const Hero = () => {
  return (
    <div className="relative w-full ">
      <video
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
      </video>

      {/* Circle slightly overlapping from bottom */}
      <div className="absolute bottom-[-3rem] md:left-25 left-16 transform -translate-x-1/2 z-10 md:h-30 md:w-30 h-20 w-20 bg-white rounded-full shadow-lg flex items-center justify-center">
        <img className='rounded-full md:h-28 md:w-28 h-18 w-18 object-cover' src='https://img.freepik.com/free-photo/young-attractive-man-looking-suprised-isolated-red_155003-11739.jpg'/>
      </div>
      
    </div>
  );
};
