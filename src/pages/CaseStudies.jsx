import { motion } from "framer-motion";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 3,
      title: "IoT-Based Agricultural Robot",
      subtitle: "Revolutionizing Smart Farming",
      content: `
### Problem
Traditional agricultural practices are labor-intensive, time-consuming, and often lead to inefficient utilization of resources such as water and energy. With nearly 40% of the global population depending on agriculture, these inefficiencies significantly impact food production and sustainability. Additionally, inconsistent irrigation and lack of real-time monitoring result in poor crop yield and environmental risks. There is a critical need for an automated solution that minimizes human intervention, ensures precise irrigation, and optimizes resource usage through smart technologies.

### Solution
Designed and implemented an IoT-enabled autonomous agricultural robot that addresses these challenges through smart automation and real-time analytics. The system combines robotics, IoT communication, and data-driven decision-making to provide:
- Automated irrigation control based on soil moisture and environmental conditions
- Real-time monitoring of soil parameters (moisture, temperature, humidity)
- Remote accessibility through a mobile app for farmers to manage irrigation schedules and monitor field conditions
- This solution minimizes human intervention, conserves resources, and enhances farming efficiency.

### Implementation
- Hardware: Arduino, Sensors, Motors
- Software: Python, MQTT, NodeMCU for IoT communication
- Features: Automated irrigation, soil analysis, mobile app control

### Impact
- 30% reduction in water consumption through smart irrigation
- Improved crop yield predictions using real-time soil analytics
- Reduced labor dependency and manual errors
- Scalable and cost-effective solution suitable for small and large farms
- Supports sustainable agriculture by optimizing resource utilization and minimizing environmental risks
      `,
    },
    {
      id: 2,
      title: "Military Camouflaged Robot",
      subtitle: "Stealth and Intelligence for Defense",
      content: `
### Problem
Modern defense operations demand covert surveillance and real-time intelligence gathering in hostile environments. Traditional surveillance units often face challenges such as:
- High visibility, increasing the risk of detection by adversaries
- Manual control limitations, leading to delayed response times
- Lack of real-time object recognition, making missions less efficient
There is a critical need for an autonomous, stealth-capable system that can navigate hazardous zones, remain undetected, and deliver actionable intelligence in real time.

### Solution
Modern defense operations demand covert surveillance and real-time intelligence gathering in hostile environments. Traditional surveillance units often face challenges such as:
- High visibility, increasing the risk of detection by adversaries
- Manual control limitations, leading to delayed response times
- Lack of real-time object recognition, making missions less efficient
There is a critical need for an autonomous, stealth-capable system that can navigate hazardous zones, remain undetected, and deliver actionable intelligence in real time.

### Implementation
- Hardware: Raspberry Pi, Camouflage Skin
- Software: Python, OpenCV for motion detection
- Features: Remote operation, AI-powered object detection

### Impact
-Increased mission safety by reducing soldier exposure in high-risk areas
- Enhanced covert surveillance with real-time intelligence transmission
- AI-driven object recognition, improving decision-making accuracy
- Scalable solution for various defense and security applications
      `,
    },
    {
      id: 1,
      title: "Quantum IoT Research",
      subtitle: "The Future of IoT with Quantum Tech",
      content: `
### Problem
As IoT networks continue to scale, they encounter two critical challenges:
- Latency in communication, which impacts real-time decision-making
- Vulnerabilities in data security, making them susceptible to cyberattacks
Traditional cryptographic methods are increasingly inadequate against emerging quantum threats, creating the need for next-generation security and performance solutions.

### Solution
Conducted research on integrating quantum computing principles into IoT ecosystems to enable:
- Ultra-secure communication using Quantum Key Distribution (QKD)
- High-speed processing for large-scale IoT networks
- Resistance to quantum-based cyberattacks, ensuring future-proof IoT infrastructure

### Implementation
- Research: Quantum Key Distribution for IoT
- Simulation: Python with Qiskit
- Concept: Secure IoT communication using quantum encryption

### Impact
- Proposed a future-ready framework for ultra-secure IoT systems resistant to quantum hacking
- Provided simulation-based evidence for integrating QKD with IoT protocols
- Opened pathways for next-generation smart networks, combining IoT scalability with quantum security
      `,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto pt-16">
      <motion.h1
        className="text-2xl font-bold mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Case Studies
      </motion.h1>

      <div className="space-y-12">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <h2 className="text-2xl text-[#ab0f09] font-bold mb-2">{study.title}</h2>
            <p className="text-gray-600 mb-4 italic">{study.subtitle}</p>
            <div className="prose max-w-none text-gray-700 whitespace-pre-line">
              {study.content}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
