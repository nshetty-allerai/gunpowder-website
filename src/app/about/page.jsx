import AboutFounder from '@/components/About/AboutFounder'
import Banner from '@/components/About/Banner'
import HeroSection from '@/components/About/HeroSection'
import Team from '@/components/About/Team'
import TeamMember from '@/components/About/TeamMember'
import Values from '@/components/About/Values'
import Gradient from '@/components/OurServices/Gradient'
import { Founder } from '@/utils/constants/constant'
import React from 'react'

const About = () => {
  return (
    <div>
      <HeroSection/>
      <AboutFounder/>
      <Values/>
      <Team/>
      {/* <Banner/> */}
      <TeamMember/>
      <Gradient/>

    </div>
  )
}

export default About