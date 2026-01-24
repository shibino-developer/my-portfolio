import React from "react";
import { useParams } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";
import { projectCaseStudies } from "../data/projectCaseStudies"; // adjust path
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const CaseStudy = () => {
  const { slug } = useParams();
   useEffect(() => {
  AOS.init({
    duration: 900,
    once: true,
    easing: "ease-out-cubic"
  });

 
  AOS.refresh();
}, []);

  // Find project safely
  const project = projectCaseStudies?.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-center p-10 text-red-600">
        Project not found
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-[#ab0f09]" data-aos="fade-down">{project.title}</h1>

      {/* Short Description */}
      {project.shortDesc && (
        <p className="text-gray-700" data-aos="fade-up">{project.shortDesc}</p>
      )}

      {/* Tech Stack */}
      {project.tech?.length > 0 && (
        <div className="flex flex-wrap gap-2" data-aos="fade-up">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded" data-aos="zoom-in"
      data-aos-delay={i * 80}
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Problem */}
      {project.problem && (
        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-xl font-semibold mt-4">Problem</h2>
          <p className="text-gray-700">{project.problem}</p>
        </div>
      )}

      {/* Solution */}
      {project.solution && (
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-xl font-semibold mt-4">Solution</h2>
          <p className="text-gray-700">{project.solution}</p>
        </div>
      )}

      {/* Features */}
      {project.features?.length > 0 && (
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-xl font-semibold mt-4">Features</h2>
          <ul className="list-disc list-inside text-gray-700">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Challenges */}
      {project.challenges && (
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-xl font-semibold mt-4">Challenges</h2>
          <p className="text-gray-700">{project.challenges}</p>
        </div>
      )}

      {/* Learnings */}
      {project.learnings && (
        <div data-aos="fade-up" data-aos-delay="300"> 
          <h2 className="text-xl font-semibold mt-4">Learnings</h2>
          <p className="text-gray-700">{project.learnings}</p>
        </div>
      )}

      {/* Links */}
      <div
  className="flex gap-4 mt-6"
  data-aos="fade-up"
  data-aos-delay="400"
>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#ab0f09]"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#ab0f09]"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        )}
      </div>
    </section>
  );
};

export default CaseStudy;
