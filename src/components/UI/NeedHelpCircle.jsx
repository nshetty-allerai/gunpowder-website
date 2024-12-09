import React from 'react'
import Image from 'next/image'
import { Arrow, Circles } from '@/utils/constants/constant'
import Button from '../common/Button'
const NeedHelpCircle = () => {
    return (
        <section className='max-w-[1440px] mx-auto md:mt-40 md:mb-40 md:py-20 mt-6 mb-6 py-6'>
            <div className='relative h-[423px] z-10'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 lg:w-[627px] md:w-[613px] w-[365px]'>
                    <Image
                        src={Circles}
                        alt="rounder circles"
                        className="lg:w-[627px] md:w-[613px] w-[365px]"
                    />
                </div>
                <div className='flex flex-col justify-center items-center h-full relative z-10'>
                    <p className='lg:text-5xl md:text-4xl text-xl font-afacad'>Need help with a project?</p>
                    <h6 className='lg:text-[128px] lg:leading-[140px] md:text-[96px] md:leading-[110px] text-5xl font-bold text-[#FF0073] my-4 font-afacad'>Let&apos;s Talk</h6>
                    {/* <button className='flex items-center gap-1 px-6 py-3 font-bold bg-[#FF0073] cursor-pointer hover:bg-hover-gradient transition-all duration-300 rounded-[30px]'>chat with us
                        <Image
                            src={Arrow}
                            alt='arrow'
                            className='w-[18px]'
                        />
                    </button> */}
                     <Button>Chat With Us</Button>
                </div>
            </div>
        </section>
    )
}

export default NeedHelpCircle