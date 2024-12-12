import Image from 'next/image'
import React from 'react'
import { Bom, Opened, RightRounded } from '@/utils/constants/constant'
import { Hash, Mobile, Speaker, Internet, MVP, Setting, VideoImage } from '@/utils/constants/constant'
import UpArrow from '@/utils/Icons/UpArrow'
import Bomb from '@/utils/Icons/Bomb'
import BombAnimation from '@/utils/Icons/BombAnimation'
import Video from './Video'
const WhoWeAre = () => {


    const Card = ({ key, icon, title, desc }) => {
        return (
            <div key={key} className='border border-[#FF007340] h-full border-[#FF0073] rounded-[37px] px-6 py-8 cursor-pointer text-white bg-[#2E0015A8] transition duration-300 ease-in-out w-[329px] md:w-auto'>
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
                <div className='border border-[#FF0073] rounded-2xl flex flex-col-reverse md:flex-row lg:pt-4 lg:pb-8 lg:px-8  md:pt-3 md:pb-7 md:px-8 pt-6 pb-6 px-6 relative md:mx-8 mx-4 bg-[#2E0015A8] mb-1'>
                    <div className='lg:max-w-[700px] md:max-w-[423px] flex justify-start flex-col'>
                        <h5 className='font-bold lg:text-[75px]  lg:leading-[110px] md:leading-[74px] md:text-[48px] text-[36px] mt-4 md:mt-0 font-afacad'>Who are we</h5>
                        <div className='lg:text-lg text-base font-urbanist'>
                            <div className='lg:block hidden'>
                                <div className='flex items-start gap-2 lg:gap-2'>
                                    <div className='md:w-[5%] w-[6%]'>
                                        <Image
                                            src={RightRounded}
                                            alt=""
                                            className="w-6 cursor-pointer mt-1"
                                        />
                                    </div>
                                    <div className='w-[95%]'>
                                        Gunpowder Innovations are a UK-based digital agency of creators, designers, developers, and strategists
                                    </div>
                                </div>
                                <div className='flex items-start mt-3 gap-2 lg:gap-2'>
                                    <div className='md:w-[5%] w-[6%]'>
                                        <Image
                                            src={RightRounded}
                                            alt=""
                                            className="w-6 cursor-pointer mt-1"
                                        />
                                    </div>
                                    <div className='w-[95%]'>
                                        We are passionate about building impactful digital solutions.
                                    </div>
                                </div>
                                <div className='flex items-start mt-3 gap-2 lg:gap-2'>
                                    <div className='md:w-[5%] w-[6%]'>
                                        <Image
                                            src={RightRounded}
                                            alt=""
                                            className="w-6 cursor-pointer mt-1"
                                        />
                                    </div>
                                    <div className='w-[95%]'>
                                        We have partnered with clients across multiple industries to craft; apps, websites, & digital experiences that combine stunning design with powerful functionality.
                                    </div>
                                </div>
                                <div className='flex items-start mt-3 gap-2 lg:gap-2'>
                                    <div className='md:w-[5%] w-[6%]'>
                                        <Image
                                            src={RightRounded}
                                            alt=""
                                            className="w-6 cursor-pointer mt-1"
                                        />
                                    </div>
                                    <div className='w-[95%]'>
                                        Our mission is to bring client ideas to life, delivering results that meet needs and exceed expectations with integrity, creativity, and commitment to satisfaction.
                                    </div>
                                </div>
                            </div>
                            <div className='lg:hidden'>
                                <div className='flex items-start mt-4 gap-2 lg:gap-2'>
                                    <div className='md:w-[5%] w-[6%]'>
                                        <Image
                                            src={RightRounded}
                                            alt=""
                                            className="w-6 cursor-pointer mt-1"
                                        />
                                    </div>
                                    <div className='w-[95%]'>
                                        We’re a UK-based team of passionate creators, designers, and developers.
                                    </div>
                                </div>
                                <div className='flex items-start mt-4 gap-2 lg:gap-2'>
                                    <div className='md:w-[5%] w-[6%]'>
                                        <Image
                                            src={RightRounded}
                                            alt=""
                                            className="w-6 cursor-pointer mt-1"
                                        />
                                    </div>
                                    <div className='w-[95%]'>
                                        Crafting apps, websites, and digital experiences with design and functionality.
                                    </div>
                                </div>
                                <div className='flex items-start mt-4 gap-2 lg:gap-2'>
                                    <div className='md:w-[5%] w-[6%]'>
                                        <Image
                                            src={RightRounded}
                                            alt=""
                                            className="w-6 cursor-pointer mt-1"
                                        />
                                    </div>
                                    <div className='w-[95%]'>
                                        Committed to bringing ideas to life with creativity and integrity.
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        <h5 className='text-center lg:text-[40px] leading-[46px] font-bold hidden lg:block font-afacad'>We can <span className='text-[#FF0073]'>help </span>you With...</h5>
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
                <Video />
            </div>
        </>
    )
}

export default WhoWeAre