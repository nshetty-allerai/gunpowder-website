import React from 'react'
import { Arrow, HeroSectionImage,HomeLeftGradient,HomeRightGradient, BookedText, ShadowHero, BackgroundServices, AboutLeftTab, AboutRightTab, AboutLeftMobile, AboutRightMobile, HomeDesktopGradient, HomeTabGradient, HomeMobileGradient } from '@/utils/constants/constant'
import Image from 'next/image'
import Button from '../common/Button'

const HeroSection = () => {
  return (
    <div className='max-w-[1440px] mx-auto relative font-urbanist '>
      <div className='px-4 lg:px-8 md:mt-[160px] mt-[110px] relative z-10'>
        <h3 className='text-center lg:text-[96px] lg:leading-[110px] md:text-[70px] md:leading-[72px] text-[48px] leading-[62px] font-bold font-afacad '>Analyse.  Create. <br className='lg:hidden'/> <span className='text-[#FF0073]'>Innovate.</span> </h3>
        {/* <h3 className='text-center lg:text-[96px] lg:leading-[110px] md:text-[70px] md:leading-[72px] text-[48px] leading-[62px] font-bold font-afacad md:hidden'>We <span className='text-[#FF0073]'>make</span> apps, websites & brands</h3> */}
        <p className='text-center lg:text-lg text-base font-medium lg:mt-8 md:mt-6 mt-4 font-urbanist lg:max-w-[1100px] md:max-w-[674px]  mx-auto'>We create custom apps, websites, and branding to fuel your business growth. Our experts turn ideas into reality with smart design and advanced technology, helping your business thrive online.</p>
        <div className='flex justify-center'>
          <div className='relative'>
            <Button>Let&apos;s Talk</Button>
            <div className='absolute md:right-[-250px] bottom-0 right-[-140px]'>
              <Image
                src={BookedText}
                alt='arrow'
                className='w-[127px] md:w-[213px] lg:w-[213px]'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='lg:mt-[80px] md:mt-[50px] mt-[50px] relative z-10'>
        <Image
          src={HeroSectionImage}
          alt='hero background'
          className='max-w-[1242px] mx-auto w-full'
        />
      </div>
      <div>
        {/* <Image
          src={BackgroundServices}
          alt=''
          className='hidden md:block lg:hidden absolute bottom-0 w-full z-0'
        /> */}
        {/* Tabs */}
        <div className='hidden md:block lg:hidden absolute w-full top-[-300px] left-0 z-0'>
          <Image
            src={AboutLeftTab}
            alt=''
            className='w-full'
          />
        </div>
        <div className='hidden md:block lg:hidden absolute w-full top-[-300px] z-0'>
          <Image
            src={AboutRightTab}
            alt=''
            className='w-full'
          />
        </div>
        {/* Mobile */}
        <div className='md:hidden absolute w-full top-[-200px] left-0 z-0'>
          <Image
            src={AboutLeftMobile}
            alt=''
            className='w-full'
          />
        </div>
        <div className='md:hidden absolute w-full top-[-200px] z-0'>
          <Image
            src={AboutRightMobile}
            alt=''
            className='w-full'
          />
        </div>

        {/* HomeDesktopGradient,HomeTabGradient,HomeMobileGradient */}

        {/* desktop */}
        {/* <div className='md:block hidden absolute bottom-[-200px] w-full'>
          <Image
            src={HomeDesktopGradient}
            className='w-full'
            alt='desktop'
          />
        </div> */}

        {/* <div className='hidden md:block lg:hidden absolute bottom-[-100px] w-full'>
          <Image
            src={HomeTabGradient}
            className='w-full'
            alt='desktop'
          />
        </div>
        <div className='md:hidden absolute bottom-0 w-full'>
          <Image
            src={HomeDesktopGradient}
            className='w-full'
            alt='desktop'
          />
        </div> */}

          {/* src={HomeLeftGradient,HomeRightGradient} */}
        <div className='absolute w-full bottom-0 left-0'>
          <Image
              src={HomeLeftGradient}
              className='w-full'
              alt='gradient'
          />
        </div>
        <div className='absolute w-full bottom-0 right-0'>
          <Image
              src={HomeRightGradient}
              className='w-full'
              alt='gradient'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection