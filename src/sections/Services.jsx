import React from 'react';
import {
  Code,
  PenLine,
  LayoutTemplate,
  Table,
  MonitorSmartphone,
  FileText,
} from 'lucide-react';

const services = [
  {
    icon: <Code size={28}  />,
    title: "Full-Stack Web Development",
    desc: "Building complete, scalable web applications  from responsive frontend interfaces to robust backend APIs.",
  },
  {
    icon: <PenLine size={28}  />,
    title: "Technical & Social Blogging",
    desc: "Writing insightful blogs on technology and social topics to educate, inspire, and engage readers.",
  },
  {
    icon: <LayoutTemplate size={28} />,
    title: "Creative Brochure Design",
    desc: "Designing eye-catching digital brochures and marketing materials with clean visuals and effective messaging.",
  },
  {
    icon: <Table size={28}/>,
    title: "Business & Tech Support",
    desc: "Solving business problems through efficient Excel automation, dashboards, data analysis, and reporting.",
  },
  {
    icon: <MonitorSmartphone size={28}  />,
    title: "UI/UX Design",
    desc: "Crafting intuitive, modern, and user-friendly interface designs that enhance user experience.",
  },
  {
    icon: <FileText size={28} />,
    title: "Content Strategy & Documentation",
    desc: "Creating structured documentation, knowledge bases, and tech guides for developers and business teams.",
  },
];
const Services = () => {
  return (
    <section id ="services" className='bg-white py-20 px-6 md:px-12'>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div className= "md:col-span-1">
        <h3 className="text-xl md:text-3xl font-semibold text-[#060504] border-1-4 border-[#ab0f09] pl-4" data-aos="fade-right">
          What I do..
        </h3>
      </div>

      <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {services.map((service, i) => (
          <div 
          key = {i}
          className='flex items-start gap-4' data-aos="fade-up" data-aos-delay={i *100}>
            <div className='text-[#ab0f09] mt-1'>{service.icon}</div>
            <div>
              <h3 className = "text-lg font-semibold text-gray-800 mb-1">{service.title}</h3>
              <p className='text-gray-600 text-sm'>{service.desc}</p>
              </div>
            </div>

        ))}
      </div>
      </div>
    </section>
  );
};
  

export default Services;
