"use client"
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section id="home" className="w-full px-4 py-10 md:py-20 text-center bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          {/* Replace with your image path */}
          <Image 
            src={"/web.avif"} 
            alt="Hero Image" 
            width={400} 
            height={400} 
            className="mx-auto rounded-full object-cover "
          />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          HEY, I am OLUSANMI-SOGBEIN VICTOR
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          A Frontend focused Web Developer building the Frontend of Websites and Web Applications <br />
          that leads to the success of the overall product
        </p>
      </div>
    </section>
  );
};

export default Hero;
