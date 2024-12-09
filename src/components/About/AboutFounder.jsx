import React from 'react'
import {Founder, FounderImage } from '@/utils/constants/constant'
import Image from 'next/image'

const AboutFounder = () => {
  return (
    <section className='max-w-[1440px] mx-auto relative z-10 bg-black pt-1'>
        <div className='w-full lg:py-[119px] md:py-[60px] py-8'>
            <div className='border flex md:flex-row lg:gap-12 md:gap-6 gap-7 flex-col border-brand lg:p-[60px]  md:p-6 p-6 rounded-[36px] lg:mx-[60px] md:mx-8 mx-6'>
                <div id="founder-image" className='md:w-[38%] w-full flex justify-center items-start'>
                    <Image 
                        // src={Founder}
                        src={FounderImage}
                        className="lg:w-[432px] md:w-[258px] w-[323px]"
                        alt=""
                    />
                </div>
                <div className='md:w-[62%] w-auto font-medium lg:text-xl text-base p-4 my-auto'>
                    <p className=''>At <span className='text-brand'>Gunpowder Innovations</span>, we&apos;re a UK-based digital agency of creators, designers, developers, and strategists focused on building impactful digital solutions. We partner with clients across industries to create apps, websites, and digital experiences that combine stunning design with powerful functionality. Our mission is to bring ideas to life with integrity, creativity, and a commitment to satisfaction.</p>
                    <p className='mt-10'>Our team, led by a <span className='text-brand'>founder with 12+ years as a CTO</span> in global fintech and a <span className='text-brand'>co-founder with experience across fintech</span>, property, and technology ventures, brings extensive industry knowledge to every project. We excel in designing and developing visually engaging and functional digital products, supported by a digital marketing team driving meaningful results through strategic marketing and analytics.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutFounder