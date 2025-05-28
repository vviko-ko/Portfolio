"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Project data (all use /web.avif for now)
const projects = [
  {
    title: "Portfolio Website",
    description: "Built with Next.js, TailwindCSS, and Framer Motion.",
    image: "/web.avif",
    link: "https://yourportfolio.com",
    category: "Next.js",
  },
  {
    title: "React Dashboard",
    description: "Admin dashboard with Chart.js and user authentication.",
    image: "/web.avif",
    link: "https://dashboard.com",
    category: "React",
  },
  {
    title: "Landing Page",
    description: "Animated landing page using HTML, TailwindCSS, and JavaScript.",
    image: "/web.avif",
    link: "https://landingpage.com",
    category: "HTML/CSS",
  },
];

// Filter categories
const categories = ["All", "React", "Next.js", "HTML/CSS"];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="project" className="w-full px-4 py-16 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "border-gray-300 text-gray-700 hover:border-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
                onClick={() => setActiveProject(null)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Preview */}
        {/* Modal Preview */}
<AnimatePresence>
  {activeProject && (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setActiveProject(null)}
    >
      <motion.div
        className="bg-white rounded-xl overflow-hidden shadow-xl max-w-lg w-full p-6 relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setActiveProject(null)}
          className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>

        <Image
          src={"web.avif"}
          alt={"okay"}
          width={600}
          height={400}
          className="rounded-lg mb-4 w-full h-auto object-cover"
        />

        <h3 className="text-2xl font-bold mb-2 text-gray-900">{"Paige"}</h3>
        <p className="text-gray-700 text-sm mb-4">{"Recruiting website"}</p>

        {/* Optional tech stack tags (static or dynamic) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["Next.js","Bootstrap", "React.Js", "TailwindCSS", "Framer Motion"].map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* {okay && (
          <a
            href={activeProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 text-sm"
          >
            Visit Project →
          </a>
        )} */}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </section>
  );
};

export default ProjectsSection;
