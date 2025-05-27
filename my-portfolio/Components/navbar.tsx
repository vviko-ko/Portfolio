"use client"
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full px-4 py-4 bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-blue-600 cursor-pointer">CodeWithGhostMan</span>
        </Link>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#project" className="hover:text-blue-600">Project</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
