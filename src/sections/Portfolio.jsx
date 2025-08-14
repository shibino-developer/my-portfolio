import React from 'react';
import { ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
// import work1 from '../assets/work1.jpg';
// import work2 from '../assets/work 2.jpg';
import healthinsimage from '../assets/Healthinsight.jpg';
import work1 from '../assets/Design1.png';
import blog1 from '../assets/starry1.webp';
import fblog1 from '../assets/yoga2.jpg';


const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-[#ab0f09] text-white">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    
    {/* Left: Title & Button */}
    <div data-aos="fade-right">
      <h3 className="text-3xl font-bold mb-4 pt-5">My Projects</h3>
      
      <Link
        to="/PortfolioDetails" 
        smooth={true}
        duration={500}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#000000] px-4 py-2 hover:text-[#ffffff] transition"
      >
        Discover More <ArrowRightCircle size={18} />
      </Link>
    </div>

    {/* Right: Image Grid */}
    <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
      <img 
        src={healthinsimage} 
        alt="Project 1" 
        className="w-full h-auto rounded-lg shadow-md"
      />
      
      <img 
        src={blog1} 
        alt="Project 2" 
        className="w-full h-auto rounded-lg shadow-md"
      />
      <img 
        src={work1} 
        alt="Project 3" 
        className="w-full h-40 rounded-lg shadow-md"
      />
      <img 
        src={fblog1} 
        alt="Project 4" 
        className="w-full h-auto rounded-lg shadow-md"
      />
    </div>

  </div>
</section>

  );
};

export default Portfolio;
