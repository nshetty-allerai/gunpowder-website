import React from 'react'
import Button from '../common/Button';

const Gradient = () => {
  const gradientStyle = {
    background: "linear-gradient(to right, #FF0073 100%, #8400FF 100%)",
    height: "200px", // Example height
    width: "100%",   // Example width
  };
  // background: linear-gradient(180.00deg, rgba(32, 41, 44, 0),rgb(0, 0, 0) 100%);
  // background: linear-gradient(90.00deg, rgb(255, 0, 115),rgb(132, 0, 255) 100%);
  return (
    <section style={{background:'linear-gradient(90.00deg, rgb(255, 0, 115),rgb(132, 0, 255) 100%)'}} className='max-w-[1440px] mx-auto md:py-[88px] py-[200px] relative'>
     <div className='z-0 absolute h-full w-full left-0 bottom-0' style={{background:'linear-gradient(180.00deg, rgba(32, 41, 44, 0),rgb(0, 0, 0) 100%)'}} ></div>
      <div className='relative z-10'>
        <h2 className='font-afacad text-center font-bold md:text-[100px] md:leading-[110px] text-[50px] leading-[60px]'>Let&apos;s Create Your</h2>
        <h2 className='font-afacad text-center font-bold md:text-[100px] md:leading-[110px] text-[50px] leading-[60px]'>Dream Project </h2>
        <p className='md:max-w-[627px] max-w-[297px] mx-auto text-center lg:mt-10 md:mt-6 mt-4'>Our team is here to help you succeed. Let&apos;s work together to achieve your goals 
        and elevate your brand to new heights.</p>
        <div className='flex justify-center'>
        {/* <button className='flex items-center gap-2 bg-[#FF0073] cursor-pointer hover:bg-hover-gradient transition-all duration-300 text-white w-fit px-6 py-2 md:px-6 md:py-[12px] rounded-[30px] lg:mt-14 md:mt-10 mt-4 relative'>
            <span className='text-base font-bold'>Let&apos;s Talk</span>
          </button> */}
          <Button>Let&apos;s Talk</Button>
        </div>
      </div>
    </section>
  )
}

export default Gradient