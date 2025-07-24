

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import Skills from '../sections/Skills';
import About from '../sections/About';
import Certifications from '../sections/Certifications';
import Testimonials from '../sections/Testimonials';
// import Clients from './sections/Clients';
import Footer from '../components/Footer';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,  // animation duration
      once: true,     // only animate once
    });
  }, []);
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Skills />
      <About />
      <Certifications />
      <Testimonials />
      {/* <Clients /> */}
      <Footer />
      
    </div>
  );
}

export default Home;
