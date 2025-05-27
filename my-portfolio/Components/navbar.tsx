"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {motion} from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 "
    >
    <nav className=" sticky top-0 z-50 bg-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold"><span className='text-blue-600'> CodewithGhostMan </span></div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#project" className="hover:text-gray-400">Project</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-3 space-y-4">
          <li><a href="#" className="block hover:text-gray-400">Home</a></li>
          <li><a href="#" className="block hover:text-gray-400">About</a></li>
          <li><a href="#" className="block hover:text-gray-400">Services</a></li>
          <li><a href="#" className="block hover:text-gray-400">Contact</a></li>
        </ul>
      )}
    </nav>
    </motion.nav>
  );
};

export default Navbar;
