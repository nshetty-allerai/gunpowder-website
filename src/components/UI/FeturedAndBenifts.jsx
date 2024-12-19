import Image from 'next/image'
import React from 'react'
import { PurityaLogo, AllerWellLogo, ZugoLogo, ContactCard, VisionCard, Inovation, ProjectCard, AimCard, ResultCard, Circles, Arrow, TechDesktop, TechTab, TechMobile, Video2, PurityaMockup, AllerwellMockup, ZugoMockup, BookedText, purityaVector, allerAIVector, zugoVector } from '@/utils/constants/constant'
import Button from '../common/Button'
import Technology from '../OurServices/Technology'

const FeturedAndBenifts = () => {

  const data = [
    {
      icon: ContactCard,
      title: 'Expertise You Can Count On',
      description: 'From e-commerce to healthcare, our team will ensure we understand your industry inside and out. With extensive cross-sector experience, we tackle unique challenges with precision and expertise to deliver tailored solutions.'
    },
    {
      icon: VisionCard,
      title: 'Your Vision, Our Priority',
      description: 'We’re here to bring your vision to life with a client-first approach. You’ll be at the epicentre step-by-step, ensuring a seamless and transparent partnership from start to finish.'
    },
    {
      icon: Inovation,
      title: 'Innovation Meets Impact',
      description: 'Stay ahead with future-ready solutions! We leverage the latest technology to create secure, scalable products designed to give you a competitive edge.'
    },
    {
      icon: ProjectCard,
      title: 'More Than Just a Project',
      description: 'We’re here for the long haul. Our commitment goes beyond delivery, offering ongoing support to ensure your solutions grow with your business.'
    },
    {
      icon: AimCard,
      title: 'Clarity and Confidence at Every Step',
      description: 'Say goodbye to guesswork. Our process is built on transparency and frequent updates, keeping you informed and empowered to make the best decisions.'
    },
    {
      icon: ResultCard,
      title: 'Driven by Real Results',
      description: 'We’re here to move the needle. Our approach is rooted in measurable outcomes that matter to you, delivering tangible success that drives your business forward.'
    },
  ]
  const Card = ({ key, icons, title, description }) => {
    return (
      <div key={key} className='border  border-[#FF0073] rounded-[37px] px-6 py-8 text-white bg-[#FF00732E] transition duration-300 ease-in-out w-[329px] md:w-auto h-full'>
        <div>
          <Image
            src={icons}
            alt=''
            className='w-[73px]'
          />
        </div>
        <h6 className='font-semibold text-2xl md:text-[28px] md:leading-[36px] my-3 w-[282px] font-afacad'>{title}</h6>
        <p className='text-base lg:text-base'>{description}</p>
      </div>
    )
  }
  const FeatureCardData = [
    {
      logo: PurityaLogo,
      description: 'Designed and developed the Puritya Hair Oil product website on Shopify, focusing on UX/UI design, user research, and user flows to position it as a leading hair oil e-commerce platform.',
      mockup: PurityaMockup,
      backgroundColor: '#DCA800',
      textColor: '#000000B8',
      bottom: 1
    },
    {
      logo: AllerWellLogo,
      description: 'Designed and developed the Puritya Hair Oil product website on Shopify, focusing on UX/UI design, user research, and user flows to position it as a leading hair oil e-commerce platform.',
      mockup: AllerwellMockup,
      backgroundColor: '#8F39FF',
      textColor: '#FFFFFFB8',
      bottom: 0
    },
    {
      logo: ZugoLogo,
      description: 'Developed and designed the Zugo Fintech mobile app from scratch using Flutter, with a strong focus on product design and seamless functionality.',
      mockup: ZugoMockup,
      backgroundColor: '#2D144C',
      textColor: '#FFFFFF',
      bottom: 0
    },
  ]
  const FeatureCard = ({ index, logo, description, mockup, backgroundColor, textColor, bottom }) => {
    return (
      <div style={{ backgroundColor: backgroundColor }} className='relative md:min-h-[605px] min-h-[385px] h-full rounded-lg pb-10 pt-[30px] md:min-w-[432px] min-w-[275px] w-full lg:px-8 md:px-6 px-4 flex-1'>
        <div className='relative flex justify-start items-start'>
          <Image
            src={logo}
            alt=''
            className={`md:static md:h-[100px] h-[61px] ${index == 0 ? 'relative top-[-10px] right-[30px]' : index == 2 ? 'relative top-[-16px] right-[20px] ' : index == 1 ? 'relative top-[-6px]' : ''}`}
          />
        </div>
        <p className='md:text-base text-xs font-normal pb-20' style={{ color: textColor }}>{description}</p>
        <div className=''>
          <Image
            src={mockup}
            alt=''
            className={`w-full absolute bottom-0 right-0`}
          />
        </div>
        <div>
          <Image
            src={purityaVector}
            className='w-full'
            alt='vector'
          />
        </div>
      </div>
    )
  }
  return (
    <>
      <section className='max-w-[1440px] mx-auto '>
        <div className='md:my-20 my-10'>
          <h3 className='font-bold text-3xl md:text-[42px] md:leading-[48px] text-center font-afacad'>Featured <span className='text-[#FF0073]'>projects</span></h3>
          <p className='text-base md:text-lg text-center mt-3 max-w-[933px] mx-auto'>Explore our featured projects showcasing innovative designs and cutting-edge solutions. Each project reflects our expertise and dedication to delivering exceptional results tailored to client needs.</p>
        </div>

        <div className='flex items-stretch flex-nowrap gap-6 h-full overflow-auto scroll-for-all pb-4 '>
       


            {/* card 1 */}

          <div className='bg-[#DCA800] z-10 relative md:min-h-[605px] min-h-[385px] h-full rounded-[20px] pb-10 pt-[30px] md:min-w-[432px] min-w-[310px] w-full lg:px-8 md:px-6 px-4 flex-1 ms-8'>
            <div className='relative flex justify-start items-start'>
              <Image
                src={PurityaLogo}
                alt=''
                // className={`md:static md:h-[100px] h-[61px] ${index == 0 ? 'relative top-[-10px] right-[30px]' : index == 2 ? 'relative top-[-16px] right-[20px] ' : index == 1 ? 'relative top-[-6px]' : ''}`}
                className={`md:static md:h-[100px] h-[61px] relative top-[-10px] right-[30px]`}
              />
            </div>
            <p className='md:text-base text-sm font-normal pb-[190px] text-[#000000B8] mt-4'>Designed and developed the Puritya Hair Oil product website on Shopify, focusing on UX/UI design, user research, and user flows to position it as a leading hair oil e-commerce platform.</p>
            <div className=''>
              <Image
                src={PurityaMockup}
                width={1.98}
                height={1}
                layout='responsive'
                alt=''
                className={`w-full absolute rounded-br-[20px] bottom-6 right-0`}
              />
            </div>
            <div className='absolute top-0 left-0 z-[-20] rounded-tl-[20px]'>
              <Image
                src={purityaVector}
                className='w-full rounded-tl-[20px]'
                alt='vector'
              />
            </div>
          </div>
          {/* card 2 */}
          <div className='bg-[#2D144C] relative md:min-h-[605px] min-h-[385px]  rounded-[20px] pb-10 pt-[30px] md:min-w-[422px] min-w-[310px] w-full lg:px-8 md:px-6 px-4 flex-1'>
            <div className='relative flex justify-start items-start z-10'>
              <Image
                src={ZugoLogo}
                alt=''
                // className={`md:static md:h-[100px] h-[61px] ${index == 0 ? 'relative top-[-10px] right-[30px]' : index == 2 ? 'relative top-[-16px] right-[20px] ' : index == 1 ? 'relative top-[-6px]' : ''}`}
                className={`md:static md:h-[100px] h-[61px] relative top-[-16px] right-[20px]`}
              />
            </div>
            <p className='md:text-base text-xs font-normal pb-[190px] text-[#FFFFFF] relative z-10 mt-4'>Developed and designed the Zugo Fintech mobile app from scratch using Flutter, with a strong focus on product design and seamless functionality.</p>
            <div className=''>
              <Image
                src={ZugoMockup}
                width={1.98}
                height={1}
                layout='responsive'
                alt=''
                className={`w-full absolute bottom-[14px] right-0  z-10`}
              />
            </div>
            <div className='absolute w-full h-full top-0 left-0 right-0 z-0 object-cover rounded-[20px]'>
              <Image
                src={zugoVector}
                className='w-full h-full object-cover rounded-[20px]'
                alt='vector'
              />
            </div>
          </div>  
          {/* card 3 */}
          <div 
             style={{ background: 'linear-gradient(to top right, #FFFB00 0%, #FFCC00 100%)' }}
              className=' relative  md:min-h-[605px] min-h-[385px] bg-[] h-full rounded-[20px] pb-10 pt-[30px] md:min-w-[432px] min-w-[310px] w-full lg:px-8 md:px-6 px-4 flex-1 me-8'>
            <div className='relative flex justify-start items-start z-10'>
              <Image
                src={AllerWellLogo}
                alt=''
                // className={`md:static md:h-[100px] h-[61px] ${index == 0 ? 'relative top-[-10px] right-[30px]' : index == 2 ? 'relative top-[-16px] right-[20px] ' : index == 1 ? 'relative top-[-6px]' : ''}`}
                className={`md:static md:h-[100px] h-[61px] relative top-[-6px]`}
              />
            </div>
            <p className='md:text-base text-sm font-normal pb-[190px] text-[#000000B8] relative z-10 mt-3'>Designed and developed the Allerwell Allergy Detection and Scanning mobile app, focusing on UX/UI design, user research, and user flows to position it as a leading allergy detection platform.</p>
            <div className=''>
              <Image
                src={AllerwellMockup}
                alt='Allerwell-Mockup-image'
                width={4}
                height={3}
                layout='responsive'
                className={`w-full absolute bottom-0 right-0 rounded-br-[20px] rounded-bl-[20px]`}
              />
            </div>
            <div className='absolute top-0 left-0 z-0'>
              <Image
                src={allerAIVector}
                className='w-full'
                alt='vector'
              />
            </div>
          </div>   
        </div>
      </section>
      <section className='max-w-[1340px] mx-auto lg:mt-40 md:mt-20 mt-20'>
        <div className='mx-4 md:mx-8'>
          <div className='md:max-w-[753px] w-full mx-auto '>
            <h3 className='font-bold text-3xl md:text-[42px] md:leading-[48px] text-center font-afacad'> <span className='text-[#FF0073]'>Benefits</span> of working with us</h3>
            <p className='text-base md:text-lg text-center mt-2'>When you work with us, you get a dedicated partner committed to personalized solutions, clear communication, and great results. </p>
          </div>
          {/* <div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:flex-none flex flex-row flex-nowrap  w-full md:mt-6 mt-4 overflow-x-auto services-scroll pb-10 md:pb-0 px-8'> */}
          <div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:flex-none flex flex-row flex-nowrap  w-full md:mt-10 mt-10 overflow-x-auto services-scroll pb-10 md:pb-0  '>
            {data.map((item, index) => (
              <div key={index}>
                <Card
                  icons={item?.icon}
                  title={item?.title}
                  description={item?.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='max-w-[1440px] mx-auto mt-40 mb-40'>
        <div className='relative h-[423px] z-10'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[300px] md:w-[413px]'>
            <Image
              src={Circles}
              alt="rounder circles"
              className="w-[300px] md:w-[413px]"
            />
          </div>
          <div className='flex flex-col justify-center items-center h-full relative z-10'>
            <h6 className='text-[36px] leading-[46px] font-bold font-afacad'>We&apos;ll reply in 24 hrs</h6>
            <p className='text-lg py-6 '>Book a call in via our calendar here</p>
            {/* <button className='flex items-center gap-1 px-6 py-3 font-bold bg-[#FF0073] cursor-pointer hover:bg-hover-gradient transition-all duration-300 rounded-[30px]'>chat with us
              <Image
                src={Arrow}
                alt='arrow'
                className='w-[18px]'
              />
            </button> */}
            <Button>Book Call</Button>
          </div>
        </div>
      </section>
      <section className='max-w-[1440px] mx-auto mt-20 md:pb-20 pb-10'>
        <div>
          <h6 className='font-bold md:text-[40px] md:leading-[46px] text-3xl text-center font-afacad'>We have <span className='text-brand'>expertise</span> in the most <span className='text-brand'>popular tech</span> stacks & tools</h6>
          <p className='text-center text-base md:text-lg mt-3'>Our team has expertise in most the popular tools and
            <br className='' />
            programming languages.</p>
        </div>

        {/* <div className='flex flex-wrap items-center justify-center  gap-x-[60px]  gap-y-1 md:gap-y-2  lg:gap-y-8 lg:text-[40px] text-[32px] leading-[64px] mx-4 mt-20'>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>Cloud</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>Adobe XD</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>Jitter</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>Figma</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>Framer</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>Webflow</div>
          <div className='hover:font-semibold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>Lottiefiles</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>Java</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>React</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>.NET</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>Flutter</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>Python</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>Tailwind CSS</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>Angular</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>Android</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>IOS</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>Node.Js</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>Vue.Js</div>
          <div className='hover:font-bold hover:text-[#FF0073] transition-all duration-300 cursor-pointer'>JavaScript</div>
        </div> */}
         <Technology show={false}/>
      </section>








      {/* <section id="What-you-get" className='max-w-[1440px] mx-auto my-20 '>
        <div className='flex justify-between items-center bg-[#D6D6D61A] w-full lg:py-20 lg:px-20 md:py-14 md:px-14  px-8 py-8'>
          <div className='font-afacad'>
            <p className='lg:text-5xl md:text-3xl text-2xl font-bold'>What you get</p>
            <h2 className='lg:leading-[140px] lg:text-[114px] md:leading-[89px] md:text-[64px] leading-[48px] text-[36px] font-bold text-[#FF0073]'>Design</h2>
            <h2 className='lg:leading-[140px] lg:text-[114px] md:leading-[89px] md:text-[64px] leading-[48px] text-[36px] font-bold'>Devlope</h2>
            <h2 className='lg:leading-[140px] lg:text-[114px] md:leading-[89px] md:text-[64px] leading-[48px] text-[36px] font-bold'>Live..</h2>
          </div>
          <div>
            <Image
              src={Video2}
              alt={Video2}
              className="lg:w-[547px] md:w-[331px] w-[182px]"
            />
          </div>
        </div>
      </section> */}

    </>

  )
}

export default FeturedAndBenifts