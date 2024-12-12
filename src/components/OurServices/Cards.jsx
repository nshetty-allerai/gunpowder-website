import React from 'react'
import { DesignCard, DigitalMarketing, MobileAppDevlopment, DevlopmentCard } from '@/utils/constants/constant'
import Image from 'next/image'
import Button from '../common/Button'
const Cards = () => {
  return (
    <section className='max-w-[1440px] mx-auto md:mt-[167px] mt-16'>
      {/* card 1 */}
      <div className='flex flex-col lg:flex-row lg:gap-20 md:gap-16 gap-10 bg-[#01106266] lg:px-14 lg:py-28 md:px-12 md:py-12 px-7 py-7'>
        <div className='lg:w-[65%]'>
          <h4 className='font-bold text-[56px] leading-[74px] font-afacad'><span className='text-[#005BAA] '>Design </span>Services</h4>
          <div className='flex flex-wrap  items-center gap-3 my-5'>
            <span className='bg-[#010B40] py-2 px-3 rounded-3xl font-semibold'>UX UI Design</span>
            <span className='bg-[#010B40] py-2 px-3 rounded-3xl font-semibold'>User Interface Design</span>
            <span className='bg-[#010B40] py-2 px-3 rounded-3xl font-semibold'>Communication Design</span>
            <span className='bg-[#010B40] py-2 px-3 rounded-3xl font-semibold'>Motion Design</span>
          </div>
          <p className='lg:text-2xl md:text-xl text-base font-medium'>
              Our design team blends creativity and strategy to elevate your brand. With expertise in both digital and print, we deliver visually stunning designs that align with your goals, creating meaningful experiences for your audience.
          </p>
          {/* <button className='flex items-center gap-2 bg-[#FF0073] cursor-pointer hover:bg-hover-gradient transition-all duration-300 text-white w-fit px-6 py-3 md:px-6 md:py-[12px] rounded-[30px] lg:mt-14 md:mt-10 mt-4 relative'>
            <span className='text-base font-bold'>Let&apos;s Talk</span>
          </button> */}
          <Button>Let&apos;s Talk</Button>
        </div>
        <div className='flex md:justify-start justify-center lg:w-[35%]'>
          <Image
            src={DesignCard}
            alt='design card'
            className='md:w-[432px] w-[376px]'
          />
        </div>
      </div>
      {/* card 2 */}
      <div className='flex flex-col-reverse lg:flex-row lg:gap-20 md:gap-16 gap-10 bg-[#53016266] lg:px-14 lg:py-28 md:px-12 md:py-12 px-7 py-7'>
        <div className='flex md:justify-start justify-center lg:w-[35%]'>
          <Image
            src={DevlopmentCard}
            alt='design card'
            className='md:w-[432px] w-[376px]'
          />
        </div>
        <div className='lg:w-[65%]'>
          <h4 className='font-bold text-[56px] leading-[74px] font-afacad'><span className='text-[#AB00C7]'>Web </span>Design & Development</h4>
          <div className='flex flex-wrap  items-center gap-3 my-5'>
            <span className='bg-[#370141] py-2 px-3 rounded-3xl font-semibold'>Websites</span>
            <span className='bg-[#370141] py-2 px-3 rounded-3xl font-semibold'>E-commerce</span>
            <span className='bg-[#370141] py-2 px-3 rounded-3xl font-semibold'>Self Service Portal</span>
            <span className='bg-[#370141] py-2 px-3 rounded-3xl font-semibold'>Web apps</span>
            <span className='bg-[#370141] py-2 px-3 rounded-3xl font-semibold'>Healthcare</span>
            <span className='bg-[#370141] py-2 px-3 rounded-3xl font-semibold'>SaaS</span>
          </div>
          <p className='lg:text-2xl md:text-xl text-base font-medium'>
          Our web development service brings your ideas to life with custom, responsive, and scalable websites. We prioritize performance, security, and user experience to ensure your site looks great and functions seamlessly across all devices.
          </p>
          {/* <button className='flex items-center gap-2 bg-[#FF0073] cursor-pointer hover:bg-hover-gradient transition-all duration-300 text-white w-fit px-6 py-3 md:px-6 md:py-[12px] rounded-[30px] lg:mt-14 md:mt-10 mt-4 relative'>
            <span className='text-base font-bold'>Let&apos;s Talk</span>
          </button> */}
          <Button>Let&apos;s Talk</Button>
        </div>
      </div>
      {/* card 3 */}
      <div className='flex flex-col lg:flex-row lg:gap-20 md:gap-16 gap-10 bg-[#013F624A] lg:px-14 lg:py-28 md:px-12 md:py-12 px-7 py-7'>
        <div className='lg:w-[65%]'>
          <h4 className='font-bold text-[56px] leading-[74px] font-afacad'><span className='text-[#00AEE3] '>Mobile App </span> Design & Developement
          </h4>
          <div className='flex flex-wrap  items-center gap-3 my-5'>
            <span className='bg-[#012539] py-2 px-3 rounded-3xl font-semibold'>Healthcare</span>
            <span className='bg-[#012539] py-2 px-3 rounded-3xl font-semibold'>Fintech</span>
            <span className='bg-[#012539] py-2 px-3 rounded-3xl font-semibold'>Fitness</span>
            <span className='bg-[#012539] py-2 px-3 rounded-3xl font-semibold'>Retail</span>
          </div>
          <p className='lg:text-2xl md:text-xl text-base font-medium'>
            Our web development service brings your ideas to life with custom, responsive, and scalable websites. We focus on performance, security, and user experience to ensure your site not only looks great but also delivers seamless functionality across all devices.
          </p>
          {/* <button className='flex items-center gap-2 bg-[#FF0073] cursor-pointer hover:bg-hover-gradient transition-all duration-300 text-white w-fit px-6 py-3 md:px-6 md:py-[12px] rounded-[30px] lg:mt-14 md:mt-10 mt-4 relative'>
            <span className='text-base font-bold'>Let&apos;s Talk</span>
          </button> */}
          <Button>Let&apos;s Talk</Button>
        </div>
        <div className='flex md:justify-start justify-center lg:w-[35%]'>
          <Image
            src={MobileAppDevlopment}
            alt='design card'
            className='md:w-[432px] w-[376px]'
          />
        </div>
      </div>
      {/* card 4 */}
      <div className='flex flex-col-reverse lg:flex-row lg:gap-20 md:gap-16 gap-10 bg-[#0080AF3D] lg:px-14 lg:py-28 md:px-12 md:py-12 px-7 py-7'>
        <div className='flex md:justify-start justify-center lg:w-[35%]'>
          <Image
            src={DigitalMarketing}
            alt='design card'
            className='md:w-[432px] w-[376px]'
          />
        </div>
        <div className='lg:w-[65%]'>
        <button className='flex items-center font-semibold gap-2 cursor-pointer text-[#FF0073] w-fit px-3 bg-[#FF00733B] py-4 md:px-6 md:py-3 rounded-[30px] lg:mt-14 md:mt-10 mt-4 relative'>
              <span className='text-base font-bold'>Coming Soon</span>
          </button>
          <h4 className='font-bold text-[56px] leading-[74px] font-afacad'><span className='text-[#00B2EF] '>Digital</span> Marketing</h4>
          <div className='flex flex-wrap  items-center gap-3 my-5'>
            <span className='bg-[#003040] py-2 px-3 rounded-3xl font-semibold'>Social Media Marketing</span>
            <span className='bg-[#003040] py-2 px-3 rounded-3xl font-semibold'>SEO</span>
            <span className='bg-[#003040] py-2 px-3 rounded-3xl font-semibold'>Email Marketing</span>
            <span className='bg-[#003040] py-2 px-3 rounded-3xl font-semibold'>Brand Strategy</span>
          </div>
          <p className='lg:text-2xl md:text-xl text-base font-medium'>
          Our web development service turns your ideas into custom, responsive, and scalable websites. We prioritize performance, security, and user experience to ensure your site looks great and functions seamlessly on all devices.
          </p>
          <button className='flex items-center gap-2 border border-[#FF0073] text-[#FF0073] cursor-pointe w-fit px-3 py-4 md:px-6 md:py-[16px] rounded-[30px] lg:mt-14 md:mt-10 mt-4 relative'>
            <span className='text-base font-bold'>Coming Soon</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cards