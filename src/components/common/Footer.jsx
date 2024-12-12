import React from 'react'
import { Logo} from '@/utils/constants/constant'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer id="footer" className='bg-[#191919] relative z-30'>
            <div className='max-w-[1440px] mx-auto py-10 px-4 lg:px-8 font-semibold text-base'>
                <div className='flex justify-center '>
                    <Image
                        src={Logo}
                        alt="Picture of the author"
                        className='w-[177px]'
                    />
                </div>
                {/* <div className='grid md:grid-cols-6 grid-cols-3 mt-8'> */}
                <div className=' mt-8 mx-4 flex md:flex-row flex-col justify-center md:gap-8 gap-4'>
                    <div className='flex justify-center items-center gap-8'>
                        <Link className='text-center mt-4 md:mt-0' href='/'>Home</Link>
                        <Link className='text-center mt-4 md:mt-0' href='/services'>Our Services</Link>
                        <Link className='text-center mt-4 md:mt-0' href='/about'>About Us</Link>
                    </div>
                    <div className='flex justify-center items-center gap-8'>
                        <Link className='text-center mt-4 md:mt-0' href='/pricing'>Pricing</Link>
                        <Link className='text-center mt-4 md:mt-0' href='/contact'>Contact</Link>
                        <Link className='text-center mt-4 md:mt-0' href='/CookiesPolicy'>Cookies Policy</Link>
                        {/* <Link className='text-center mt-4 md:mt-0' href='/PrivacyPolicy'>Privacy</Link>
                        <Link className='text-center mt-4 md:mt-0' href='/TermsAndConditions'>T&C</Link> */}
                    </div>
                </div>
                <div className='border-t border-t-[#EAECF0] mt-20 mb-12 '></div>
                <div className='flex-col md:flex-row flex items-center justify-between '>
                    <div className='text-center'>© 2024 Gunpowder Innovations (a trading name of AllerAI Limited). All rights reserved.</div>
                    <div className='flex gap-4 items-center mt-6 md:mt-0'>
                        <Link href="/PrivacyPolicy">Privacy Policy</Link>
                        <Link href="/TermsAndConditions">Terms & Conditions</Link>
                        <span>Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer