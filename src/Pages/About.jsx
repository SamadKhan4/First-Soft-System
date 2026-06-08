/* eslint-disable no-unused-vars */
import React from 'react'
import Partners from '../components/Partners'
import SubHero from '../components/SubHero'
import aboutImage from '../assets/About.png' // uploaded image
import WhyChooseUs from '../components/WhyChooseUs'
import HiringProcess from '../components/HiringProcess'
import Testimonials from '../components/Testimonials'
const About = () => {
  return (
    <>
    <SubHero heading="About Us" />

    <Partners
    imageSrc={aboutImage}
    title="Your Trusted Recruitment &"
    highlightText="Staffing Partner"
    descriptionLines={[
        "First Soft Systems is a leading staffing and recruitment solutions provider dedicated to connecting businesses with skilled and qualified professionals. We help organizations streamline their hiring processes and build high-performing teams that drive long-term success.",
        "With a strong understanding of industry requirements and workforce challenges, we deliver customized recruitment solutions tailored to the unique needs of each client. Whether it is permanent hiring, contract staffing, or recruitment process outsourcing, our goal is to provide the right talent at the right time." ,
        "We serve businesses across multiple industries, helping them overcome talent shortages and achieve their workforce objectives with confidence."
    ]}
  
    />  
    <WhyChooseUs />
    <HiringProcess />
    <Testimonials />
    </>
  )
}

export default About
