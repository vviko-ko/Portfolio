
import React from 'react'
import Navbar from "@/Components/navbar";
import Hero from '@/Components/Hero';
import AboutSection from '@/Components/Aboutsection';
import ContactSection from '@/Components/Contactsection';
import Footer from '@/Components/Footer';
import ProjectsSection from '@/Components/Project';
import DownloadCVSection from '@/Components/DownloadCVSection';

const Page = () => {
  return (
    <div className='my-4'>
    <Navbar/>
    <Hero/>
    <AboutSection/>
    <DownloadCVSection/>
    <ProjectsSection/>
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default Page