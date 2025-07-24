import React from 'react';
// import profileImg from '../assets/Img1.jpg'; // ✅ Import your image

const Hero = () => (
  <section className="pt-32 pb-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
      
      {/* 🧍 Text Section */}
      <div className="text-left xl:text-left flex-1" data-aos="fade-right">

         <p className="text-sm md:text-xl font-semibold text-[#060504] leading-tight">
          Hey, I'm
        </p>
        
         <h1 className="text-3xl font-bold text-[#ab0f09]">Shibino Abraham</h1> 
    
        
        <p className="pt-2 m-1 text-md font-semibold text-[#060504] leading-tight">
          Turning Ideas into Interactive Web Experiences.
        </p>
        <p className="pt-2 m-1 text-md text-gray-600 w-full">
          Aspiring IT professional skilled in web design and development, data analytics, techncial writing. Passionate about solving problems, creating meaningful digital content, and continuous learning. Let's connect and collaborate!
    
        </p>
        {/* <div className="mt-6">
          <a href="#portfolio" className="bg-[#ab0f09] text-white px-6 py-3 rounded-full mr-4">View Portfolio</a>
          <a href="#contact" className="border border-[#ab0f09] text-[#ab0f09] px-6 py-3 rounded-full">Contact</a>
        </div> */}
      </div>

      {/* 🖼️ Image Section */}
      {/* <div className="flex-1 flex justify-center" data-aos="fade-left">
        <img
          src={profileImg}
          alt="Profile"
          className="w-full h-full max-w-xs object-cover rounded-md"
        />
      </div> */}
    </div>
  </section>
);

export default Hero;

 