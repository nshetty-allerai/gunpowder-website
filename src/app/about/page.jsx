import AboutFounder from '@/components/About/AboutFounder'
import Banner from '@/components/About/Banner'
import HeroSection from '@/components/About/HeroSection'
import Team from '@/components/About/Team'
import TeamMember from '@/components/About/TeamMember'
import Values from '@/components/About/Values'
import Gradient from '@/components/OurServices/Gradient'
import { Founder } from '@/utils/constants/constant'
import React from 'react'


export const metadata = {
  title: "Elevate Your Business with Innovative Tech Solutions | Gunpowder Innovations",
  description: "Browse the story behind Gunpowder Innovations, our core values, and how we strive to provide cutting-edge solutions to businesses across various industries.",
  keywords : ["Ui and Ux Design Services", "Software Development Services","Custom App Development UK", "Website Maintenance Services", "Professional Web Design Service", "Web App Development Services", "Custom web development Services", "Digital Wealth Management Solutions", "Advanced Technology Solutions UK"],
  metadataBase: new URL("https://www.gunpowderinnovations.com"),
  alternates: {
    canonical: "/about",
  },
};

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