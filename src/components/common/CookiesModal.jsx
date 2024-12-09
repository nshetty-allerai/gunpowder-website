import { Close, Cookies, CookiesIcon } from '@/utils/constants/constant'
import Image from 'next/image'
import React from 'react'

const CookiesModal = ({setShowCookies}) => {
    return (
        <div className='fixed bottom-[20px] w-full px-8 z-30'>
            <div className='bg-[#11022D] rounded-[20px] relative lg:flex-row flex-col flex lg:justify-between lg:items-center md:p-12 p-5'>
                <div className='flex md:items-center flex-col md:flex-row'>
                    <div className='w-[15%]'>
                        <Image
                            src={Cookies}
                            className="w-[56px] lg:w-[68px]"
                            alt="cookies"
                        />
                    </div>
                    <div className='w-[85%] max-w-[550px] lg:text-lg text-base font-medium mt-4 md:mt-0'>Our website use cookies. By continuing navigating, we assume your permission to deploy cookies as detailed in our Privacy Policy.</div>
                </div>
                <div className='flex items-center gap-4 lg:mt-0 md:mt-10 mt-5'>
                    <div className=''>
                        <button onClick={()=>setShowCookies(false)} className='flex items-center gap-2 bg-brand px-4 py-2 rounded-[56px]'>
                            <Image
                                src={CookiesIcon}
                                className='w-[14px]'
                                alt='CookiesIcon'
                            />
                            <span>Accept cookies</span>
                        </button>
                    </div>
                    <div className='lg:me-6'>
                        <button onClick={()=>setShowCookies(false)} className='bg-white text-[#170F49] rounded-[56px] px-4 py-2'>Decline</button>
                    </div>
                    <div onClick={()=>setShowCookies(false)} className='hidden lg:block'>
                        <Image
                            src={Close}
                            className='cursor-pointer'
                            alt=''
                        />
                    </div>
                </div>
                <div onClick={()=>setShowCookies(false)} className='lg:hidden absolute top-7 right-7'>
                <Image
                    src={Close}
                    className='cursor-pointer'
                    alt=''
                />
                </div>
            </div>
        </div>
    )
}

export default CookiesModal