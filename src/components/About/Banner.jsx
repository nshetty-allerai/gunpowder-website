import React from 'react'
import { BannerImage } from '@/utils/constants/constant'
import Image from 'next/image'
const Banner = () => {
  return (
    // <section className='max-w-[1440px] mx-auto'>
    //   <div className='lg:h-[773px] h-[399px] w-full relative'>
    //       <Image
    //       src={BannerImage}
    //       alt='BannerImage'
    //       className='h-full w-full'
    //       />
    //       <div className='absolute bg-bg-[#000000CC] h-full w-full'></div>
    //   </div>
    // </section>
    <section className="max-w-[1440px] mx-auto">
  <div className="lg:h-[773px] h-[399px] w-full relative">
    <Image
      src={BannerImage}
      alt="BannerImage"
      className="absolute z-0 top-0 left-0 h-full w-full object-cover"
    />
    {/* Shadow overlay */}
    <div className="absolute z-0 top-0 left-0 h-full w-full bg-[#000000CC]"></div>
    <div className='relative z-10 lg:max-w-[950px] md:max-w-[684px] max-w-[380px] mx-auto text-center lg:h-[773px] h-[399px] flex items-center'>
      <h2 className='font-medium lg:text-[64px] lg:leading-[80px] md:text-[40px] md:leading-[50px] text-2xl'>To empower businesses by providing user centric Approach Design & Development solutions</h2>
    </div>
  </div>
</section>

  )
}

export default Banner