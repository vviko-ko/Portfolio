"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="w-full px-4 py-10 md:py-20 text-center bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src={"/web.avif"} 
            alt="Hero Image" 
            width={350} 
            height={350} 
            className="mx-auto rounded-full object-cover"
          />
        </motion.div>

        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          HEY, I am OLUSANMI-SOGBEIN VICTOR
        </motion.h1>

        <motion.p
          className=" md:text-xl text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          A Frontend focused Web Developer building the Frontend of Websites and Web Applications <br />
          that leads to the success of the overall product
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
