/* eslint-disable no-unused-vars */
import React from 'react'
import SubHero from '../../components/SubHero'
import SHero from '../../components/Services/SHero'
import heroImg from "../../assets/Services/h3-4.png";
import WeOffer from '../../components/Services/WeOffer';
import HiringProcess from '../../components/HiringProcess';
import WhyChooseUs from '../../components/WhyChooseUs';
const DigitalHiring = () => {
  return (
    <>
    <SubHero heading="Digital Hiring" />
    <SHero
    imageSrc={heroImg}
         heading="Modern Recruitment for the,"
         highlightText="Digital Era"
         descriptionLines={[
            "In a fast-paced business environment, traditional recruitment methods often fall short. First Soft Systems offers Digital Hiring Solutions that combine technology, data-driven insights, and modern sourcing methods to help organizations hire smarter, faster, and more efficiently.",
            "Our digital hiring approach ensures access to top talent, seamless candidate experiences, and optimized recruitment processes that save time and resources while delivering high-quality hires."
        ]}
        />  
        <WeOffer/>
        <HiringProcess />
        <WhyChooseUs/> 
    </>
  )
}

export default DigitalHiring