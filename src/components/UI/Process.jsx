import Image from 'next/image'
import React from 'react'
import { Arrow } from '@/utils/constants/constant'
import WireFrame from '@/utils/Icons/WireFrame'
import Design from '@/utils/Icons/Design'
import Code from '@/utils/Icons/Code'
import Testing from '@/utils/Icons/Testing'
import Deployment from '@/utils/Icons/Deployment'
import Button from '../common/Button'

const Process = () => {

  const data = [
    {
      icon: <WireFrame />,
      title: "Wireframing",
      description: "When we kickoff the project, we collaborate closely to build a clear and concise plan and timeline, incorporating the clients or co-developed insights."
    },
    {
      icon: <Design />,
      title: "Design",
      description: "Once wireframing is complete, our design team brings the app to life with clickable versions to provide the full user experience, prior to coding."
    },
    {
      icon: <Code />,
      title: "Code",
      description: "Coding occurs in Agile Sprints, enabling regular reviews and feedback to keep you involved throughout the build process"
    },
    {
      icon: <Testing />,
      title: "Testing",
      description: "Testing ensures your app is reliable, user-friendly, and issue-free before release, optimizing the user experience & product success."
    },
    {
      icon: <Deployment />,
      title: "Deployment",
      description: "After QA and client approval, we deploy the code, guiding hosting choices from servers to the cloud."
    }
  ]

  const Card = ({ icon, title, description }) => {
    return (
      <div className='w-[200px] md:w-auto'>
        <div className='min-w-[200px] w-full text-white hover:text-[#FF0073] cursor-pointer border-b-8 border-transparent hover:border-[#FF0073] transition duration-300 ease-in-out pb-1 mb-8'>
          <div className=''>
            {icon}
          </div>
          <h5 className='font-medium md:text-4xl text-2xl mt-3 font-afacad'>{title}</h5>
          <p className='text-base md:text-base mt-4 hover:text-white text-white'>{description}</p>
          <div className=''></div>
        </div>
      </div>
    )
  }

  return (
    <section className='max-w-[1440px] mx-auto my-20'>
      <div className='flex justify-between flex-col md:flex-row md:items-center mx-8'>
        <h4 className='font-bold lg:text-[70px] md:leading-[86px] md:text-[40px] text-3xl font-afacad'>Our end to end <span className='text-brand'>process</span></h4>
        {/* <button className='flex items-center gap-1 px-6 py-3 font-bold bg-[#FF0073] cursor-pointer hover:bg-hover-gradient transition-all duration-300 rounded-[30px] w-fit mt-6 md:mt-0'>chat with us
          <Image
            src={Arrow}
            alt='arrow'
            className='w-[18px]'
          />
        </button> */}
         <Button>Chat With Us</Button>
      </div>
      <div className='md:grid lg:grid-cols-5 md:grid-cols-3 grid-cols-6 gap-8 md:flex-none flex flex-nowrap overflow-auto mx-8 md:mt-20 mt-10 services-scroll'>
        {
          data.map((item, index) => (
            <div key={index}>
              <Card
                icon={item?.icon}
                title={item?.title}
                description={item?.description}
              />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Process