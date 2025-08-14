import React from 'react';
import htmlIcon from '../assets/tech/HTML5.jpg';
import cssIcon from '../assets/tech/CSS3.jpg';
import jsIcon from '../assets/tech/js.jpg';
import reactIcon from '../assets/tech/Reactjs.jpg';
import pythonIcon from '../assets/tech/python.jpg';
import pytorchIcon from '../assets/tech/pytorch.jpg';
import scikitIcon from '../assets/tech/scikit.jpg';
import tensorflowicon from '../assets/tech/tensorflow.jpg';
// import tailwindicon from '../assets/tech/tailwind.jpg';
import cicon from '../assets/tech/C.jpg';
// import chashicon from '../assets/tech/C#.jpg';
import cplusicon from '../assets/tech/cplus.jpg';
import canvaicon from '../assets/tech/Canva.jpg';
import figmaicon from '../assets/tech/figma.jpg';
import sqlicon from '../assets/tech/SQL.jpg';
import mysqlicon from '../assets/tech/mysql.jpg';
import mongodbicon from '../assets/tech/mongodb.jpg';
import phpicon from '../assets/tech/php.jpg';
import openaiicon from '../assets/tech/openai.jpg';
import wordpressicon from '../assets/tech/wordpress.jpg';
import vscodeicon from '../assets/tech/vscode.jpg';


// add as needed...

const techStack = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'Pytorch', icon: pytorchIcon },
  { name: 'Scikit-Learn', icon: scikitIcon },
  { name: 'Tensorlow', icon: tensorflowicon },
  // { name: 'Tailwind CSS', icon: tailwindicon },
  { name: 'C', icon: cicon },
  // { name: 'C#', icon: chashicon },
  { name: 'C++', icon: cplusicon },
  { name: 'Canva', icon: canvaicon },
  { name: 'Figma', icon: figmaicon },
  { name: 'SQL', icon: sqlicon },
  { name: 'MySQL', icon: mysqlicon },
  { name: 'MongoDB', icon: mongodbicon },
  { name: 'PHP', icon: phpicon },
  { name: 'OpenAI', icon: openaiicon},
  { name: 'WordPress', icon: wordpressicon },
  { name: 'VScode', icon: vscodeicon },
];


const TechStack = () => {
  return (
    <section id="tech" className="py-20 bg-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
     <h3 className="text-2xl md:text-2xl font-semibold text-[rgb(6,5,4)] border-1-4 border-[#ab0f09] pl-4" data-aos="fade-right">
          Technical Expertise
        </h3></div>

      <div className="flex flex-wrap justify-center gap-8 px-4 pt-6">
        {techStack.map((tech, i) => (
          <div
            key={i}
            className="relative group w-24 h-24 md:w-28 md:h-28 bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 transform hover:scale-110 flex items-center justify-center"
            data-aos="zoom-in"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full md:w-14 transition-transform duration-300"
            />
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default TechStack;
