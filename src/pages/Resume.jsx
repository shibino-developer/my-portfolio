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
          I began my professional journey with a B.Tech in Computer Science and Engineering, where I developed an interest in software development and problem-solving. Early in my career, I worked as a Software Engineer Trainee, gaining initial exposure to Python-based backend tasks, debugging, documentation, and Agile development practices.

<br/><br/>I committed myself to structured, self-directed upskilling. Over the past few years, I have invested 2,000+ hours in hands-on learning through real-world projects in Python, Django, FastAPI, REST APIs, PostgreSQL, React, and machine learning workflows. During this time, I focused on writing clean, modular code, following OOP principles, PEP 8 standards, and maintaining disciplined Git/GitHub practices.

<br/><br/>Alongside technical growth, I also worked as a part-time private tutor, which strengthened my communication, mentoring, and time-management skills. Teaching helped me develop clarity in explaining concepts and reinforced my own understanding of fundamentals.

<br/><br/>Today, I am a confident entry-level Python Full Stack Developer with practical project experience, a strong backend foundation, and a continuous learning mindset. I am actively seeking a junior or trainee role where I can contribute to real-world software development, collaborate with experienced teams, and grow into a skilled full-stack professional.
</p> 
      </section>

      {/* Core Values */}
      <section id="about" className="py-20 bg-[#ab0f09] text-white" data-aos="fade-right">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start ">

    {/* First main part with 2 sub-parts */}
    <div className="space-y-6">
     <div className="bg-[#bf1510] p-6 rounded-xl shadow hover:shadow-md transition">
  <h4 className="text-xl font-semibold mb-4">My Stack</h4>

  <div className="mb-6 border-l-4 border-[#ab0f09] pl-4">
    <h3 className="font-semibold mb-2">Languages</h3>
    <ul className="list-disc list-inside text-sm">
      <li>Python 3.x</li>
      <li>JavaScript</li>
      <li>HTML</li>
      <li>CSS3</li>
      <li>SQL</li>
    </ul>
  </div>

  <div className="mb-6 border-l-4 border-[#ab0f09] pl-4">
    <h3 className="font-semibold mb-2">Frameworks and Libraries</h3>
    <ul className="list-disc list-inside text-sm">
      <li>Django</li>
      <li>Fskla</li>
      <li>ReactJS</li>
      <li>Bootstrap</li>
      <li>Tailwind CSS</li>
    </ul>
  </div>

  <div className="mb-6 border-l-4 border-[#ab0f09] pl-4">
    <h3 className="font-semibold mb-2">Databases</h3>
    <ul className="list-disc list-inside text-sm">
      <li>MySQL</li>
      <li>SQLite</li>
      <li>PostgreSQL</li>
    </ul>
  </div>

  <div className="mb-6 border-l-4 border-[#ab0f09] pl-4">
    <h3 className="font-semibold mb-2">Tools and Platforms</h3>
    <ul className="list-disc list-inside text-sm">
      <li>Git / GitHub</li>
      <li>Postman</li>
      <li>Phabricator</li>
      <li>Buildkite</li>
    </ul>
  </div>
   <div className="mb-6 border-l-4 border-[#ab0f09] pl-4">
    <h3 className="font-semibold mb-2">AI/ML Exposure</h3>
    <ul className="list-disc list-inside text-sm">
      <li>Pandas</li>
      <li>NumPy</li>
      <li>Scikit-learn</li>
      <li>TensorFlow</li>
      <li>LangChain</li>
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
                company: 'Quest Innovative Solutions',
                role: 'Software Engineer Trainee',
                date: 'September 2020 - March 2021',
              },
              {
                company: 'Keltron Knowledge Centre',
                role: 'Intern',
                date: 'June 2017',
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
