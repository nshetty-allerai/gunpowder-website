"use client"
import React, { useEffect } from 'react'
import { Logo } from '@/utils/constants/constant'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {


    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//www.freeprivacypolicy.com/public/cookie-consent/4.2.0/cookie-consent.js';
        script.type = 'text/javascript';
        script.charset = 'UTF-8';
        document.body.appendChild(script);

        script.onload = () => {
            cookieconsent.run({
                notice_banner_type: 'banner',
                consent_type: 'express',
                palette: 'dark',
                language: 'en',
                page_load_consent_levels: ['strictly-necessary'],
                notice_banner_reject_button_hide: false,
                preferences_center_close_button_hide: false,
                page_refresh_confirmation_buttons: false,
                website_name: 'gunpowder innovation',
                custom_css_class: 'custom-cookie-modal', // Add your custom class
            });

            // Apply additional styling after the modal is injected
            const style = document.createElement('style');
            style.innerHTML = `
          .custom-cookie-modal {
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 400px !important;
            background-color: #333 !important;
            color: white !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 20px !important;
            box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.2) !important;
            z-index: 9999 !important;
          }
          
          .custom-cookie-modal .cc-btn {
            background-color: #007bff !important; /* Blue color */
            color: white !important;
            border: none !important;
            padding: 10px 20px !important;
            margin: 10px !important;
            border-radius: 5px !important;
            cursor: pointer !important;
          }
        
          .custom-cookie-modal .cc-btn:hover {
            background-color: #0056b3 !important; /* Darker shade of blue for hover */
          }
        `;

            document.head.appendChild(style);
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (
        <footer id="footer" className='bg-[#191919] relative z-10'>
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
                        {/* <Link className='text-center mt-4 md:mt-0' href='/CookiesPolicy'>Cookies Policy</Link> */}
                        {/* <Link className='text-center mt-4 md:mt-0' href='/PrivacyPolicy'>Privacy</Link>
                        <Link className='text-center mt-4 md:mt-0' href='/TermsAndConditions'>T&C</Link> */}
                    </div>
                </div>
                <div className='border-t border-t-[#EAECF0] mt-20 mb-12 '></div>
                <div className='flex-col 2xl:flex-row 2xl:gap-4 gap-8 flex items-center justify-between'>
                    <div className='text-center'>© 2024 Gunpowder Innovations (a trading name of AllerAI Limited). All rights reserved.</div>
                    <div className='flex flex-wrap shrink-0 gap-4 justify-center items-center mt-6 md:mt-0'>
                        <Link className='shrink-0' href="/PrivacyPolicy">Privacy Policy</Link>
                        <Link className='shrink-0' href="/TermsAndConditions">Terms & Conditions</Link>
                        <Link className='shrink-0' href="/CookiesPolicy">Cookie Policy</Link>
                        <div className='text-center shrink-0'>
                            <noscript>
                                Cookie Consent by{' '}
                                <a href="https://www.freeprivacypolicy.com/">Free Privacy Policy Generator</a>
                            </noscript>
                            <a className='font-semibold' href="#" id="open_preferences_center">
                                Update cookies preferences
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer