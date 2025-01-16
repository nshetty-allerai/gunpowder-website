import React from 'react'
import { BlogImage, homeBlog1,homeBlog2,homeBlog3, ReadMoreArrow } from '@/utils/constants/constant'
import Image from 'next/image'
import Link from 'next/link'

const data = [
    {
        title: 'Mobile Apps Design: The Secret to Retention and User Engagement',
        authour: 'By Gunpowder Innovations',
        publishDate: '15 Jan 2025',
        category: 'https://via.placeholder.com/150',
        image: homeBlog1,
        description: 'Emphasizing user experience (UX) and usefulness, mobile app design has changed drastically. Companies have to make sure their apps offer simple, z'
    },
    {
        title: 'Software Development Integration with Mobile App Design',
        authour: 'By Gunpowder Innovations',
        publishDate: '10 Jan 2025',
        category: 'https://via.placeholder.com/150',
        image: homeBlog2,
        description: 'Successful digital products are created by hand-in-hand software development and mobile app design. While mobile app design brings the technical foundation of the app to life with an interesting and simple user interface, software development concentrates on constructing it. In a competitive market, these components are vital for an app to succeed. While beautiful software with underlying performance problems might create dissatisfaction, a well-developed app with poor design can fail to draw the attention of customer. Combining careful mobile app design with robust software development guarantees that the result offers a flawless experience by guaranteeing both functional and joyful use of the product.ur colleagues and impress your managers?'
    },
    {
        title: 'Personalized Software to Address Unique Corporate Requirements',
        authour: 'By Gunpowder Innovations',
        publishDate: '07 Jan 2025',
        category: 'https://via.placeholder.com/150',
        image: homeBlog3,
        description: 'Custom software solutions catered to their particular requirements are needed by many companies, so the knowledge of software developers becomes more important. Custom software development is crucial for preserving a competitive edge since off-the-shelf programs might not meet the particular difficulties a company faces. Working with seasoned software development teams helps companies develop solutions that fit their objectives, streamline procedures, and stimulate expansion. Designed to handle particular challenges, custom software provides more scalability and flexibility than generic answers. Software development is a major component in opening new prospects and improving operational efficiency for companies aiming at innovation.ur colleagues and impress your managers?'
    }
]
const BlogForHomePages = () => {
    return (
        <section className='mb-[90px]'>
            <div className='max-w-[1280px] mx-auto'>
                <div className='flex justify-between mx-8'>
                    <div>
                        <h2 className='text-[40px] leading-[44px] font-semibold'>Latest blog posts</h2>
                        <p className='lg:text-xl mt-5'>Tool and strategies modern teams need to help their companies grow.</p>
                    </div>
                    <div className='hidden md:block'>
                        <Link href={'/blog'}>
                            <button className='px-6 py-3 rounded-[30px] bg-brand text-white font-semibold'>
                                View Blogs
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='grid md:flex md:overflow-auto lg:grid-cols-3 grid-cols-1 gap-7 mx-8 mt-10 md:mt-11'>
                    {data.map((item,index) => (
                        <div key={index} className='md:min-w-[350px] lg:w-full'>
                            {/* <Image src={homeBlog1} alt={"homeBlog1"} className="w-full" /> */}
                            <div className='relative'>
                                <Image
                                    className='h-[280px] w-full object-fit rounded-[20px]'
                                    src={item?.image}
                                    alt='blog image'
                                    width={400}
                                    height={280}
                                />
                                <div className='absolute bottom-0 left-0 right-0 w-full h-[88px] bg-[#FFFFFF30] backdrop-blur-md rounded-b-[20px]'>
                                    <div className='flex justify-between items-center h-full w-full px-6'>
                                        <div className='flex flex-col'>
                                            <span className='text-sm font-semibold'>{item?.authour}</span>
                                            <span className='text-sm'>{item?.publishDate}</span>
                                        </div>
                                        <div>Design</div>
                                    </div>
                                </div>
                            </div>
                            <h6 className='font-semibold lg:text-2xl text-xl mt-9'>{item?.title}</h6>
                            <p className='text-base font-normal mt-2'>{item?.description.slice(0,109)}...</p>
                            <div className='flex items-center text-brand font-semibold mt-6' href='/blog/1'>
                                <Link href={`/blog`}>Read post</Link>
                                <Image
                                    src={ReadMoreArrow}
                                    className='w-5 h-5'
                                    alt='read more arrow'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogForHomePages