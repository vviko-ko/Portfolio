
import React from 'react'
import Navbar from "@/Components/navbar";
import Hero from '@/Components/Hero';
import AboutSection from '@/Components/Aboutsection';
import ContactSection from '@/Components/Contactsection';
import Footer from '@/Components/Footer';

const Page = () => {
  return (
    <div className='my-4'>
    <Navbar/>
    <Hero/>
    <AboutSection/>
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default Page