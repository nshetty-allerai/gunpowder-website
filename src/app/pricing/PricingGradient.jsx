"use client"
import ScheduleCallModal from '@/components/common/ScheduleCallModal'
import React, { useState } from 'react'

const PricingGradient = () => {
    const [showModal ,setShowModal]=useState(false)
    return (
        <>
        <section className='max-w-[1440px] mx-auto md:mt-[90px] lg:mt-[130px] mb-[90px] lg:mb-[115px]'>
            <div style={{ background: 'linear-gradient(90.00deg, rgb(255, 0, 115),rgb(132, 0, 255) 100%)' }} className=' lg:py-[52px] lg:px-[52px] py-[92px] md:px-[40px] rounded-3xl relative md:mx-8 mx-6 px-6'>
                <div className='relative z-10'>
                    <h2 className='font-afacad text-center font-bold  lg:text-5xl md:text-3xl text-2xl '>Not sure if our subscription is right for you?  Got a project you would like to discuss?</h2>
                    <div className='flex justify-center'>
                        <button onClick={()=>setShowModal(true)} className='flex items-center gap-2 bg-white border-brand border text-brand cursor-pointer transition-all duration-300 w-fit px-6 py-2 md:px-6 md:py-[12px] rounded-[30px] lg:mt-14 md:mt-10 mt-6 relative'>
                            <span className='text-base font-bold'>Let&apos;s Talk</span>
                        </button>
                    </div>
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