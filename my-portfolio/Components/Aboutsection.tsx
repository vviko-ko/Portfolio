"use client"
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="w-full px-4 py-16 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg text-center mb-10">
          Here you will find more information about me, what I do, and my current skills
          mostly in terms of programming and technology.
        </p>
        <div className="grid md:grid-cols-2 gap-10 text-center">
          <div>
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
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Hire Me
              </button>
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {["HTML", "CSS","Bootstrap","TailwindCSS", "JavaScript","React Js","Next Js", "GitHub"].map((skill) => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
