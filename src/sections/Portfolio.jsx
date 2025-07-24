import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Github, ExternalLink } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import mrsimage from '../assets/Movie recommendation .jpg';
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

const portfolioData = {
  2025: [
    {
      title: 'Movie Recommendation System',
      image: mrsimage,
      tech: ['Python', 'Pandas', 'Scikit-learn'],
      desc: 'A content-based movie recommender built using Python, Pandas and Scikit-learn, suggests similar movies based on genre, keywords, and user imput using cosine similarity.',
      github: 'https://github.com/shibino-developer/Movie-Recommendation-System',
      demo: 'https://docs.google.com/presentation/d/1tnSzzkC9TGndTI2l9pGXBBpG8D3oOLARzhIUlh6kFzc/edit?slide=id.p#slide=id.p',
    },
    {
      title: 'Password Manager',
      image: pmimage,
      tech: ['Python', 'Django', 'Cryptography'],
      desc: 'Built a system enhances security by implementing strong encryption, auto-generation of complex passwords, and role-based access control.',
      github: 'https://github.com/shibino-developer/password_manager',
      demo: 'https://docs.google.com/presentation/d/1nXclq0qoS2C-ilgXTHIZanvPRl_vOGg2k4kkzaqT2gQ/edit?slide=id.p#slide=id.p',
    },
    {
      title: 'ERP based Employee Management System',
      image: erpempimage,
      tech: ['Python', 'Django', 'ERP concepts'],
      desc: 'Designed to streamline HR operations by integrating employee records, payroll management, leave tracking, and performance evaluation into a centralized system. ',
      github: 'https://github.com/shibino-developer/Employee-Management-System-ERP-Implementation-',
      demo: 'https://docs.google.com/presentation/d/1ApVES4tj-H2CIkaBMt9ezCIZ1YOjh7f2/edit?slide=id.p1#slide=id.p1',
    },
    {
      title: 'IT Inventory System',
      image: itinventimage,
      tech: ['Google Sheets', 'Google Apps Scripts'],
      desc: 'Developed an automated inventory tracking system using spreadsheets, applying ERP concepts to manage stock levels efficiently.',
      github: 'https://github.com/shibino-developer/Inventory-Management-System',
      demo: 'https://docs.google.com/presentation/d/1zzMGbIJpEimkwQ1QQ0VJXw2q7l3XTtlr/edit?slide=id.p1#slide=id.p1',
    },
    // Add more...
  ],
  2024: [
    {
      title: 'HeartInsight',
      image: medicimage,
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Pickle'],
      desc: 'Developed with Python and deployed via a Flask API, it provides an easy-to-use interface for healthcare providers and individuals to obtain real-time health predictions.',
      github: 'https://github.com/shibino-developer/healthcare_chatbot',
      demo: 'https://docs.google.com/presentation/d/1VqcbXdhjaUgu_i08zbaMMkEBQ2J7YhpxU9wt1fcXihw/edit?slide=id.p#slide=id.p',
    },
    {
      title: 'HeartGuard ML: Predictive Health Monitoring System',
      image: healthinsimage,
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Flask'],
      desc: 'Implemented advanced machine learning techniques to predict the risk of heart disease from patient data',
      github: 'https://github.com/shibino-developer/heart_disease_project',
      demo: 'https://docs.google.com/presentation/d/1AC69BYdURwtI-GtWWm-E33epvXp_BWVUqsIIJri1BJs/edit?slide=id.p#slide=id.p',
    },
     {
      title: 'SecureNetGuard: Zero Trust Network Access Implementation',
      image: zeroimage,
      tech: ['Python', 'Flask', 'WT(JSON Web Token'],
      desc: 'A Zero Trust Network Access (ZTNA) solution using Flask framework and JSON Web Tokens (JWT) for secure authentication and access control.',
      github: 'https://github.com/shibino-developer/ztna_project',
      demo: 'https://docs.google.com/presentation/d/1scbPK1av1l-dosfdpR2TQ9_R7VIlwzRwYd8Tn8Z2h0A/edit?slide=id.p#slide=id.p',
    },
    {
      title: 'Online Quiz Master',
      image: quizimage,
      tech: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS'],
      desc: 'Developed an online quiz master using React framework.',
      github: 'https://github.com/shibino-developer/my-quiz-app',
      demo: 'https://shibino-developer.github.io/my-quiz-app/',
    },
    {
      title: 'Recipe Collection Site',
      image: recipeimage,
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      desc: 'Developed a recipe site with HTML5, CSS3, JavScript',
      github: 'https://github.com/shibino-developer/recipe-site',
      demo: 'https://shibino-developer.github.io/recipe-site/',
    },
     {
      title: 'AI-Generated Poetry: Exploring Shakespearean Sonnets',
      image: genaiimage,
      tech: ['Python', 'NumPy', 'Tensorflow', 'Web Scraping'],
      desc: 'Leverages deep learning techniques to generate poetry in the style of Shakespearean sonnets, using a Long Short-Term Memory (LSTM).',
      github: 'hhttps://github.com/shibino-developer/ai-generated-poetry',
      demo: 'https://docs.google.com/presentation/d/1kqlzw98nwKplSFsqaWB4GBDlY3S66R4OX5j3XWONsvA/edit?slide=id.p#slide=id.p',
    },
     {
      title: 'Book Search App',
      image: bookimage,
      tech: ['Go', 'CSS3', 'JavaScript', 'Bootstrap', 'ReactJS'],
      desc: 'Implemented a web-based application designed to help users find books based on titles or authors. By leveraging the Open Library API, the app fetches and displays book details, including cover images, publication dates, and authors.',
      github: 'https://github.com/shibino-developer/book-search-app',
      // demo: 'https://yourcrmapp.com',
    },
    {
      title: 'Tools Trading Shop Website',
      image: toolsimage,
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      desc: 'Deeveloped a responsive website for tools and spareparts trading shop.',
      github: 'https://github.com/shibino-developer/plamparambil-power-tools-website',
      demo: 'https://shibino-developer.github.io/plamparambil-power-tools-website/',
    },
     {
      title: 'Taskmaster',
      image: taskimage,
      tech: ['Python', 'Tkinter', 'Matplotlib'],
      desc: 'A sophisticated desktop application built using Tkinter GUI library, designed to streamline task management and provide insightful data visualization.',
      github: 'https://github.com/shibino-developer/todo_list_app',
      demo: 'https://docs.google.com/presentation/d/1fo1HuDOBzwa_CHGONq68O5Ch7tWnVEbByILUAV1uMuc/edit?slide=id.p#slide=id.p',
    },
  ],
  2023: [
    {
      title: 'Weather App',
      image: weatherimage,
      tech: ['Python', 'Django', 'SQLite'],
      desc: 'Shop app with cart, login, and payments.',
      github: 'https://github.com/shibino-developer/weather-app',
      demo: 'https://docs.google.com/presentation/d/1ifmc8kJgmf8XIfGQF-yIthPkYOGq632qx2mcnFnz6oY/edit?slide=id.p#slide=id.p',
    },
  ],
  2022: [
    {
      title: 'Stock Management and Billing System',
      image: billingimage,
      tech: ['Python', 'Tkinter', 'SQLite'],
      desc: 'Developed a database-driven warehouse management system in Python using Tkinter for the user interface and SQLite for database management.',
      github: 'https://github.com/shibino-developer/Software-Development',
      demo: 'https://docs.google.com/presentation/d/19vfCIQW5qTognoV7XsATtKiP2pzcgRlIcDRBBKexfr0/edit?slide=id.p#slide=id.p',
    },
  ],
  2021: [
    {
      title: 'Oncolens Detect',
      image: cancerimage,
      tech: ['Python', 'Django', 'React', 'Selenium'],
      desc: 'By providing a centralized platform for managing patient information, including test results, diagnoses, and treatments, the Healthcare Management System has revolutionized patient data management practices.',
      github: 'https://github.com/shibino-developer/CancerTrackEDC',
      demo: 'https://docs.google.com/presentation/d/1P6ZVY-tWmzo9-sPZTbaGRZ5npLyhCL3I-SCSjHHbV9o/edit?slide=id.p#slide=id.p',
    },
    {
      title: 'Employee Task Tracking and Rating System',
      image: employeeimage,
      tech: ['Python', 'Tkinter', 'SQLite'],
      desc: 'Developed a web application for tracking employee tasks and implementing a rating system to streamline the performance evaluation process within organizations.',
      // github: 'https://github.com/...',
      demo: 'https://docs.google.com/presentation/d/1cexq7nOjjwoBTyEhKk0c6mWfyxencH3J/edit?rtpof=true&sd=true',
    },
  ],
  2020: [
    {
      title: 'An Autonomous Agricultural Robot using IoT',
      image: autimage,
      tech: ['Python', 'JavaScript', 'IoT'],
      desc: 'Proposed a web application for tracking employee tasks and implementing a rating system to streamline the performance evaluation process within organizations.',
      // github: '',
      demo: 'https://docs.google.com/presentation/d/1cexq7nOjjwoBTyEhKk0c6mWfyxencH3J/edit?usp=drive_link&ouid=112880455503250258365&rtpof=true&sd=true',
    },
  ],
};

const sortedYears = Object.keys(portfolioData).sort((a, b) => b - a);

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-[#ab0f09] dark:[#123a2d]">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white border-1-4 border-[#ab0f09] pl-4">
          Portfolio
        </h2> </div>

        {/* Grid rows with 3 cards per row */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sortedYears.map((year, index) => (
            <div
              key={year}
              className="bg-[#ab0f09] [#123a2d] p-4 rounded-xl shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                {year}
              </h3>

              <Swiper
                spaceBetween={15}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="rounded-md overflow-hidden"
              >
                {portfolioData[year].map((project, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="group relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-md"
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[#060504]  bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 text-white flex flex-col justify-center items-center p-4 rounded-md">
                        <h4 className="text-lg font-bold mb-2 text-center">{project.title}</h4>
                        <p className="text-sm mb-2 text-center">{project.desc}</p>
                        <div className="flex flex-wrap justify-center gap-2 text-xs mb-3">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-[#ab0f09] text-white px-2 py-0.5 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="GitHub"
                            >
                              <Github className="w-5 h-5 hover:text-[#ab0f09]" />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Live Demo"
                            >
                              <ExternalLink className="w-5 h-5 hover:text-[#ab0f09]" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
     
    </section>
  );
};

export default Portfolio;
