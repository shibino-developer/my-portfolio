import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import work1 from '../assets/work1.jpg';




const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="text-gray-800 font-sans ">

      
      <section className="py-12 px-6 md:px-20 bg-white">
        
        <h1 className="text-3xl font-bold text-[#ab0f09] pt-6" data-aos="fade-right" >My <span className="text-black">Professional Journey</span></h1>
        <p className="mt-4 text-md md:text-lg" data-aos="fade-left" >
          My journey in technology has been one of passion, perseverance, and purposeful growth. From my early days as a Computer Science student to my current self-driven developer and learner, I have faced and overcome challenges that have shaped not only my skills but also my character.

After graduating with a B.Tech in Computer Science in 2020, I was excited and eager to step into the professional world. I secured an internship immediately after graduation, where I gained valuable hands-on experience in full-stack software development, working extensively with Python, Django, and React.js. This internship gave me a practical understanding of coding, teamwork, and agile workflows, solidifying my technical foundation.

<br/><br/>Following my internship, I worked as a Software Engineer Trainee for about eight months. In this role, I contributed to real-world projects, collaborated with experienced developers, and deepened my knowledge of software design, debugging, and deployment. It was a period of intense learning and professional growth, during which I honed not only my technical expertise but also my communication and problem-solving skills.

However, life presented an unforeseen challenge-a necessary medical surgery that required me to take a pause from my career. This phase was undoubtedly difficult. Being away from the professional environment, while recovering physically and mentally, tested my resilience and determination. Yet, I chose to see this period not as a setback but as an opportunity.

<br/><br/>During my recovery, I committed myself to relentless self-learning. I immersed myself in coding projects, building over 20 full-stack websites and web applications from scratch. I also ventured into machine learning, creating projects like a predictive health monitoring system that could potentially save lives by early detection of health issues. Additionally, I explored creative avenues by designing posters and writing technical content, which allowed me to expand my skill set beyond coding.

To keep my knowledge current and competitive, I pursued numerous certifications in areas including full-stack development, data analytics, cloud security, cybersecurity fundamentals, and enterprise resource planning. This continuous upskilling journey reflected my unwavering commitment to personal and professional growth despite the obstacles.

<br/><br/>Throughout this journey, one quote has profoundly inspired me and guided my approach to life and work:
<br/><br/>“I hide my capabilities to show my abilities.” <br/><br/>
For me, this means focusing less on what I claim I can do and more on demonstrating tangible results through my work, perseverance, and achievements.

Today, I stand ready to bring my diverse skills, resilience, and passion to a dynamic organization. I am driven by the desire to contribute meaningfully, learn continuously, and grow alongside a team that values innovation and dedication. My journey is a testament to my belief that true capability shines brightest through consistent effort, adaptability, and a refusal to give up-even when the path is tough.

I am excited about the future and eager to embrace new challenges, confident that every experience has prepared me to make a real impact in the tech world. </p> 
      </section>

      {/* Core Values */}
      <section id="about" className="py-20 bg-[#ab0f09] text-white" data-aos="fade-right">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start ">

    {/* First main part with 2 sub-parts */}
    <div className="space-y-6">
     <div className="bg-[#bf1510] p-6 rounded-xl shadow hover:shadow-md transition">
  <h4 className="text-xl font-semibold mb-4">My Stack</h4>

  <div className="mb-6 border-l-4 border-[#ab0f09] pl-4">
    <h3 className="font-semibold mb-2">Machine Learning & Data Science</h3>
    <ul className="list-disc list-inside text-sm">
      <li>Python 3.x</li>
      <li>NumPy, Pandas, Matplotlib, Seaborn</li>
      <li>Scikit-learn, XGBoost, LightGBM</li>
      <li>TensorFlow, Keras, PyTorch</li>
      <li>NLTK, spaCy, Hugging Face Transformers</li>
      <li>Flask, FastAPI, Docker</li>
      <li>Git, GitHub</li>
      <li>MLflow, Weights & Biases</li>
    </ul>
  </div>

  <div className="mb-6 border-l-4 border-[#ab0f09] pl-4">
    <h3 className="font-semibold mb-2">Web Development</h3>
    <ul className="list-disc list-inside text-sm">
      <li>HTML5, CSS3, JavaScript, Bootstrap, ReactJS</li>
      <li>Flask, FastAPI, Django</li>
      <li>SQLite, PostgreSQL, MySQL, MongoDB (whichever you use)</li>
      <li>RESTful APIs, JSON</li>
      <li>Git, GitHub, Docker, Heroku, Netlify</li>
    </ul>
  </div>
