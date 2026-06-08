/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import HiringProcess from '../components/HiringProcess'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
import aboutImage from '../assets/About.png' // uploaded image

const Home = () => {
  return (
    <>
    <Hero /> 
    <Partners
  imageSrc={aboutImage}
  title="Your Trusted Recruitment &"
  highlightText="Staffing Partner"
  descriptionLines={[
    "First Soft Systems helps businesses find the right people for the right roles. With a strong recruitment process, industry understanding, and access to skilled talent, we support companies in building efficient and reliable teams.",
    "We work with businesses across IT, Healthcare, Banking, Manufacturing, Retail, Pharma, Engineering, and more."
  ]}
  buttonText="View More"
  buttonLink="/about"
/>
    <Services />
    <WhyChooseUs />
    <HiringProcess />
    <Testimonials />
    <Blog />
    </>
  )
}

export default Home
