import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Github, ExternalLink } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
      title: 'Movie Recommendation System',
      image: mrsimage,
      tech: ['Python', 'Pandas', 'Scikit-learn'],
      desc: 'Content-based movie recommender using cosine similarity.',
      github: 'https://github.com/shibino-developer/Movie-Recommendation-System',
      demo: 'https://docs.google.com/presentation/d/1tnSzzkC9TGndTI2l9pGXBBpG8D3oOLARzhIUlh6kFzc/edit?slide=id.p#slide=id.p',
    },
    {
      title: 'Password Manager',
      image: pmimage,
      tech: ['Python', 'Django', 'Cryptography'],
      desc: 'Secure password manager with encryption and auto-generation.',
      github: 'https://github.com/shibino-developer/password_manager',
      demo: 'https://docs.google.com/presentation/d/1nXclq0qoS2C-ilgXTHIZanvPRl_vOGg2k4kkzaqT2gQ/edit?slide=id.p#slide=id.p',
    },
    {
      title: 'ERP Employee Management',
      image: erpempimage,
      tech: ['Python', 'Django', 'ERP'],
      desc: 'Employee management system using ERP concepts.',
      github: 'https://github.com/shibino-developer/Employee-Management-System-ERP-Implementation-',
      demo: 'https://docs.google.com/presentation/d/1ApVES4tj-H2CIkaBMt9ezCIZ1YOjh7f2/edit?slide=id.p1#slide=id.p1',
    },
    {
      title: 'IT Inventory System',
      image: itinventimage,
      tech: ['Google Sheets', 'Apps Script'],
      desc: 'Inventory tracking system using ERP principles.',
      github: 'https://github.com/shibino-developer/Inventory-Management-System',
      demo: 'https://docs.google.com/presentation/d/1zzMGbIJpEimkwQ1QQ0VJXw2q7l3XTtlr/edit?slide=id.p1#slide=id.p1',
    },
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
    {
      title: 'Weather App',
      image: weatherimage,
      tech: ['Python', 'Django', 'SQLite'],
      desc: 'Shop app with cart, login, and payments.',
      github: 'https://github.com/shibino-developer/weather-app',
      demo: 'https://docs.google.com/presentation/d/1ifmc8kJgmf8XIfGQF-yIthPkYOGq632qx2mcnFnz6oY/edit?slide=id.p#slide=id.p',
    },
    {
      title: 'Stock Management and Billing System',
      image: billingimage,
      tech: ['Python', 'Tkinter', 'SQLite'],
      desc: 'Developed a database-driven warehouse management system in Python using Tkinter for the user interface and SQLite for database management.',
      github: 'https://github.com/shibino-developer/Software-Development',
      demo: 'https://docs.google.com/presentation/d/19vfCIQW5qTognoV7XsATtKiP2pzcgRlIcDRBBKexfr0/edit?slide=id.p#slide=id.p',
    },
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
    {
      title: 'An Autonomous Agricultural Robot using IoT',
      image: autimage,
      tech: ['Python', 'JavaScript', 'IoT'],
      desc: 'Proposed a web application for tracking employee tasks and implementing a rating system to streamline the performance evaluation process within organizations.',
      // github: '',
      demo: 'https://docs.google.com/presentation/d/1cexq7nOjjwoBTyEhKk0c6mWfyxencH3J/edit?usp=drive_link&ouid=112880455503250258365&rtpof=true&sd=true',
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
    <section className="py-20 bg-white dark:bg-[#123a2d] text-[#ab0f09]">
      <div className="max-w-2xl mx-auto px-6">
        {/* <h2 className="text-3xl font-bold border-l-4 border-white pl-4 mb-10">
          {/* My Portfolio
        </h2> */} 

        {Object.entries(portfolioCategories).map(([category, projects], index) => (
          <div key={category} className="mb-16" data-aos="fade-up" data-aos-delay={index * 100}>
            <h3 className="text-2xl font-semibold mb-6 capitalize">
              {category.replace(/([A-Z])/g, ' $1')}
            </h3>

            <Swiper
              spaceBetween={15}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              autoHeight={true}
              className="rounded-md overflow-hidden"
            >
              {projects.map((project, idx) => (
                <SwiperSlide key={idx}>
                  <div className="group relative">
                    <img
                      src={project.image || 'https://via.placeholder.com/400x300'}
                      alt={project.title}
                      className="w-full h-56 md:h-64 object-cover rounded-md"
                    />
                    <div className="absolute inset-0 bg-[#060504] bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 text-white flex flex-col justify-center items-center p-4 rounded-md">
                      <h4 className="text-lg font-bold mb-2 text-center">{project.title}</h4>
                      <p className="text-sm mb-2 text-center">{project.desc}</p>
                      <div className="flex flex-wrap justify-center gap-2 text-xs mb-3">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="bg-[#ab0f09] px-2 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5 hover:text-[#ab0f09]" />
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
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

export default PortfolioDetails;
