import Image from 'next/image'
import React from 'react'
import { Bom } from '@/utils/constants/constant'
import { Hash, Mobile, Speaker, Internet, MVP, Setting, VideoImage } from '@/utils/constants/constant'
import UpArrow from '@/utils/Icons/UpArrow'
import Bomb from '@/utils/Icons/Bomb'
import BombAnimation from '@/utils/Icons/BombAnimation'
import Video from './Video'
const WhoWeAre = () => {


    const Card = ({ key, icon, title, desc }) => {
        return (
            <div key={key} className='border border-[#FF007340] h-full hover:border-[#FF0073] rounded-[37px] px-6 py-8 cursor-pointer text-white hover:text-[#FF0073] hover:bg-[#FF00732E] transition duration-300 ease-in-out w-[329px] md:w-auto'>
                <div className='flex justify-between items-center'>
                    <div className='text-[#FF0073]'>
                        <Image
                            src={icon}
                            alt="hash"
                            className="w-8"
                        />
                    </div>
                    {/* <div className=''>
                        <UpArrow />
                    </div> */}
                </div>
                <h3 className='lg:text-3xl md:text-xl text-2xl font-semibold text-white pt-4 pb-2 font-afacad'>{title}</h3>
                <h3 className='text-base lg:text-lg text-white md:w-[329px] w-[282px]'>{desc}</h3>
            </div>
        )
    }


    const CardData = [
        {
            key: 1,
            icon: Hash,
            title: 'UI/UX Design',
            desc: 'We design experiences, not just interfaces. Our UI/UX services bring your digital products to life!'
        },
        {
            key: 2,
            icon: Mobile,
            title: 'IOS & Android',
            desc: 'We create robust Android and iOS apps tailored to meet your complex business needs.'
        },
        {
            key: 3,
            icon: Speaker,
            title: 'Start Selling Online',
            desc: 'Custom e-commerce stores designed to boost sales and enhance shopping across platforms.'
        },
        {
            key: 4,
            icon: Internet,
            title: 'Website Development',
            desc: 'We build responsive, high-performance websites that drive engagement and deliver results.    '
        },
        {
            key: 5,
            icon: MVP,
            title: 'MVP',
            desc: 'We transform strategies into software systems that optimize business performance.'
        },
        {
            key: 6,
            icon: Setting,
            title: 'Maintenance',
            desc: 'We offer continued support after project completion to grow together with our clients.'
        },
    ]
    return (
        <>
            <div className='max-w-[1200px] mx-auto lg:pt-40 pt-14 relative bg-black z-10'>
                <div className='border border-[#FF0073] rounded-2xl flex flex-col-reverse md:flex-row lg:pt-8 lg:pb-12 lg:px-14  md:pt-6 md:pb-8 md:px-10 pt-6 pb-6 px-6 relative md:mx-8 mx-4 bg-[#2E0015A8] mb-1'>
                    <div className='lg:max-w-[700px] md:max-w-[423px] flex justify-start flex-col'>
                        <h5 className='font-bold lg:text-[75px]  lg:leading-[110px] md:leading-[74px] md:text-[48px] text-[36px] mt-4 md:mt-0 font-afacad'>Who are we</h5>
                        <p className='lg:text-xl text-base font-urbanist'>At <span className='text-brand'>Gunpowder Innovations</span>, we’re a UK-based digital agency of creators, designers, developers, and strategists passionate about building impactful digital solutions. Since our journey began, we’ve partnered with clients across industries to craft apps, websites, and digital experiences that combine stunning design with powerful functionality. Our mission is to bring client ideas to life, delivering results that meet needs and exceed expectations with integrity, creativity, and commitment to satisfaction.
                        </p>
                    </div>
                    <div className=''>
                        <div className='lg:absolute lg:right-14 lg:bottom-10 flex lg:flex-none justify-center items-end lg:w-auto w-full'>
                            {/* <Bomb/> */}
                            <BombAnimation />
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:pt-[200px] md:pt-20 pt-16 relative bg-black z-10'>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='mx-4'>
                        <h5 className='text-center lg:text-[40px] leading-[46px] font-bold hidden lg:block font-afacad'>We can help you <span className='text-[#FF0073]'>With</span></h5>
                        <h5 className='text-center md:text-[40px] text-[32px] leading-[46px] font-bold lg:hidden'>Our <span className='text-[#FF0073]'> Services </span></h5>

                        <p className='text-center max-w-[713px] mx-auto md:text-lg text-base lg:mt-4 md:mt-3 mt-2'>We offer end-to-end services, including strategy, design, development, and marketing, to bring your vision to life and deliver impactful results.</p>
                        <div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:flex-none flex flex-row flex-nowrap  w-full md:mt-6 mt-10 overflow-x-auto services-scroll pb-10 md:pb-0'>
                            {CardData.map((item, index) => (
                                <div key={index}>
                                    <Card
                                        icon={item?.icon}
                                        title={item?.title}
                                        desc={item?.desc}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1440px] mx-auto lg:mt-40 md:mt-14 mt-10'>
                {/* <Image src={VideoImage} alt="test" className='w-full lg:h-[700px] md:h-[562px] h-[350px] object-cover' /> */}
                <Video/>
            </div>
        </>
    )
}

export default WhoWeAre