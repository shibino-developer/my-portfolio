import React from 'react';

const testimonials = [
  {
    name: "Abraham Jacob",
    role: "Proprieter, Plamparambil Power Tools",
    feedback: "An outstanding full-stack developer with an eye for detail. Reliable, communicative, and always delivers above expectations.",
    // image: require('../assets/testimonials/client1.jpg'),
  },
  // {
  //   name: "Arjun R.",
  //   role: "Startup Founder",
  //   feedback: "Built our MVP from scratch — from UI to backend. Fast, creative, and solutions-oriented. Highly recommend!",
  //   image: require('../assets/testimonials/client2.jpg'),
  // },
  // {
  //   name: "Divya M.",
  //   role: "Content Strategist",
  //   feedback: "Her ability to write blogs, create documentation, and support tech with clarity is unmatched. A real multi-talent!",
  //   image: require('../assets/testimonials/client3.jpg'),
  // },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
     <h3 className="text-2xl md:text-2xl font-semibold text-[rgb(6,5,4)] border-1-4 border-[#ab0f09]" data-aos="fade-right">
          Testimonials
        </h3></div>


        <div className="flex flex-wrap justify-center gap-8 px-4 pt-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* <img
                // src={t.image}
                // alt={t.name}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
              /> */}
              <p className="text-gray-700 italic mb-4">"{t.feedback}"</p>
              <h4 className="text-md font-semibold text-[#ab0f09]">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          ))}
        </div>
      
    </section>
  );
};

export default Testimonials;
