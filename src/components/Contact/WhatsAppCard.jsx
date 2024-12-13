"use client"
import { EmailIcon, WhatsAppIcon } from '@/utils/constants/constant'
import Image from 'next/image'
import React from 'react';

export const WhatsAppCard = () => {
    
    return (
        <>
            <a target='_blank' href="https://api.whatsapp.com/send/?phone=+917259191786&text=Hello%2C+thank+you+for+reaching+out.+Please+let+us+know+how+we+can+assist+you.&type=phone_number&app_absent=0"  className='cursor-pointer flex items-center gap-4 border border-brand md:max-w-[433px] max-w-full md:rounded-[37px] rounded-xl bg-[#FF00732E] md:p-4 p-3 lg:mt-8 md:mt-7 mt-6'>
                <div className='md:w-[83px] w-12'>
                    <Image
                        src={WhatsAppIcon}
                        alt=""
                        className="w-full"
                    />
                </div>
                <div>
                    <h6 className='font-medium md:text-xl text-base'>Chat with us</h6>
                    <p className='font-medium text-brand md:text-lg text-sm mt-1.5'>+91 7259191786</p>
                </div>
            </a>
        </>
    )
}
