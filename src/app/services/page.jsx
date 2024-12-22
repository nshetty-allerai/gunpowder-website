import Cards from '@/components/OurServices/Cards'
import Gradient from '@/components/OurServices/Gradient'
import HeroSection from '@/components/OurServices/HeroSection'
import Technology from '@/components/OurServices/Technology'
import WeWorkedWith from '@/components/OurServices/WeWorkedWith'
import React from 'react'


export const metadata = {
  title: "Web App Development Services UK | Gunpowder Innovations",
  description: "Gunpowder Digital provides professional web design, UI/UX services, custom app development, and advanced technology solutions for businesses in the UK.",
  keywords : ["Ui and Ux Design Services", "Software Development Services","Custom App Development UK", "Website Maintenance Services", "Professional Web Design Service", "Web App Development Services", "Custom web development Services", "Digital Wealth Management Solutions", "Advanced Technology Solutions UK"]
};
const services = () => {
  return (
    <div>
      <HeroSection/>
      <WeWorkedWith/>
      <Cards/>
      <Technology/>
      <Gradient/>
    </div>
  )
}

export default services