"use client"
// import Image from "next/image";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600  text-center py-10">
      <h3 className="text-xl text-white  font-semibold mb-2">OLUSANMI-SOGBEIN VICTOR</h3>
      <p className="text-white max-w-xl mx-auto mb-6">
        A Frontend focused Web Developer building the Frontend of Websites and Web Applications
        that leads to the success of the overall product.
      </p>
      {/* <div className="mb-4 text-white">&copy; CodeWithGhostMan</div> */}
      <div className="flex justify-center gap-6">
             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-xl text-white hover:text-blue-500" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-xl text-white hover:text-blue-400" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-xl text-white hover:text-pink-500" />
        </a>
      </div>
      <p className="mt-4 text-sm text-white">&copy; {new Date().getFullYear()} Codewithghostman
        <br /> All rights reserved</p>
    </footer>
  );
};

export default Footer;
