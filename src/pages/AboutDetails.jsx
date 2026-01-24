import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




const AboutDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="text-gray-800 font-sans ">

      
      <section className="py-12 px-6 md:px-20 bg-white">
        
        <h1 className="text-3xl font-bold text-[#ab0f09] pt-6" data-aos="fade-right" >Meet <span className="text-black">the Mind Behind</span></h1>
        <p className="mt-4 text-md md:text-lg" data-aos="fade-left" >
          I am an entry-level Python Full Stack Developer with hands-on experience in building backend-driven and full-stack web applications using Python, Django, FastAPI, REST APIs, PostgreSQL, and React. I focus on writing clean, modular, and scalable code following OOP principles, PEP 8 standards, and Git-based workflows.

<br/><br/>I have developed real-world projects ranging from Django web apps and API integrations to machine learning pipelines and data-driven systems. With a strong foundation in backend logic and growing frontend skills, I am actively seeking a junior or trainee role where I can contribute to production-ready software, learn from experienced teams, and grow as a full-stack developer.

 </p> 
      </section>

      {/* Core Values */}
      <section className="bg-[#ab0f09] text-white py-12 px-6 md:px-20" data-aos="fade-right">
        {/* <h2 className="text-2xl font-bold mb-6">We do everything with our core values of honesty, hard work, and trust.</h2> */}

        <div className="mb-6" >
          {/* <h3 className="text-xl font-semibold">Quality Policy</h3> */}
          <p className="mt-2 text-xl leading-relaxed">
            I approach every project with a growth mindset — blending structured problem-solving with creativity. Whether it’s an IoT robot or a generative AI app, I focus on building solutions that are practical, intelligent, and human-centered. I don’t just code to complete; I build to solve, simplify, and inspire.
          </p>
        </div>

        <div>
          {/* <h3 className="text-xl font-semibold">Information Security Policy</h3> */}
          <p className="mt-2 text-xl leading-relaxed">
            I create solutions that think smart, feel human, and make a difference.
          </p>
        </div>
      </section>

      {/* Team Photo Section */}
      {/* <section className="relative">
        <img src={teamPhoto} alt="Our Team" className="w-full h-[400px] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-2xl md:text-3xl font-semibold text-center px-4">
            We [Your Team Name] – A passionate and skilled team delivering flawless results.
          </h2>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-12 px-6 md:px-20 bg-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center" data-aos="fade-left">
        <div>
          <p className="text-3xl font-bold text-[#ab0f09]">30+</p>
          <p className="text-sm">Designs</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-[#ab0f09]">15+</p>
          <p className="text-sm">Blogs</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-[#ab0f09]">20+</p>
          <p className="text-sm">Projects</p>
        </div>
        {/* <div>
          <p className="text-3xl font-bold text-[#ab0f09]">45:55</p>
          <p className="text-sm">Women : Men</p>
        </div> */}
      </section>

    </div>
  );
};

export default AboutDetails;
