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
        
        <h1 className="text-3xl font-bold text-[#ab0f09]" data-aos="fade-right" >Meet <span className="text-black">the Mind Behind</span></h1>
        <p className="mt-4 text-md md:text-lg" data-aos="fade-left" >
          Hi! I’m a passionate Python AI Developer with a creative mindset and a strong foundation in technology. My journey began with curiosity, shaped by challenges, and fueled by a drive to create intelligent solutions that go beyond the conventional.

<br/><br/>Coming from a hands-on academic background, I built an IoT-based multipurpose agricultural robot, sparking my interest in blending hardware with software. As I explored deeper into AI, I discovered a world where code meets creativity — leading me to projects like VerseCraft, a generative AI platform that merges language, emotion, and intelligence.

I’ve independently picked up skills in Python, FastAPI, Machine Learning, Deep Learning, NLP, React, and GenAI tools like Hugging Face Transformers — not just by studying them, but by building and experimenting with real-world applications.

<br/><br/>What defines me isn’t just the tools I use — it’s the resilience I built through learning, the joy of solving real problems, and the vision to craft technology that’s meaningful and accessible.

<br/>When I’m not coding, I explore design, creative writing, and how tech can amplify human expression. I believe the future belongs to developers who can both think deeply and feel deeply — and I’m here to be one of them.
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
