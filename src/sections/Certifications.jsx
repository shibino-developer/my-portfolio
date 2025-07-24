import React from 'react';

const certifications = [
  { name: "Cybrary", img: require('../assets/Cert/cybrary.png') },
  { name: "Udemy", img: require('../assets/Cert/udemy.png') },
  { name: "IBM Developer Skills Network", img: require('../assets/Cert/ibm.jpg') },
  { name: "Great Learning", img: require('../assets/Cert/greatlearning.png') },
  { name: "QIS Academy", img: require('../assets/Cert/qis.jpg') },
  { name: "Keltron Knowledge Centre", img: require('../assets/Cert/keltron.png') },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
     <h3 className="text-2xl md:text-2xl font-semibold text-[rgb(6,5,4)] border-1-4 border-[#ab0f09] pl-2" data-aos="fade-right">
          Certified By
        </h3></div>

        <div className="flex flex-wrap justify-center gap-8 px-4 pt-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition hover:scale-105"
              data-aos="zoom-in"
            >
              <img
                src={cert.img}
                alt={cert.name}
                className="w-full h-16 object-contain mx-auto grayscale hover:grayscale-0 transition duration-300"
              />
              <p className="text-sm text-gray-600 mt-2">{cert.name}</p>
            </div>
          ))}
        </div>
    
    </section>
  );
};

export default Certifications;