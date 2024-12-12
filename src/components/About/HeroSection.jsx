import React from 'react'
import { HeroServices, Arrow, BackgroundServices, ScrollDownArrow,AboutUsHeroSection,AboutHeroLeftSide,AboutHeroRightSide, AboutLeftMobile, AboutRightMobile, AboutLeftTab, AboutRightTab } from '@/utils/constants/constant'
import Image from 'next/image'
import AboutHero from '@/utils/Icons/AboutHero'
//  


const HeroSection = () => {
    return (
        <section className='max-w-[1440px] mx-auto relative '>
            <div className='flex items-center justify-center md:gap-14 gap-10 md:flex-row flex-col-reverse py-10 lg:py-[100px] lg:mx-10 md:mx-6 mx-4 relative z-10'>
                <div className='lg:max-w-[854px] md:max-w-[416px] w-full px-4'>
                    <h5 className='lg:text-7xl md:text-[42px] md:leading-[52px] text-3xl font-bold font-afacad'>We&apos;re a <span className='text-brand'>creative</span> team</h5>
                    <h5 className='lg:text-7xl md:text-[42px] md:leading-[52px] text-3xl font-bold font-afacad'>based in <span className='text-brand'>London</span></h5>
                    <p className='mt-4'>
                        We specialize in creating custom apps, websites, and brands that help businesses thrive in the digital world. Our team of innovative thinkers and tech experts brings your ideas to life with smart design and cutting-edge technology.
                    </p>
                    <div className='lg:hidden flex items-center gap-2 bg-[#FF0073] cursor-pointer hover:bg-hover-gradient transition-all duration-300  text-white w-fit px-6 py-3 md:px-6 md:py-[14px] rounded-[30px] lg:mt-8 md:mt-6 mt-4 relative'>
                        <span className='text-base font-bold'>Let&apos;s Talk</span>
                        <Image
                            src={Arrow}
                            alt='arrow'
                            className='w-[18px]'
                        />
                    </div>
                    {/* <div className='hidden lg:flex items-center gap-3 mt-8 '>
                        <Image
                        src={ScrollDownArrow}
                        className=''
                        alt='icon'
                        />
                        <span className='font-medium text-2xl'>Scroll Down</span>
                    </div> */}
                </div>
                <div className='flex justify-center mt-4 md:mt-0'>
                    <Image
                        src={AboutUsHeroSection}
                        className='lg:w-[432px] md:w-[224px] w-[315px]'
                        alt=''
                    />
                    {/* <AboutHero/> */}
                </div>
            </div>
            <div>
                <Image
                    src={BackgroundServices}
                    alt=''
                    className='hidden lg:block absolute bottom-0 w-full z-0'
                />
                {/* Tabs */}
                <div className='hidden md:block lg:hidden absolute w-full top-[-300px] left-0 z-0'>
                    <Image
                        src={AboutLeftTab}
                        alt=''
                        className='w-full'
                    />
                </div>
                <div className='hidden md:block lg:hidden absolute w-full top-[-200px] z-0'>
                    <Image
                        src={AboutRightTab}
                        alt=''
                        className='w-full'
                    />
                </div>
                {/* Mobile */}
                <div className='md:hidden absolute w-full top-[-150px] left-0 z-0'>
                    <Image
                        src={AboutLeftMobile}
                        alt=''
                        className='w-full'
                    />
                </div>
                <div className='md:hidden absolute w-full top-[-100px] z-0'>
                    <Image
                        src={AboutRightMobile}
                        alt=''
                        className='w-full'
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection