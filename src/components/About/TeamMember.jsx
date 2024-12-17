import { Sanket } from '@/utils/constants/constant'
import Image from 'next/image'
import React from 'react'

const TeamMember = () => {
    return (
        <section className='max-w-[1440px] mx-auto lg:mb-[90px] mb-[70px] '>
            <div>
                <h6 className='font-bold md:text-[40px] text-center md:leading-[46px] text-3xl font-afacad'>What our <span className='text-brand'>team members</span> say</h6>
                <p className='md:text-lg text-base text-center mt-4'>Our team is skilled in both design and programming, using the most <br className='hidden lg:block' /> popular tools and technologies.</p>
            </div>
            <div className='flex flex-col-reverse lg:flex-row border border-brand rounded-[37px] md:p-12 py-8 px-5 lg:mx-[60px] md:mx-[40px] mx-[22px] gap-[50px] mt-[54px]'>
                <div className='flex justify-center lg:w-[30%] w-full'>
                    <div className='flex justify-center flex-col items-center'>
                       <div id="team-member">
                        <Image
                                src={Sanket}
                                className="lg:w-[428px] md:w-[188px] w-[140px] h-auto object-contain"
                                alt=""
                            />
                       </div>
                        <div className='mt-8 lg:hidden'>
                        <p className='font-semibold text-lg text-center'>— Sanket Atkari</p>
                        <p className='text-base mt-1 text-center'>Product Designer , Gunpowder Innovations</p>
                    </div>
                    </div>
                </div>
                <div className='lg:w-[70%] w-full'>
                    <p className='lg:text-[28px] lg:leading-[44px] md:text-2xl text-xl text-center lg:text-start'>
                        As a Product Designer, I ensure every design reflects the <span className='text-brand'>high-quality services</span> we offer. Our team is dedicated to creating user-focused solution that exceed client expectations and drive results.
                    </p>
                    <div className='mt-8 hidden lg:block'>
                        <p className='font-semibold text-lg'>— Sanket Atkari</p>
                        <p className='text-base mt-1'>Product Designer , Gunpowder Innovations</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamMember