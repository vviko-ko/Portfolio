
import React from 'react'
import Navbar from "@/Components/navbar";
import Hero from '@/Components/Hero';
import AboutSection from '@/Components/Aboutsection';

const page = () => {
  return (
    <div className='my-4'>
    <Navbar/>
    <Hero/>
    <AboutSection/>
    </div>
  )
}

export default page