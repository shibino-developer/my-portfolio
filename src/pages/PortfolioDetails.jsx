import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
import { Github, ExternalLink } from 'lucide-react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// Import your images
import mrsimage from '../assets/Movie recommendation.jpg';
import pmimage from '../assets/Password manager.jpg';
import erpempimage from '../assets/ERP emp.jpg';
import itinventimage from '../assets/IT invent.jpg';
import healthinsimage from '../assets/Healthinsight.jpg';
import zeroimage from '../assets/Zero.jpg';
import quizimage from '../assets/Online quiz master.jpg';
import recipeimage from '../assets/Recipe collection site.jpg';
import genaiimage from '../assets/GenAI versecraft.jpg';
import bookimage from '../assets/Book search app.jpg';
import toolsimage from '../assets/Tools trading.jpg';
import weatherimage from '../assets/Weather app.jpg';
import cancerimage from '../assets/Cancer detection system.jpg';
import employeeimage from '../assets/Employee task rating system.jpg';
import autimage from '../assets/Autonomous agricultural robot.jpg';
import taskimage from '../assets/Taskmaster .jpg';
import billingimage from '../assets/Billing .jpg';
import medicimage from '../assets/Medicaimage.jpg';
import work1 from '../assets/Design1.png';
import work2 from '../assets/Design2.png';
import work3 from '../assets/Design3.jpg';
import blog1 from '../assets/starry1.webp';
import blog2 from '../assets/macros.webp';
import blog3 from '../assets/Power1.webp';
import fblog1 from '../assets/yoga2.jpg';
import fblog2 from '../assets/int1.webp';
import fblog3 from '../assets/med1.jpg';
import fblog4 from '../assets/cleft2.webp';
import fblog5 from '../assets/very1.webp';
import fblog6 from '../assets/change1.webp';

