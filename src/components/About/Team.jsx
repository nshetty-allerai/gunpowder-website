import React from 'react'
import { Member1,Member2,Member3,Member4,Member5,Member6,Member7,Member8,Member9,Member10, } from '@/utils/constants/constant'
import Image from 'next/image'


const data =[ Member1,Member2,Member3,Member4,Member5,Member6,Member7,Member8,Member9,Member10,]
const Card = ({image}) => {
    return (
            <Image
                src={image}
                alt=""
                className="md:w-[130px] w-[90px]"
            />
    )
}

const Team = () => {
    return (
        <section className='max-w-[1440px] mx-auto w-full lg:py-[164px] py-[200px] relative bg-black'>
            <div className='max-w-[1041px] mx-auto'>
                <h4 className='font-afacad text-center font-bold md:text-[40px] md:leading-[40px] text-3xl'>We have <span className='text-brand'>best team</span></h4>
                <p className='md:text-lg text-base text-center md:max-w-[613px] mx-auto mt-4'>Our skilled team combines diverse expertise and creativity to deliver exceptional results on every project.</p>
                <div className='flex flex-wrap justify-center md:gap-9 gap-[22px] max-w-[337px] md:max-w-[706px] lg:max-w-[1041px] mx-auto mt-14'>
                        {data.map((item,index)=>(<div key={index}><Card image={item}/></div>))}
                </div>
            </div>
        </section>
    )
}

export default Team