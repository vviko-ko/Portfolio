'use client'
import React from 'react'

const navbar = () => {
  return (
    <div>
        <nav className="bg-[#fff] p-4">
            <div className="container mx-auto flex justify-between items-center">
            <div className=" text-lg font-bold">Feyi</div>
            <ul className="flex space-x-4">
                <li><a href="#about" className=" hover:text-gray-400">About</a></li>
                <li><a href="#projects" className=" hover:text-gray-400">Projects</a></li>
                <li><a href="#contact" className=" hover:text-gray-400">Contact</a></li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default navbar