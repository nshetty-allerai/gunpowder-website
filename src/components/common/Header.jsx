'use client';

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { CloseButton, Logo, Menu } from '@/utils/constants/constant'
import Link from 'next/link'

import { usePathname } from 'next/navigation';
import ScheduleCallModal from './ScheduleCallModal';
import CookiesModal from './CookiesModal';
import CookieConsentComponent from './CookieConsent';
const Header = () => {
  const router = useRouter()
  const [showModal ,setShowModal]=useState(false)
  const [show, setShow] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCookies ,setShowCookies]=useState(true)
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
      <div className={`flex fixed top-0 max-w-[1440px] mx-auto z-30 w-full justify-between items-center px-8 py-4  ${isScrolled==true?'bg-black/50 backdrop-blur-md':'bg-transparent'} `}>
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
          <Link className={pathname == '' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] hidden lg:block' : 'px-4 py-1 bg-transparent rounded-3xl hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out hidden lg:block'} target='_blank' href='https://www.allerai.co.uk'>Products</Link>
          <Link className={pathname == '/about' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] hidden lg:block' : 'px-4 py-1 bg-transparent rounded-3xl  hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out hidden lg:block'} href='/about'>About Us</Link>
          <Link className={pathname == '/pricing' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] hidden lg:block' : 'px-4 py-1 bg-transparent rounded-3xl  hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out hidden lg:block'} href='/pricing'>Pricing</Link>
          <Link className={pathname == '/contact' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] hidden lg:block' : 'px-4 py-1 bg-transparent rounded-3xl hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out hidden lg:block'} href='/contact'>Contact</Link>
          {/* <Link className={pathname == '/' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] hidden lg:block' : 'px-4 py-1 bg-transparent rounded-3xl hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out hidden lg:block'} href='/'>Home</Link>
          <Link className={pathname == '/services' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] hidden lg:block' : 'px-4 py-1 bg-transparent rounded-3xl hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out hidden lg:block'} href='/'>Our Services</Link>
          <Link className={pathname == '/about' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] hidden lg:block' : 'px-4 py-1 bg-transparent rounded-3xl  hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out hidden lg:block'} href='/'>About Us</Link>
          <Link className={pathname == '/pricing' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] hidden lg:block' : 'px-4 py-1 bg-transparent rounded-3xl  hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out hidden lg:block'} href='/'>Pricing</Link>
          <Link className={pathname == '/contact' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] hidden lg:block' : 'px-4 py-1 bg-transparent rounded-3xl hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out hidden lg:block'} href='/'>Contact</Link> */}
          <Link onClick={()=>setShowModal(true)} className={pathname == '#' ? 'px-6 py-2.5 rounded-3xl text-white bg-[#FF0073]' : 'px-6 py-2.5 text-white bg-[#FF0073] cursor-pointer hover:bg-hover-gradient transition-all duration-300  rounded-3xl hidden md:block'} href='#'>Let&apos;s Talk</Link>
          <div onClick={()=>setShow((prev)=>!prev)} className='cursor-pointer'>
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
          <hr className="w-full border-t-[1px] border-[#FF007333] md:hidden" />
          <Link className={pathname == '' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] w-fit' : 'px-4 py-1 bg-transparent rounded-3xl hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out'} target='_blank' href='https://www.allerai.co.uk'>Products</Link>
          <hr className="w-full border-t-[1px] border-[#FF007333]" />
          <Link onClick={() => setShow((prev) => !prev)} className={pathname == '/about' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] w-fit' : 'px-4 py-1 bg-transparent rounded-3xl  hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out'} href='/about'>About Us</Link>
          <hr className="w-full border-t-[1px] border-[#FF007333]" />
          <Link onClick={() => setShow((prev) => !prev)} className={pathname == '/pricing' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] w-fit' : 'px-4 py-1 bg-transparent rounded-3xl  hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out'} href='/pricing'>Pricing</Link>
          <hr className="w-full border-t-[1px] border-[#FF007333]" />
          <Link onClick={() => setShow((prev) => !prev)} className={pathname == '/contact' ? 'px-4 py-1 rounded-3xl text-[#FF0073] bg-[#FF007342] w-fit' : 'px-4 py-1 bg-transparent rounded-3xl hover:text-[#FF0073] hover:bg-[#FF007342] transition-all duration-300 ease-in-out'} href='/contact'>Contact</Link>
          <hr className="w-full border-t-[1px] border-[#FF007333] md:hidden" />
          <Link onClick={()=>setShowModal(true)} className={pathname == '#' ? 'px-6 py-2.5 rounded-3xl text-white bg-[#FF0073] md:hidden' : 'px-6 py-2.5 text-white bg-[#FF0073] cursor-pointer  rounded-3xl w-full text-center md:hidden'} href='#'>Let&apos;s Talk</Link>
        </div>
      </div>}
      <ScheduleCallModal
        open={showModal}
        close={()=>setShowModal(false)}
      />
       {/* {showCookies&& <CookiesModal setShowCookies={setShowCookies}/>} */}
       {/* {showCookies&& <CookieConsentComponent/>} */}
    </div>
  )
}

export default Header