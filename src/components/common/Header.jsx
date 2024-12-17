'use client';

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import {  CloseButton, Logo, Menu } from '@/utils/constants/constant'
import Link from 'next/link'

import { usePathname } from 'next/navigation';
import ScheduleCallModal from './ScheduleCallModal';
import CookiesModal from './CookiesModal';
import CookieConsentComponent from './CookieConsent';
import { DownOutlined } from '@ant-design/icons';
const Header = () => {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [show, setShow] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCookies, setShowCookies] = useState(true)
  const [showProducts, setShowProducts] = useState(false)
  const pathname = usePathname()
  const currentRoute = '/'
  console.log(pathname)



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className='max-w-[1440px] mx-auto relative z-30 bg-transparent mb-[84px]'>
      <div className={`flex fixed top-0 max-w-[1440px] mx-auto z-30 w-full justify-between items-center px-8 py-4  ${isScrolled == true ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'} `}>
        <div className='cursor-pointer' onClick={() => router.push('/')}>
          <Image
            src={Logo}
            alt="Picture of the author"
            className='w-[177px]'
          />
        </div>
        <div className='flex gap-8 items-center text-lg font-semibold font-urbanist'>
          <Link className={pathname == '/' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] hidden lg:block' : 'px-4 py-1 bg-transparent rounded-3xl hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out hidden lg:block'} href='/'>Home</Link>
          <Link className={pathname == '/services' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] hidden lg:block' : 'px-4 py-1 bg-transparent rounded-3xl hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out hidden lg:block'} href='/services'>Our Services</Link>
          <Link className={pathname == '/about' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] hidden lg:block' : 'px-4 py-1 bg-transparent rounded-3xl  hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out hidden lg:block'} href='/about'>About Us</Link>
          <Link className={pathname == '/pricing' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] hidden lg:block' : 'px-4 py-1 bg-transparent rounded-3xl  hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out hidden lg:block'} href='/pricing'>Pricing</Link>
          <Link className={pathname == '/contact' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] hidden lg:block' : 'px-4 py-1 bg-transparent rounded-3xl hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out hidden lg:block'} href='/contact'>Contact</Link>
          <div className={`relative  hover:bg-[#FF007342] ${showProducts !== true ? 'rounded-[14px]' : 'rounded-t-[14px] bg-[#FF007342]'}`}>
            <div onClick={() => setShowProducts((prev) => !prev)} className='px-4 py-1 rounded-3xl hover:text-[#FF0073] transition-all duration-300 ease-in-out hidden lg:flex items-center gap-2 cursor-pointer'>
              <span className='text-lg'>Products</span>
              <span className={`${showProducts == true ? 'rotate-180 transition-all duration-300 ease-in-out' : 'rotate-0 transition-all duration-300 ease-in-out'}`}>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="CurrentColor " xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.8635 5.29246C14.6759 5.10499 14.4216 4.99968 14.1565 4.99968C13.8913 4.99968 13.637 5.10499 13.4495 5.29246L8.49946 10.2425L3.54946 5.29246C3.36086 5.11031 3.10826 5.00951 2.84606 5.01179C2.58387 5.01407 2.33305 5.11924 2.14764 5.30465C1.96224 5.49005 1.85707 5.74087 1.85479 6.00306C1.85251 6.26526 1.95331 6.51786 2.13546 6.70646L7.79246 12.3635C7.97999 12.5509 8.2343 12.6563 8.49946 12.6562C8.76463 12.6562 9.01894 12.5509 9.20646 12.3635L14.8635 6.70646C15.0509 6.51894 15.1562 6.26463 15.1562 5.99946C15.1562 5.7343 15.0509 5.47999 14.8635 5.29246Z" fill="CurrentColor" />
                </svg>
              </span>
            </div>
            {showProducts &&
              <div className='absolute bg-[#FF007342] w-full rounded-b-[14px] border-t border-t-[#884764]'>
                <div className='my-2 hover:bg-[#FF00734F] mx-2 rounded-[7px] py-1'>
                  <Link target='_blank' href="https://www.allerai.co.uk" className='text-lg text-center px-4 py-1 rounded-[7px]'>Allerwell</Link>
                </div>
              </div>
            }
          </div>
          <Link onClick={() => setShowModal(true)} className={pathname == '#' ? 'px-6 py-2.5 rounded-3xl text-white bg-[#FF0073]' : 'px-6 py-2.5 text-white bg-[#FF0073] cursor-pointer hover:bg-hover-gradient transition-all duration-300  rounded-3xl hidden md:block'} href='#'>Let&apos;s Talk</Link>
          <div onClick={() => setShow((prev) => !prev)} className='cursor-pointer'>
            <Image
              src={Menu}
              alt="Picture of the author"
              className='w-[30px] lg:hidden'
            />
          </div>
        </div>
      </div>
      {show && <div className='fixed w-full top-0 right-0 z-50 bg-black rounded-b-[26px]'>
        <div className='flex flex-col w-full lg:hidden gap-4 py-8 px-8 items-center'>
          <div className='w-full flex justify-between'>
            <div className='text-lg font-semibold'>Menu</div>
            <div className='cursor-pointer' onClick={() => setShow((prev) => !prev)}>
              <Image
                src={CloseButton}
                alt=''
                className='w-5'
              />
            </div>
          </div>
          <Link onClick={() => setShow((prev) => !prev)} className={pathname == '/' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] w-fit ' : 'px-4 py-1 bg-transparent rounded-3xl hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out'} href='/'>Home</Link>
          <hr className="w-full border-t-[1px] border-[#FF007333]" />
          <Link onClick={() => setShow((prev) => !prev)} className={pathname == '/services' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] w-fit' : 'px-4 py-1 bg-transparent rounded-3xl hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out'} href='/services'>Our Services</Link>
          {/* <hr className="w-full border-t-[1px] border-[#FF007333] md:hidden" />
          <Link className={pathname == '' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] w-fit' : 'px-4 py-1 bg-transparent rounded-3xl hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out'} target='_blank' href='https://www.allerai.co.uk'>Products</Link> */}
          <hr className="w-full border-t-[1px] border-[#FF007333]" />
          <Link onClick={() => setShow((prev) => !prev)} className={pathname == '/about' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] w-fit' : 'px-4 py-1 bg-transparent rounded-3xl  hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out'} href='/about'>About Us</Link>
          <hr className="w-full border-t-[1px] border-[#FF007333]" />
          <Link onClick={() => setShow((prev) => !prev)} className={pathname == '/pricing' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] w-fit' : 'px-4 py-1 bg-transparent rounded-3xl  hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out'} href='/pricing'>Pricing</Link>
          <hr className="w-full border-t-[1px] border-[#FF007333]" />
          <Link onClick={() => setShow((prev) => !prev)} className={pathname == '/contact' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] w-fit' : 'px-4 py-1 bg-transparent rounded-3xl hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out'} href='/contact'>Contact</Link>
          <hr className="w-full border-t-[1px] border-[#FF007333] md:hidden" />
          {/* <Link className={pathname == '' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] w-fit' : 'px-4 py-1 bg-transparent rounded-3xl hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out'} target='_blank' href='https://www.allerai.co.uk'>Products</Link> */}
          <div className={`relative  hover:bg-[#FF007342] ${showProducts !== true ? 'rounded-[14px]' : 'rounded-[14px] bg-[#FF007342]'}`}>
            <div onClick={() => setShowProducts((prev) => !prev)} className='px-4 py-1 rounded-3xl hover:text-[#FF0073] transition-all duration-300 ease-in-out lg:hidden flex items-center gap-2 cursor-pointer'>
              <span className='text-lg'>Products</span>
              <span className={`${showProducts == true ? 'rotate-180 transition-all duration-300 ease-in-out' : 'rotate-0 transition-all duration-300 ease-in-out'}`}>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="CurrentColor " xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.8635 5.29246C14.6759 5.10499 14.4216 4.99968 14.1565 4.99968C13.8913 4.99968 13.637 5.10499 13.4495 5.29246L8.49946 10.2425L3.54946 5.29246C3.36086 5.11031 3.10826 5.00951 2.84606 5.01179C2.58387 5.01407 2.33305 5.11924 2.14764 5.30465C1.96224 5.49005 1.85707 5.74087 1.85479 6.00306C1.85251 6.26526 1.95331 6.51786 2.13546 6.70646L7.79246 12.3635C7.97999 12.5509 8.2343 12.6563 8.49946 12.6562C8.76463 12.6562 9.01894 12.5509 9.20646 12.3635L14.8635 6.70646C15.0509 6.51894 15.1562 6.26463 15.1562 5.99946C15.1562 5.7343 15.0509 5.47999 14.8635 5.29246Z" fill="CurrentColor" />
                </svg>
              </span>
            </div>
            {showProducts &&
                <div className='w-full rounded-b-[14px] border-t border-t-[#884764]'>
                <div className='my-2 bg-[#FF00734F] mx-2 rounded-[7px] py-1 '>
                  <Link target='_blank' href="https://www.allerai.co.uk" className='text-lg text-center px-4 py-1'>Allerwell</Link>
                </div>
              </div>
            }
          </div>
          <hr className="w-full border-t-[1px] border-[#FF007333] md:hidden" />
          <Link onClick={() => setShowModal(true)} className={pathname == '#' ? 'px-6 py-2.5 rounded-3xl text-white bg-[#FF0073] md:hidden' : 'px-6 py-2.5 text-white bg-[#FF0073] cursor-pointer  rounded-3xl w-full text-center md:hidden'} href='#'>Let&apos;s Talk</Link>
        </div>
      </div>}
      <ScheduleCallModal
        open={showModal}
        close={() => setShowModal(false)}
      />
      {/* {showCookies&& <CookiesModal setShowCookies={setShowCookies}/>} */}
      {/* {showCookies&& <CookieConsentComponent/>} */}
    </div>
  )
}

export default Header