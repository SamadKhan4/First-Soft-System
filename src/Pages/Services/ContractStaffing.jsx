/* eslint-disable no-unused-vars */
import React from 'react'
import SHero from "../../components/Services/SHero";
import heroImg from "../../assets/Services/h2.png";
import SubHero from '../../components/SubHero';
import WeOffer from '../../components/Services/WeOffer';
import HiringProcess from '../../components/HiringProcess';
import WhyChooseUs from '../../components/WhyChooseUs';
const ContractStaffing = () => {
  return (
    <>
        <SubHero heading="Contract Staffing" />
        <SHero
        imageSrc={heroImg}
        heading="Hire Skilled Professionals"
        highlightText="on Demand"
        descriptionLines={[
            "In today’s fast-paced business environment, organizations need flexibility to manage projects, seasonal demands, or temporary workforce requirements. First Soft Systems provides contract staffing solutions that allow businesses to hire skilled professionals for defined periods without long-term commitments.",
            "Our team ensures that you get qualified candidates quickly, efficiently, and with minimal administrative burden, helping your business maintain productivity and meet project deadlines."
        ]}
        />
        <WeOffer />
        <HiringProcess />
        <WhyChooseUs />
    </>
  )
}

export default ContractStaffing