const portfolioCategories = {
  webProjects: [
    {
      slug: "movie-recommendation",
      title: 'Movie Recommendation System',
      image: mrsimage,
      tech: ['Python', 'Pandas', 'Scikit-learn'],
      desc: 'Designed and implemented a content-based movie recommendation system using Python, Pandas, and Scikit-learn. Built an end-to-end pipeline that preprocesses movie metadata, performs feature engineering, and computes similarity scores using cosine similarity. The project follows a modular OOP structure with clear separation of data handling, model logic, and evaluation, making it easy to extend and experiment with different recommendation strategies.',
      github: 'https://github.com/shibino-developer/Movie-Recommendation-System',
      demo: 'https://docs.google.com/presentation/d/1tnSzzkC9TGndTI2l9pGXBBpG8D3oOLARzhIUlh6kFzc/edit?slide=id.p#slide=id.p',
    },
     {
      slug: "heartguard-ml",
      title: 'HeartGuard ML: Predictive Health Monitoring System',
      image: healthinsimage,
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Flask'],
      desc: 'Implemented advanced machine learning techniques to predict the risk of heart disease from patient data',
      github: 'https://github.com/shibino-developer/heart_disease_project',
      demo: 'https://docs.google.com/presentation/d/1AC69BYdURwtI-GtWWm-E33epvXp_BWVUqsIIJri1BJs/edit?slide=id.p#slide=id.p',
    },
    {
      slug: "quiz-master",
      title: 'Online Quiz Master',
      image: quizimage,
      tech: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS'],
      desc: 'Developed an online quiz master using React framework.',
      github: 'https://github.com/shibino-developer/my-quiz-app',
      demo: 'https://shibino-developer.github.io/my-quiz-app/',
    },
    
     {
      slug: "ai-poetry",
      title: 'AI-Generated Poetry: Exploring Shakespearean Sonnets',
      image: genaiimage,
      tech: ['Python', 'NumPy', 'Tensorflow', 'Web Scraping'],
      desc: 'Leverages deep learning techniques to generate poetry in the style of Shakespearean sonnets, using a Long Short-Term Memory (LSTM).',
      github: 'https://github.com/shibino-developer/ai-generated-poetry',
      demo: 'https://docs.google.com/presentation/d/1kqlzw98nwKplSFsqaWB4GBDlY3S66R4OX5j3XWONsvA/edit?slide=id.p#slide=id.p',
    },
     {
      slug: "recipe-collection",
      title: 'Recipe Collection Site',
      image: recipeimage,
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      desc: 'Developed a recipe site with HTML5, CSS3, JavScript',
      github: 'https://github.com/shibino-developer/recipe-site',
      demo: 'https://shibino-developer.github.io/recipe-site/',
    },
    {
      slug: "agribot",
      title: 'An Autonomous Agricultural Robot using IoT',
      image: autimage,
      tech: ['Python', 'JavaScript', 'IoT'],
      desc: 'Proposed a web application for tracking employee tasks and implementing a rating system to streamline the performance evaluation process within organizations.',
      // github: '',
      demo: 'https://docs.google.com/presentation/d/1cexq7nOjjwoBTyEhKk0c6mWfyxencH3J/edit?usp=drive_link&ouid=112880455503250258365&rtpof=true&sd=true',
    },
    {
      slug: "tools-trading",
      title: 'Tools Trading Shop Website',
      image: toolsimage,
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      desc: 'Deeveloped a responsive website for tools and spareparts trading shop.',
      github: 'https://github.com/shibino-developer/plamparambil-power-tools-website',
      demo: 'https://shibino-developer.github.io/plamparambil-power-tools-website/',
    },
    {
      slug: "stock-management",
      title: 'Stock Management and Billing System',
      image: billingimage,
      tech: ['Python', 'Tkinter', 'SQLite'],
      desc: 'Developed a database-driven warehouse management system in Python using Tkinter for the user interface and SQLite for database management.',
      github: 'https://github.com/shibino-developer/Software-Development',
      demo: 'https://docs.google.com/presentation/d/19vfCIQW5qTognoV7XsATtKiP2pzcgRlIcDRBBKexfr0/edit?slide=id.p#slide=id.p',
    },
    {
      slug: "password-manager",
      title: 'Password Manager',
      image: pmimage,
      tech: ['Python', 'Django', 'Cryptography'],
      desc: 'Developed a secure password manager using Python and Django with strong encryption techniques. Implemented password generation, secure storage, and user authentication using cryptography best practices.',
      github: 'https://github.com/shibino-developer/password_manager',
      demo: 'https://docs.google.com/presentation/d/1nXclq0qoS2C-ilgXTHIZanvPRl_vOGg2k4kkzaqT2gQ/edit?slide=id.p#slide=id.p',
    },
    {
      slug: "erp-employment",
      title: 'ERP Employee Management',
      image: erpempimage,
      tech: ['Python', 'Django', 'ERP'],
      desc: 'Employee management system using ERP concepts.',
      github: 'https://github.com/shibino-developer/Employee-Management-System-ERP-Implementation-',
      demo: 'https://docs.google.com/presentation/d/1ApVES4tj-H2CIkaBMt9ezCIZ1YOjh7f2/edit?slide=id.p1#slide=id.p1',
    },
    {
      slug: "it-inventory",
      title: 'IT Inventory System',
      image: itinventimage,
      tech: ['Google Sheets', 'Apps Script'],
      desc: 'Inventory tracking system using ERP principles.',
      github: 'https://github.com/shibino-developer/Inventory-Management-System',
      demo: 'https://docs.google.com/presentation/d/1zzMGbIJpEimkwQ1QQ0VJXw2q7l3XTtlr/edit?slide=id.p1#slide=id.p1',
    },
    
   
     {
      slug: "zero-trust",
      title: 'SecureNetGuard: Zero Trust Network Access Implementation',
      image: zeroimage,
      tech: ['Python', 'Flask', 'WT(JSON Web Token'],
      desc: 'A Zero Trust Network Access (ZTNA) solution using Flask framework and JSON Web Tokens (JWT) for secure authentication and access control.',
      github: 'https://github.com/shibino-developer/ztna_project',
      demo: 'https://docs.google.com/presentation/d/1scbPK1av1l-dosfdpR2TQ9_R7VIlwzRwYd8Tn8Z2h0A/edit?slide=id.p#slide=id.p',
    },
    
  ],
  design: [
    {
      title: 'Design 1',
      image: work1,
      tech: ['Canva', 'Figma', 'Lightroom'],
      desc: 'Poster for annual tech event with creative visuals.',
      demo: 'https://drive.google.com/file/d/1XWgRvDWpaXdImSofeyfs2JQjyUn9AKk3/view?usp=drive_link',
    },
    {
      title: 'Design 2',
      image: work2,
      tech: ['Canva', 'Figma', 'Lightroom'],
      desc: 'Awareness campaign design for sustainability.',
      demo: 'https://drive.google.com/file/d/1kP1SO-_mL0ZwoUr5BhMO8eaQiz9zYc8z/view?usp=drive_link',
    },
      {
      title: 'Design 3',
      image: work3,
      tech: ['Canva', 'Figma', 'Lightroom'],
      desc: 'Awareness campaign design for sustainability.',
      demo: 'https://drive.google.com/file/d/1udaRl1sTnwcZbYj4cJpd3i_6zbe7diPq/view?usp=drive_link',
    },
  ],
  technicalWriting: [
    {
      title: 'Starry Eyed Python',
      image: blog1,
      tech: ['Python'],
      desc: 'Decoding Satellite Images for Space Discovery',
      demo: 'https://developergirl3.wordpress.com/2024/01/02/starry-eyed-python-decoding-satellite-images-for-space-discovery/',
    },
    {
      title: 'Beyond Macros',
      image: blog2,
      tech: ['Python', 'RPA'],
      desc: 'Revolutionize Automation with Python & RPA.',
      demo: 'https://developergirl3.wordpress.com/2023/12/08/beyond-macros-revolutionize-automation-with-python-and-rpa/',
    },
    {
      title: 'Python-Powered Intelligence',
      image: blog3,
      tech: ['Python', 'Machine Learning'],
      desc: 'Unveiling the Secrets of Machine Learning',
      demo: 'https://developergirl3.wordpress.com/2023/12/07/python-powered-intelligence-unveiling-the-secrets-of-machine-learning/',
    },
     {
      title: 'The Evolution of Python Web Frameworks',
      image: blog2,
      tech: ['Python', 'Machine Learning'],
      desc: 'A Deep Dive into Django, Flask, and FastAPI',
      demo: 'https://developergirl3.wordpress.com/2023/12/05/the-evolution-of-python-web-frameworks-a-deep-dive-into-django-flask-and-fastapi/',
    },
  ],
  socialWriting: [
    {
      title: 'Awaken Your Spirit',
      image: fblog1,
      tech: ['Content Writing'],
      desc: 'The Transformative Power of Yoga',
      demo: 'http://incrediblestories.home.blog/2024/06/27/awaken-your-spirit-the-transformative-power-of-yoga/',
    },
    {
      title: 'Say No To Drugs!',
      image: fblog2,
      tech: ['Content Writing'],
      desc: 'International Day against Drug Abuse and Illicit Trafficking',
      demo: 'http://incrediblestories.home.blog/2024/06/26/international-day-against-drug-abuse-and-illicit-trafficking/',
    },
    {
      title: 'Powerful Mind',
      image: fblog3,
      tech: ['Creative Writing'],
      desc: 'Unlocking the Power of Meditation',
      demo: 'http://incrediblestories.home.blog/2024/06/26/unlocking-the-power-of-meditation/',
    },
    {
      title: 'Beyond the Cleft',
      image: fblog4,
      tech: ['Creative Writing'],
      desc: 'Breaking Barriers',
      demo: 'http://incrediblestories.home.blog/2023/12/05/beyond-the-cleft-breaking-barriers/',
    },
    {
      title: 'This very moment..',
      image: fblog5,
      tech: ['Creative Writing'],
      desc: 'Catchy caption for design portfolio promo.',
      demo: 'http://incrediblestories.home.blog/2020/05/11/this-very-moment/',
    },
    {
      title: 'Time to change..',
      image: fblog6,
      tech: ['Creative Writing'],
      desc: 'Catchy caption for design portfolio promo.',
      demo: 'http://incrediblestories.home.blog/2020/04/19/time-to-change/',
    },
  ],
};

const PortfolioDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <section className="max-w-6xl mx-auto pt-16 pb-20 px-6">
      {/* <h1
        className="text-2xl font-bold mb-14 text-[#ab0f09]"
        data-aos="fade-down"
      >
        Portfolio & Projects
      </h1> */}

      <div className="space-y-20">
        {Object.entries(portfolioCategories).map(
          ([category, projects], catIndex) => (
            <div
              key={category}
              data-aos="fade-up"
              data-aos-delay={catIndex * 100}
            >
              {/* Category Title */}
              <h2 className="text-xl font-semibold mb-8 capitalize text-gray-800">
                {category.replace(/([A-Z])/g, " $1")}
              </h2>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {projects.map((project, index) => {
                  const CardWrapper = project.slug ? Link : "div";

                  return (
                    <CardWrapper
                      key={index}
                      to={project.slug ? `/projects/${project.slug}` : undefined}
                      className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col"
                      data-aos="fade-up"
                      data-aos-delay={index * 80}
                    >
                       {/* Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      

                      {/* Content */}
                      <div className="p-5 flex flex-col h-full">
                        <h3 className="text-md font-bold text-[#ab0f09] mb-2">
                          {project.title}
                        </h3>

                        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                          {project.desc}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="mt-auto flex gap-4">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#ab0f09]"
                            >
                              <Github className="w-4 h-4" />
                              Code
                            </a>
                          )}

                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#ab0f09]"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </CardWrapper>
                  );
                })}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default PortfolioDetails;
