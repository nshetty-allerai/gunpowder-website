import Cards from '@/components/OurServices/Cards'
import Gradient from '@/components/OurServices/Gradient'
import HeroSection from '@/components/OurServices/HeroSection'
import Technology from '@/components/OurServices/Technology'
import WeWorkedWith from '@/components/OurServices/WeWorkedWith'
import React from 'react'

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