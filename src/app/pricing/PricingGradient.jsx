"use client"
import ScheduleCallModal from '@/components/common/ScheduleCallModal'
import { blackGradient, blackGradientMobile } from '@/utils/constants/constant'
import Image from 'next/image'
import React, { useState } from 'react'

const PricingGradient = ({title,description}) => {
    const [showModal ,setShowModal]=useState(false)
    return (
        <>
        <section className='max-w-[1440px] mx-auto'>
            <div style={{ background: 'linear-gradient(90.00deg, rgb(255, 0, 115),rgb(132, 0, 255) 100%)' }} className=' md:py-[88px] py-[127px] md:px-[40px] relative px-6'>
                <div className='relative z-10'>
                    <h2 className='font-afacad text-center font-bold  lg:text-8xl md:text-[56px] md:leading-[74px] text-5xl lg:max-w-[880px] md:max-w-[600px] mx-auto'>{title}</h2>
                    <p className='text-center max-w-[600px] mx-auto md:mt-10 mt-5'>{description}</p>
                    <div className='flex justify-center'>
                        <button onClick={()=>setShowModal(true)} className='flex items-center gap-2  bg-brand text-white cursor-pointer transition-all duration-300 w-fit px-6 py-2 md:px-6 md:py-[12px] rounded-[30px] lg:mt-14 md:mt-10 mt-6 relative'>
                            <span className='text-base font-bold'>Book Call</span>
                        </button>
                    </div>
                </div>
                <div>
                    <Image
                        src={blackGradient}
                        className="w-full absolute bottom-0 left-0 hidden md:block"
                        alt=""
                    />
                    <Image
                        src={blackGradientMobile}
                        className="w-full absolute bottom-0 left-0 md:hidden"
                        alt=""
                    />
                </div>
            </div>
        </section>
        <ScheduleCallModal
            open={showModal}
            close={()=>setShowModal(false)}
        />
        </>
    )
}

export default PricingGradient