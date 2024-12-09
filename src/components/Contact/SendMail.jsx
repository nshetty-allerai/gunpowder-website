"use client"
import { EmailIcon } from '@/utils/constants/constant'
import Image from 'next/image'
import React from 'react';

export const SendMail = () => {
    
    return (
        <>
            <a href="mailto:reach@gunpowderinnovations.com?subject=0ffer Inquiry&cc=correspondence@allerai.co.uk&bcc=correspondence@allerai.co.uk&body-Hi I would like to learn more about the offer..."  className='cursor-pointer flex items-center gap-4 border border-brand md:max-w-[433px] max-w-full md:rounded-[37px] rounded-xl bg-[#FF00732E] md:p-4 p-3 lg:mt-8 md:mt-7 mt-6'>
                <div className='md:w-[83px] w-12'>
                    <Image
                        src={EmailIcon}
                        alt=""
                        className="w-full"
                    />
                </div>
                <div>
                    <h6 className='font-medium md:text-xl text-base'>Email</h6>
                    <p className='font-medium text-brand md:text-lg text-sm mt-1.5'>reach@gunpowderinnovations.com</p>
                </div>
            </a>
        </>
    )
}
