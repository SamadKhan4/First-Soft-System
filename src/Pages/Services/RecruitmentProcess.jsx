/* eslint-disable no-unused-vars */
import React from 'react'
import SubHero from '../../components/SubHero'
import SHero from '../../components/Services/SHero'
import heroImg from "../../assets/Services/h3-4.png";
import WeOffer from '../../components/Services/WeOffer';
import HiringProcess from '../../components/HiringProcess';
import WhyChooseUs from '../../components/WhyChooseUs';
const RecruitmentProcess = () => {
  return (
    <>
     <SubHero heading="Recruitment Process Outsourcing" />
     <SHero 
     imageSrc={heroImg}
     heading="Efficient Recruitment,"
     highlightText="Delivered at Scale"
     descriptionLines={[
        "Finding the right talent can be challenging, time-consuming, and resource-intensive. First Soft Systems offers Recruitment Process Outsourcing (RPO) solutions that allow organizations to outsource their entire recruitment process or parts of it to our experienced team.",
        "Our RPO services help businesses improve hiring efficiency, access a larger talent pool, and ensure quality hires while reducing recruitment costs. We act as an extension of your HR team, managing every aspect of hiring from sourcing to onboarding."
    ]}
    />   
    <WeOffer />
    <HiringProcess />
    <WhyChooseUs />
    </>
  )
}

export default RecruitmentProcess