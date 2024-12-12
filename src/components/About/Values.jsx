import Image from 'next/image'
import React from 'react'
import { AboutValue1, AboutValue2, AboutValue3, AboutValue4, AboutValue5, AboutValue6, CardBackground ,Commited, ValueSectionBackground} from '@/utils/constants/constant'
// AboutValue2,AboutValue3,AboutValue4,AboutValue5,AboutValue6
const Values = () => {
  return (
    <section className='max-w-[1440px] mx-auto pt-20 lg:pt-10'>
        <div>
            <h3 className='font-bold font-afacad text-[40px] leading-[46px] text-center'>Our Core <span className='text-brand'>Values</span></h3>
            <p className='md:text-lg text-base text-center px-4 mt-4 mb-8 max-w-[633px] mx-auto'>Just some of the value that we bring into our partnership with you…            </p>
            <div className='flex flex-nowrap scroll-for-all mx-4 pb-8 md:mx-8 lg:mx-8 overflow-x-auto items-center gap-6 lg:grid grid-cols-2'>
            
            
            

                {/* card 1 */}
                <div className='border h-[197px] border-brand relative rounded-[37px] bg-[#FF00732E] md:min-w-[668px] min-w-[390px] w-full lg:min-w-0 lg:w-auto'>
                    <div className='flex items-center h-full md:gap-10 gap-7'>
                        <div className=' md:w-[30%] w-[35%]'>
                            <Image 
                                src={Commited}
                                className='w-[139px] md:w-auto'
                                alt='bg'
                            />
                        </div>
                        <div className='md:w-[70%] w-[65%] my-auto md:pr-6 pr-4 ps-3'>
                            <h2 className='md:text-[32px] md:leading-[42px] text-2xl font-semibold'>Committed</h2>
                            <p className='md:text-lg text-base mt-4'>We provide quality and on-time delivery, consistently exceeding client expectations.</p>
                        </div>
                    </div>
                    <Image
                        src={CardBackground}
                        className='hidden md:block absolute w-[200px] top-0 left-0 rounded-l-[37px]'
                        alt='bg'
                    />
                    <Image
                        src={ValueSectionBackground}
                        className='md:hidden absolute w-[130px] h-full top-0 left-0 rounded-l-[37px]'
                        alt='bg'
                    />
                </div>
               {/* card 2 */}
               <div className='border h-[197px] border-brand relative rounded-[37px] bg-[#FF00732E] md:min-w-[668px] min-w-[400px] w-full lg:min-w-0 lg:w-auto'>
                    <div className='flex items-center h-full md:gap-10 gap-7'>
                        <div className=' md:w-[30%] w-[35%]'>
                            <Image 
                                src={AboutValue2}
                                className='w-[139px] md:w-auto'
                                alt='bg'
                            />
                        </div>
                        <div className='md:w-[70%] w-[65%] my-auto md:pr-6 pr-4 ps-3'>
                            <h2 className='md:text-[32px] md:leading-[42px] text-2xl font-semibold'>Innovation First </h2>
                            <p className='md:text-lg text-base mt-4'>We create innovative solutions that push boundaries and give you a competitive edge.</p>
                        </div>
                    </div>
                    <Image
                        src={CardBackground}
                        className='hidden md:block absolute w-[200px] top-0 left-0 rounded-l-[37px]'
                        alt='bg'
                    />
                    <Image
                        src={ValueSectionBackground}
                        className='md:hidden absolute w-[130px] h-full top-0 left-0 rounded-l-[37px]'
                        alt='bg'
                    />
                </div>
                 {/* card 3 */}
                 <div className='border h-[197px] border-brand relative rounded-[37px] bg-[#FF00732E] md:min-w-[668px] min-w-[400px] w-full lg:min-w-0 lg:w-auto'>
                    <div className='flex items-center h-full md:gap-10 gap-7'>
                        <div className=' md:w-[30%] w-[35%] h-full relative'>
                            <Image 
                                src={AboutValue3}
                                className='absolute bottom-0 w-[142px] md:w-auto'
                                alt='bg'
                            />
                        </div>
                        <div className='md:w-[70%] w-[65%] my-auto md:pr-6 pr-4 ps-3'>
                            <h2 className='md:text-[32px] md:leading-[42px] text-2xl font-semibold'>Transparency</h2>
                            <p className='md:text-lg text-base mt-4'>Open communication and honesty are at the heart of every interaction we have.</p>
                        </div>
                    </div>
                    <Image
                        src={CardBackground}
                        className='hidden md:block absolute w-[200px] top-0 left-0 rounded-l-[37px]'
                        alt='bg'
                    />
                    <Image
                        src={ValueSectionBackground}
                        className='md:hidden absolute w-[130px] h-full top-0 left-0 rounded-l-[37px]'
                        alt='bg'
                    />
                </div>
                 {/* card 4 */}
                 <div className='border h-[197px] border-brand relative rounded-[37px] bg-[#FF00732E] md:min-w-[668px] min-w-[400px] w-full lg:min-w-0 lg:w-auto'>
                    <div className='flex items-center h-full md:gap-10 gap-7'>
                        <div className=' md:w-[30%] w-[35%] h-full relative'>
                            <Image 
                                src={AboutValue4}
                                className='w-[142px] md:w-auto absolute bottom-0'
                                alt='bg'
                            />
                        </div>
                        <div className='md:w-[70%] w-[65%] my-auto md:pr-6 pr-4 ps-3'>
                            <h2 className='md:text-[32px] md:leading-[42px] text-2xl font-semibold'>Collaboration</h2>
                            <p className='md:text-lg text-base mt-4'>We collaborate with you, not just for you, to achieve shared goals and mutual success.</p>
                        </div>
                    </div>
                    <Image
                        src={CardBackground}
                        className='hidden md:block absolute w-[200px] top-0 left-0 rounded-l-[37px]'
                        alt='bg'
                    />
                    <Image
                        src={ValueSectionBackground}
                        className='md:hidden absolute w-[130px] h-full top-0 left-0 rounded-l-[37px]'
                        alt='bg'
                    />
                </div>
                {/* card 5 */}
                <div className='border h-[197px] border-brand relative rounded-[37px] bg-[#FF00732E] md:min-w-[668px] min-w-[480px] w-full lg:min-w-0 lg:w-auto'>
                    <div className='flex items-center h-full md:gap-10 gap-7'>
                        <div className=' md:w-[30%] w-[35%] relative h-full'>
                            <Image 
                                src={AboutValue5}
                                className='w-[139px] md:w-auto absolute bottom-0'
                                alt='bg'
                            />
                        </div>
                        <div className='md:w-[70%] w-[65%] my-auto md:pr-6 pr-4 ps-3'>
                            <h2 className='md:text-[32px] md:leading-[42px] text-2xl font-semibold'>Customer-Focused</h2>
                            <p className='md:text-lg text-base mt-4'>Your satisfaction drives everything we do. We focus on understanding your needs, exceeding expectations, and delivering impactful results.</p>
                        </div>
                    </div>
                    <Image
                        src={CardBackground}
                        className='hidden md:block absolute w-[200px] top-0 left-0 rounded-l-[37px]'
                        alt='bg'
                    />
                    <Image
                        src={ValueSectionBackground}
                        className='md:hidden absolute w-[130px] h-full top-0 left-0 rounded-l-[37px]'
                        alt='bg'
                    />
                </div>
                 {/* card 6 */}
                 <div className='border h-[197px] border-brand relative rounded-[37px] bg-[#FF00732E] md:min-w-[668px] min-w-[400px] w-full lg:min-w-0 lg:w-auto'>
                    <div className='flex items-center h-full md:gap-10 gap-7'>
                        <div className=' md:w-[30%] w-[35%]'>
                            <Image 
                                src={AboutValue6}
                                className='w-[139px] md:w-auto'
                                alt='bg'
                            />
                        </div>
                        <div className='md:w-[70%] w-[65%] my-auto md:pr-6 pr-4 ps-3'>
                            <h2 className='md:text-[32px] md:leading-[42px] text-2xl font-semibold'>Impact-Driven</h2>
                            <p className='md:text-lg text-base mt-4'>We create innovative solutions that make a real and meaningful impact.</p>
                        </div>
                    </div>
                    <Image
                        src={CardBackground}
                        className='hidden md:block absolute w-[200px] top-0 left-0 rounded-l-[37px]'
                        alt='bg'
                    />
                    <Image
                        src={ValueSectionBackground}
                        className='md:hidden absolute w-[130px] h-full top-0 left-0 rounded-l-[37px]'
                        alt='bg'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values