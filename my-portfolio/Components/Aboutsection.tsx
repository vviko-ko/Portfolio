"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="w-full px-4 py-16 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className=" text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 text-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Get to know me!</h3>
            <p className="mb-4 leading-relaxed">
              I am a Frontend Web Developer building the Front-end of Websites and Web Applications that lead to product success.
              Check out some of my work in the Projects section.
            </p>
            <p className="mb-6 leading-relaxed">
              I am open to job opportunities where I can contribute, learn, and grow.
              If you have a good opportunity, do not hesitate to contact me.
            </p>
            <a href="#contact">
              <motion.button
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.button>
            </a>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {[
                "HTML", "CSS", "Bootstrap", "TailwindCSS",
                "JavaScript", "React Js", "Next Js", "GitHub","Python (Cisco Certified)"
              ].map((skill) => (
                <motion.span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md text-sm font-medium"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
