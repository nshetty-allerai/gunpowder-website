"use client"
import React, { useState } from 'react'
import { Opened, Closed } from '@/utils/constants/constant'
import Image from 'next/image'
import { Arrow, Circles } from '@/utils/constants/constant'

const QuestionsData = ({ question, answer ,q }) => {
    const [show, setShow] = useState(false)
    return (
        <div className='flex items-start gap-4 bg-[#FF00731A] p-6 rounded-2xl'>
            <div className='lg:w-[4%] md:w-[4%] w-[7%] mt-1'>
                {show == true ? <Image
                    src={Opened}
                    alt=""
                    className="w-6 cursor-pointer"
                    onClick={() => setShow((prev) => !prev)}
                /> :
                    <Image
                        src={Closed}
                        alt=""
                        className="w-6 cursor-pointer"
                        onClick={() => setShow((prev) => !prev)}
                    />
                }
            </div>
            <div className='lg:w-[98%] md:w-[96%] w-[95%]'>
                <div onClick={() => setShow((prev) => !prev)} className='text-lg font-medium cursor-pointer'>{question}</div>
                {show && <div className='text-base font-normal text-[#FFFFFF80] mt-2'>{answer}</div>}
            </div>
        </div>
    )
}

const Questions = () => {

    const [questionJson, setQuestionJson] = useState([
        {
            question: 'What services do you offer?',
            answer: 'We specialize in UX/UI Design, Software Development, and Mobile App Development. Our team creates tailored digital solutions for your business, from intuitive interfaces and user experiences to robust software and mobile applications.'
        },
        {
            question: 'What is your design and development process?',
            answer: 'Our process includes research, strategy, wireframing, design, development, testing, and launch, ensuring seamless and user-focused solutions.'
        },
        {
            question: 'How much time does a typical project take?',
            answer: 'he timeline varies by project scope but typically ranges from a week to two months for complex builds'
        },
        {
            question: 'What industries do you specialize in?',
            answer: 'We specialize in industries like e-commerce, healthcare, fintech, and digital marketing, delivering tailored solutions for each sector.'
        },
        {
            question: 'Can you work with our existing team?',
            answer: 'Yes, we collaborate seamlessly with existing teams to ensure smooth integration and project success.'
        },
        {
            question: 'How do I get started with my project?',
            answer: 'Reach out to us through our Contact Us page, and our team will get back to you to discuss your project goals, requirements, and any other details you need. We look forward to collaborating with you!'
        },
    ])
    return (
        <>
            <section id="questions" className='bg-[#140D10] md:px-8 px-6 py-20 relative z-10'>
                <div className='max-w-[768px] mx-auto'>
                    <div>
                        <h6 className='font-bold md:text-[40px] md:leading-[46px] text-3xl text-center font-afacad'>Frequently asked  <span className='text-[#FF0073]'>questions    </span></h6>
                        <p className='text-center text-base md:text-lg lg:mt-4 mt-2'>Everything you need to know about the product.</p>
                    </div>
                    <div className='flex flex-col gap-4 mt-10'>
                        {
                            questionJson.map((item, index) => (
                                <div key={index}>
                                    <QuestionsData
                                        question={item?.question}
                                        answer={item?.answer}
                                        q={index}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* <section className='max-w-[1440px] mx-auto md:mt-40 md:mb-40 md:py-20 mt-6 mb-6 py-6'>
                <div className='relative h-[423px] z-10'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 lg:w-[627px] md:w-[613px] w-[365px]'>
                        <Image
                            src={Circles}
                            alt="rounder circles"
                            className="lg:w-[627px] md:w-[613px] w-[365px]"
                        />
                    </div>
                    <div className='flex flex-col justify-center items-center h-full relative z-10'>
                        <p className='lg:text-5xl md:text-4xl text-xl font-afacad'>Need help with a project?</p>
                        <h6 className='lg:text-[128px] lg:leading-[140px] md:text-[96px] md:leading-[110px] text-5xl font-bold text-[#FF0073] my-4 font-afacad'>Let&apos;s Talk</h6>
                        <button className='flex items-center gap-1 px-6 py-3 font-bold bg-[#FF0073] cursor-pointer hover:bg-hover-gradient transition-all duration-300 rounded-[30px]'>chat with us
                            <Image
                                src={Arrow}
                                alt='arrow'
                                className='w-[18px]'
                            />
                        </button>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Questions