</div>

      <div className="bg-[#bf1510] p-6 rounded-xl shadow hover:shadow-md transition">
        <h4 className="text-xl font-semibold mb-2">Personal Skills</h4>
        <ul className="list-disc list-inside text-white text-sm space-y-1">
              <li>Problem-Solving</li>
              <li>Communication</li>
              <li>Adaptability</li>
              <li>Attention to Detail</li>
            </ul>
        {/* Content */}
      </div>
    </div>

    {/* Second main part with 2 sub-parts */}
    <div className="space-y-6">
      <div className="bg-[#bf1510] p-6 rounded-xl shadow hover:shadow-md transition">
        <h4 className="text-xl font-semibold mb-2">Experiences</h4>
         {[
              {
                company: 'SELF DEVELOPER',
                role: 'Python Developer',
                date: 'June 2022 - Present',
              },
              {
                company: 'SEQUOIA APPLIED TECHNOLOGIES',
                role: 'Software Engineer',
                date: 'March 2021 - October 2021',
              },
              {
                company: 'QUEST INNOVATIVE SOLUTIONS',
                role: 'Software Engineer Trainee',
                date: 'September 2020 - March 2021',
              },
              
            ].map(({ company, role, date }) => (
              <div key={company} className="mb-6 border-l-4 border-[#ab0f09] pl-4">
                <h3 className="font-semibold">{company}</h3>
                <p className="italic text-sm mb-1">{role}</p>
                <p className="text-xs text-gray-400">{date}</p>
              </div>
            ))}
        
        {/* Content */}
      </div>
      <div className="bg-[#bf1510] p-6 rounded-xl shadow hover:shadow-md transition">
        <h4 className="text-xl font-semibold mb-2">Education</h4>
        <div className="border-l-4 border-[#ab0f09] text-white pl-4">
              <h3 className="font-semibold">B.Tech in Computer Science</h3>
              <p className="text-sm italic">St.Thomas College of Engineering and Technology, Chengannur <br/>A P J Abdul Kalam Technological University</p>
              <h6 className="font-semibold">2016-2020</h6>
            </div>
        {/* Content */}
      </div>
    </div>

    {/* Third main part with 3 sub-parts stacked vertically */}
    <div className="space-y-6">
      <div className="bg-[#bf1510] p-6 rounded-xl shadow hover:shadow-md transition">
        <h4 className="text-xl font-semibold mb-2">What can I do?</h4>
        <ul className="list-disc list-inside text-white text-sm space-y-1">
              <li>Build responsive full-stack web applications using Python, Django, and React.js.</li>
              <li>Develop and deploy machine learning models for real-world problems.</li>
              <li>Create engaging technical content and documentation.</li>
              <li>Design attractive posters and digital marketing materials with Canva and Figma.</li>
              <li>Work effectively in Agile teams and manage projects using Git.</li>
              <li>Quickly learn new technologies and adapt to challenges.</li>
            </ul>
        {/* Content */}
      </div>
      <div className="bg-[#bf1510] p-6 rounded-xl shadow hover:shadow-md transition">
        <h4 className="text-xl font-semibold mb-2">Design Skills</h4>
        <ul className="list-disc list-inside text-white text-sm space-y-1">
              <li>Proficient in creating posters, brochures, and social media graphics using Canva and Figma.</li>
              <li>Skilled in UI/UX basics to design user-friendly and visually appealing web interfaces.</li>
              <li>Experience in branding and digital content design for promotional purposes.</li>
            </ul>
        {/* Content */}
      </div>
      <div className="bg-[#bf1510] p-6 rounded-xl shadow hover:shadow-md transition">
        <h4 className="text-xl font-semibold mb-2">Hobbies & Interests</h4>
        <ul className="list-disc list-inside text-white text-sm space-y-1">
              <li>Poster Designing</li>
              <li>Reading</li>
              <li>Yoga</li>
            </ul>
        {/* Content */}
      </div>
    </div>

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
      <section className="py-12 px-6 md:px-20 bg-white-100 grid grid-cols-1 md:grid-cols-2 gap-6 items-center" data-aos="fade-left">
  {/* Text Column */}
  <div>
    <h3 className="text-3xl font-bold text-[#ab0f09]" data-aos="fade-right">
      With over 5+ years in the tech world
      <span className="text-black">, I merge development precision with design finesse to craft exceptional digital products.</span>
    </h3>
  </div>

  {/* Image Column */}
  <div className="flex justify-center">
    <img 
      src={work1} 
      alt="Developer at work" 
      className="w-full max-w-lg"
    />
  </div>
</section>


    </div>
  );
};

export default Resume;
