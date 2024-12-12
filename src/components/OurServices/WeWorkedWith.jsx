import React from 'react'
import { Rocket, Bulb, Building } from '@/utils/constants/constant'
import Image from 'next/image'

const CardData = [
  {
    icon: Rocket,
    title: 'Pre-seed & <br/> Seed Startups',
    description: 'Provide pitch deck frameworks, create bespoke pitch decks, research your concept or product market, conduct user interviews and/or build an MVP',
  },
  {
    icon: Bulb,
    title: 'Startups <br/> that Scale',
    description: 'From refining your pitches and MVP, to helping you find your product-market fit, building a team with the right skill set, and/or scale quickly without compromising quality.',
  },
  {
    icon: Building,
    title: 'Businesses that <br/> want to digitize',
    description: 'Redesign and modernize your platform or SaaS, while developing new internal tools for improved management.',
  }
]

const Card = ({icon ,title ,description}) => {
  return (
    <div>
      <div>
        <Image
          src={icon}
          className=""
          alt=""
        />
      </div>
      <h5 dangerouslySetInnerHTML={{ __html: title }} className='mt-6 lg:text-4xl md:text-[32px] md:leading-[46px] text-[28px] leading-[40px] font-semibold font-afacad'></h5>
      <p className='mt-[18px] text-lg'>{description}</p>
    </div>
  )
}
const WeWorkedWith = () => {


  return (
    <section className='max-w-[1320px] mx-auto lg:pt-16 pt-9 relative bg-black'>
      <div className='mx-8'>
        <div className='lg:max-w-[913px] max-w-[613px] mx-auto'>
          <h5 className='md:text-[40px] leading-[46px] font-bold text-[30px] text-center font-afacad'>We work with</h5>
          <h5 className='md:text-lg text-base text-center mt-4'>We offer end-to-end services, from strategy and design to development and marketing, focused on bringing your vision to life and delivering impactful results.</h5>
        </div>
        <div className='border border-[#FF0073] bg-[#2E0015A8] rounder-[14px] grid lg:grid-cols-3 grid-cols-1 rounded-[14px] lg:gap-16 gap-11 p-10 md:max-w-[500px] lg:max-w-[1320px] w-full mx-auto lg:mt-9 mt-10'>
          {CardData.map((item, index) => (
            <div key={index}>
              <Card
                icon={item?.icon}
                title={item?.title}
                description={item?.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeWorkedWith