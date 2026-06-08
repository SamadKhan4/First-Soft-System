/* eslint-disable no-unused-vars */
import React from 'react'
import SHero from "../../components/Services/SHero";
import heroImg from "../../assets/Services/h1.png";
import SubHero from '../../components/SubHero';
import WeOffer from '../../components/Services/WeOffer';
import HiringProcess from '../../components/HiringProcess';
import WhyChooseUs from '../../components/WhyChooseUs';
const PermanentHiring = () => {
  return (
    <div>
    <SubHero heading="Permanent Hiring" />
    <SHero
    imageSrc={heroImg}
    heading="Build a Strong Workforce With"
    highlightText="the Right Talent"
    descriptionLines={[
        "Hiring the right employees is one of the most important factors in achieving business growth and stability. At First Soft Systems, we help organizations identify, attract, and recruit qualified professionals for permanent positions across various industries.",
        "Our recruitment specialists understand your business requirements, company culture, and role expectations to ensure you receive candidates who are not only skilled but also the right fit for your organization."
    ]}
    />
    <WeOffer />
    <HiringProcess />
    <WhyChooseUs />
    </div>
  )
}

export default PermanentHiring