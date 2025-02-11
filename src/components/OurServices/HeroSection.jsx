import React from 'react'
import { HeroServices, Arrow, BackgroundServices, AboutLeftTab, AboutRightTab, AboutLeftMobile, AboutRightMobile } from '@/utils/constants/constant'
import Image from 'next/image'
import SevicesHero from '@/utils/Icons/SevicesHero'
import HoverImage from '@/utils/Icons/SevicesHero'
import Button from '../common/Button'

const HeroSection = () => {
    return (
        <section className='max-w-[1440px] mx-auto relative'>
            <div className='flex items-center justify-center md:gap-14 gap-10 md:flex-row flex-col-reverse py-10 lg:py-[150px] lg:mx-10 md:mx-6 mx-4 relative z-10'>
                <div className='lg:max-w-[854px] md:max-w-[416px] w-full px-4'>
                    {/* <h5 className='lg:text-7xl md:text-5xl text-3xl font-bold font-afacad'>If you can <span className='text-brand'>dream</span> it</h5>
                    <h5 className='lg:text-7xl md:text-5xl text-3xl font-bold font-afacad'>we can <span className='text-brand'>do</span> it</h5> */}
                    <h1 className='lg:text-7xl md:text-5xl text-3xl font-bold font-afacad'>If you can <span className='text-brand'>dream</span> it
                        <br />
                        we can <span className='text-brand'>do</span> it
                    </h1>
                    <h2 className='mt-4'>
                        We specialise in creating custom apps, websites, and brands that help businesses succeed in the digital world. Our team of innovative thinkers and tech experts brings your ideas to life with smart design and advanced technology.
                    </h2>
                    {/* <div className='flex items-center gap-2 bg-[#FF0073] cursor-pointer hover:bg-hover-gradient transition-all duration-300  text-white w-fit px-6 py-3 md:px-6 md:py-[14px] rounded-[30px] lg:mt-8 md:mt-6 mt-4 relative'>
                        <span className='text-base font-bold'>Let&apos;s Talk</span>
                        <Image
                            src={Arrow}
                            alt='arrow'
                            className='w-[18px]'
                        />
                    </div> */}
                    <Button>Let&apos;s Talk</Button>
                </div>
                <div className='flex justify-center mt-4 md:mt-0'>
                    <Image
                        src={HeroServices}
                        className='lg:w-[432px] md:w-[224px] w-[315px]'
                        alt=''
                    />
                    {/* <HoverImage/> */}
                </div>
            </div>
            {/* <div>
                <Image
                    src={BackgroundServices}
                    alt=''
                    className='absolute bottom-0 w-full z-0'
                />
            </div> */}
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