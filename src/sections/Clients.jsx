import React from 'react';

const clients = [
  { name: "Plamparambil Power Tools" },
//   { name: "SmartByte", logo: require('../assets/clients/client2.png') },
//   { name: "CodeCrafters", logo: require('../assets/clients/client3.png') },
//   { name: "Visionary Designs", logo: require('../assets/clients/client4.png') },
//   { name: "BizSoft", logo: require('../assets/clients/client5.png') },
//   { name: "NextGen Tech", logo: require('../assets/clients/client6.png') },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Clients I've Worked With</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {clients.map((client, i) => (
            <div
              key={i}
              className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              
              <p className="text-sm text-gray-600 mt-2">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
