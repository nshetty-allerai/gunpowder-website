"use client"

import React, { useState ,useRef  } from 'react'
import { ArrowNext, ContactLeft, ContactLeftMobile, ContactLeftTab, ContactRight, ContactRightMobile, ContactRightTab, ContactUgGradient, EmailIcon, LeftBottomGradient, maleIcon } from '@/utils/constants/constant'
import Image from 'next/image'
import BudgetTabs from './BudgetTabs'
import { SendMail } from './SendMail'
import emailjs from '@emailjs/browser';
import {LoadingOutlined} from '@ant-design/icons'
import {message} from 'antd'
import { WhatsAppCard } from './WhatsAppCard'
import Services from './Services'
const ContactForm = () => {
    const form = useRef();
    const [isLoading,setIsLoading]=useState(false)
    const [selectedTab, setSelectedTab] = useState('£0 to £25k');
    const [selectedServices,setSelectedServices]=useState(["Websites","UI/UX Design"])

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // if (e.nativeEvent.submitter?.type === "button" && e.nativeEvent.submitter?.textContent.includes("Tab")) {
        //     return;
        // }

        setIsLoading(true)
        console.log(form.current)
    
        const { first_name ,last_name,email ,message:formMessage ,project_budget } = form.current; // Access form fields directly
    
        
        if (!first_name.value.trim()) {
          message.warning('first name number is required.', 2);
          setIsLoading(false)
          return;
        }
    
        if (!last_name.value.trim()) {
          message.warning('last name number is required.', 2);
          setIsLoading(false)
          return;
        }
    
        if (!email.value.trim()) {
          message.warning('email is required.', 2);
          setIsLoading(false)
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
          message.warning('Please enter a valid email.', 2);
          setIsLoading(false)
          return;
        }

          emailjs
          .sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID , form.current, {
            publicKey: process.env.PUBLIC_KEY,
          })
          .then(
            () => {
              setIsLoading(false)
              message.success('Thanks for contacting us!', 2);
              first_name.value = '';
              last_name.value = '';
              email.value = '';
              formMessage.value=''
            },
            (error) => {
              setIsLoading(false)
                message.error('Oops! Something went wrong.', 2);
            },
          );
    }
    return (
        <section className='max-w-[1440px] mx-auto lg:pt-[111px] md:pt-[61px] pt-10   lg:pb-[111px] md:pb-[61px] pb-10 relative'>
            <div className='max-w-[1324px] mx-auto'>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-[73px] gap-[30px] md:px-8 px-4'>
                    <div className='relative z-20'>
                        <h3 className='font-bold lg:text-[84px] lg:leading-[90px] md:text-[48px] md:leading-[90px] text-4xl font-afacad'>Contact with us</h3>
                        <p className='font-medium lg:text-lg md:text-base text-sm md:mt-7 mt-3'>Wer&apos;e here to connect, collaborate and bring your ideas to life weather you&apos;re ready to embark on an exciting project or simply wish to explore how we can support your vision</p>
                        <SendMail/>
                        <WhatsAppCard/>
                    </div>
                    <div>
                        <div className="bg-[#110324] relative z-20 md:p-8 p-6 rounded-xl max-w-[598px] lg:mx-auto text-white">
                            <form  ref={form}  onSubmit={handleFormSubmit} className=''>
                                {/* <!-- First and Last Name --> */}
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                                    <div>
                                        <label className="block text-lg mb-1.5">First name</label>
                                        <input
                                            name='first_name'
                                            type="text"
                                            placeholder="First name"
                                            className="placeholder:text-base text-base w-full px-4 py-3 rounded-lg bg-transparent text-white border border-[#330653] focus:outline-none  focus:border-brand"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-lg mb-1.5">Last name</label>
                                        <input
                                            name='last_name'
                                            type="text"
                                            placeholder="Last name"
                                            className="w-full px-4 py-3 placeholder:text-base text-base rounded-lg bg-transparent text-white border border-[#330653] focus:outline-none focus:border-brand"
                                        />
                                    </div>
                                </div>

                                {/* <!-- Email --> */}
                                <div className="mb-4">
                                    <label className="block text-lg mb-1.5">Email</label>
                                    <input
                                        name='email'
                                        type="email"
                                        placeholder="you@gmail.com"
                                        className="w-full px-4 py-3 placeholder:text-base text-base rounded-lg bg-transparent text-white border border-[#330653] focus:outline-none  focus:border-brand"
                                    />
                                </div>

                                {/* <!-- Message --> */}
                                <div className="mb-4">
                                    <label className="block text-lg mb-1.5">Message</label>
                                    <textarea
                                        name='message'
                                        placeholder="Leave us a message..."
                                        className="w-full px-4 py-3 placeholder:text-base text-base rounded-lg bg-transparent text-white border border-[#330653] focus:outline-none  focus:border-brand h-24 resize-none"
                                    ></textarea>
                                </div>
                                {/* tabs */}
                                <input
                                    type="hidden"
                                    name="project_budget"
                                    value={selectedTab}
                                />
                                <input
                                    type="hidden"
                                    name="services"
                                    value={selectedServices}
                                />
                                <Services selectedServices={selectedServices} setSelectedServices={setSelectedServices} /> 
                                <BudgetTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                                {/* <!-- Submit Button --> */}
                                <div className='mt-8'>
                                    <button
                                        disabled={isLoading}
                                        type="submit"
                                        className="w-full py-3 rounded-[30px] bg-brand text-white font-semibold hover:bg-pink-600 focus:outline-none focus:ring-brand"
                                    >
                                        {isLoading?<LoadingOutlined style={{marginRight:'10px'}}/>:''}
                                        Request  Quote
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                {/* DeskTop */}
                <div className='hidden lg:block left-0 w-full absolute bottom-0 z-0 '>
                    <Image
                        src={ContactLeft}
                        alt=''
                        className='w-full'
                    />
                </div>
                <div className='hidden lg:block right-0 w-full absolute bottom-0 z-0'>
                    <Image
                        src={ContactRight}
                        alt=''
                        className='w-full'
                    />
                </div>

                {/* Tab */}
                <div className='hidden md:block lg:hidden left-0 w-full absolute top-[-300px] z-0'>
                    <Image
                        src={ContactLeftTab}
                        alt=''
                        className='w-full'
                    />
                </div>
                <div className='hidden md:block lg:hidden right-0 w-full absolute top-[-200px]  md:top-[-400px] z-0'>
                    <Image
                        src={ContactRightTab}
                        alt=''
                        className='w-full'
                    />
                </div>

                {/* Mobile */}
                <div className='md:hidden left-0 w-full absolute top-[-200px] z-0'>
                    <Image
                        src={ContactLeftMobile}
                        alt=''
                        className='w-full'
                    />
                </div>
                <div className='md:hidden right-0 w-full absolute top-[-200px] z-0'>
                    <Image
                        src={ContactRightMobile}
                        alt=''
                        className='w-full'
                    />
                </div>
            </div>
        </section>

    )
}

export default ContactForm