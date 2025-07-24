import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-10">
        {/* Company Intro */}
        <div>
          {/* <div className="text-2xl font-bold mb-4">pits</div> */}
          <p className="text-sm text-gray-300 mb-4">
            Welcome to my portfolio! I’m a Python AI developer passionate about building intelligent, user-focused solutions — from creative generative AI apps to data-driven systems. With a strong foundation in modern AI tools and a love for clean, purposeful code, I turn ideas into powerful digital experiences.
          </p>
          {/* <p className="text-sm text-gray-300">
            Our team of 800+ skilled professionals specializes in various services. Partner with us to bring life to your digital ideas with high-quality, customized solutions.
          </p> */}

          <div className="flex gap-4 mt-6">
            <a href="#"><Instagram className="text-gray-400 hover:text-white" /></a>
            <a href="#"><Linkedin className="text-gray-400 hover:text-white" /></a>
            <a href="#"><Facebook className="text-gray-400 hover:text-white" /></a>
            <a href="#"><Twitter className="text-gray-400 hover:text-white" /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Full-Stack Web Development</li>
            <li>Technical & Social Blogging</li>
            <li>Creative Brochure Design</li>
            <li>Business & Tech Support</li>
            <li>UI/UX Design</li>
            <li>Content Strategy and Documentation</li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Insights</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Case Studies</li>
            <li>White Papers</li>
            <li>Newsroom</li>
            <li>Blog</li>
            <li>Websites</li>
          </ul>
        </div>

        {/* Office Locations */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">Global Offices</h3>
          <div className="text-sm text-gray-300 space-y-3">
            <div>
              <strong>Switzerland</strong><br />
              Holzweisstrasse 35, 8645 Rapperswil-Jona<br />
              <span className="text-xs">kontakt(at)pitsolutions(dot)ch</span><br />
              +41 43 558 43 60
            </div>
            <div>
              <strong>India (Trivandrum)</strong><br />
              Technopark, Kerala<br />
              <span className="text-xs">contact(at)pitsolutions(dot)com</span><br />
              +91 471 270 0915
            </div>
            <div>
              <strong>UAE (Sharjah)</strong><br />
              CG Mall, Sharjah<br />
              <span className="text-xs">pitsuae(at)pitsolutions(dot)com</span><br />
              +971 6 558 5598
            </div>
          </div>
        </div> */}
      </div>

      <div className="text-center mt-10 text-gray-500 text-sm border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Shibino Abraham. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
