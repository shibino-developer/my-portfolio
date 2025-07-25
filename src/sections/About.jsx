import React from 'react';
import { ArrowRightCircle, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#ab0f09] text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Left: About Title & Summary */}
        <div data-aos="fade-right">
          <h3 className="text-3xl font-bold mb-4 pt-5">About Me</h3>
          {/* <p className="text-sm mb-6 leading-relaxed text-gray-100">
            I’m a passionate full-stack developer, digital creator, and problem-solver who blends design, technology, and storytelling.
            With experience across content creation, tech solutions, UI/UX, and automation — I aim to bring powerful digital ideas to life.
          </p> */}

          {/* Discover More Button */}
          <Link
            to="/AboutDetails" 
            smooth={true}
            duration={500}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#000000] px-4 py-2 hover:text-[#ffffff] transition"
          >
            Discover More <ArrowRightCircle size={18} />
          </Link>
        </div>

        {/* Right: Mission & Vision Cards */}
        <div className="md:col-span-2 grid gap-6" data-aos="fade-left">

          {/* Mission */}
          <div className="bg-[#bf1510] p-6 rounded-xl shadow hover:shadow-md transition flex items-start gap-4">
            <Target size={32} className="text-white mt-1" />
            <div>
              <h4 className="text-xl font-semibold mb-2">My Mission</h4>
              <p className="text-sm text-gray-100">
                To empower individuals and businesses by delivering functional, elegant,
                and scalable digital solutions — whether it's websites, tools, or strategy —
                while staying agile in a fast-changing tech landscape.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-[#bf1510] p-6 rounded-xl shadow hover:shadow-md transition flex items-start gap-4">
            <Eye size={32} className="text-white mt-1" />
            <div>
              <h4 className="text-xl font-semibold mb-2">My Vision</h4>
              <p className="text-sm text-gray-100">
                To become a versatile digital force — blending design, development,
                and communication — building meaningful solutions that stand the test of time
                and truly connect with people.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
