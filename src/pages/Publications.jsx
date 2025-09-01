import React from "react";
import { motion } from "framer-motion";

const publications = [
  {
    id: 1,
    title: "IoT-Based Agricultural Robot",
    subtitle: "Published in International Journal of Computer Science and Engineering (IJCSE)",
    content: `Agriculture remains a primary livelihood for nearly 40% of the global population. With growing demands for efficiency and sustainability, the integration of autonomous systems in farming has become essential. This work presents the design of an IoT-based autonomous agricultural robot capable of real-time field monitoring and intelligent irrigation management. The proposed system minimizes human intervention by collecting soil parameters, analyzing environmental conditions, and automating irrigation processes to optimize resource utilization. By supporting precision farming practices, this solution enhances crop yield, reduces environmental risks, and ensures sustainable agricultural development. The implementation demonstrates the potential of autonomous agricultural robots in transforming conventional farming into a smart, technology-driven process.`,
    link: "https://www.ijcseonline.org/pdf_paper_view.php?paper_id=5165&9-IJCSE-08250-36.pdf", // Replace with actual PDF link
  },
];

const Publications = () => {
  return (
    <div className="max-w-3xl mx-auto pt-16">
      <h1 className="text-2xl font-bold text-[#030303] pt-6">Publications</h1>
      {publications.map((pub) => (
        <motion.div
          key={pub.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 p-6 bg-white shadow rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-[#ab0f09] mb-2">{pub.title}</h2>
          <h3 className="text-lg text-gray-600 mb-4">{pub.subtitle}</h3>
          <p className="text-gray-700 leading-relaxed mb-4">{pub.content}</p>
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ab0f09] text-white px-5 py-2 rounded hover:bg-red-700 transition"
          >
            Read Full Paper (PDF)
          </a>
        </motion.div>
      ))}

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#ab0f09] text-white px-4 py-2 rounded-full shadow hover:bg-red-700 transition"
      >
        ↑ Back to Top
      </button>
    </div>
  );
};

export default Publications;
