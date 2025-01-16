import React from 'react'
import { BlogImage, homeBlog1, homeBlog2, homeBlog3, ReadMoreArrow } from '@/utils/constants/constant'
import Image from 'next/image'
import Link from 'next/link'

const data = [
    {
        title: 'How to create a website',
        authour: '',
        publishDate: '2021-10-10',
        category: 'https://via.placeholder.com/150',
        image: 'https://via.placeholder.com/150',
        description: 'https://via.placeholder.com/150'
    },
    {
        title: 'How to create a website',
        authour: '',
        publishDate: '2021-10-10',
        category: 'https://via.placeholder.com/150',
        image: 'https://via.placeholder.com/150',
        description: 'https://via.placeholder.com/150'
    },
    {
        title: 'How to create a website',
        authour: '',
        publishDate: '2021-10-10',
        category: 'https://via.placeholder.com/150',
        image: 'https://via.placeholder.com/150',
        description: 'https://via.placeholder.com/150'
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
                        <button className='px-6 py-3 rounded-[30px] bg-brand text-white font-semibold'>
                             view blogs
                        </button>
                    </div>
                </div>
                <div className='grid md:flex md:overflow-auto lg:grid-cols-3 grid-cols-1 gap-7 mx-8 mt-10 md:mt-11'>
                    {data.map(() => (
                        <div className='md:min-w-[350px] lg:w-full'>
                            {/* <Image src={homeBlog1} alt={"homeBlog1"} className="w-full" /> */}
                            <div className='relative'>
                                <Image
                                    className='h-[280px] w-full object-fit rounded-[20px]'
                                    src={BlogImage}
                                    alt='blog image'
                                    width={400}
                                    height={280}
                                />
                                <div className='absolute bottom-0 left-0 right-0 w-full h-14 bg-[#FFFFFF30] backdrop-blur-md rounded-b-[20px]'>
                                    <div className='flex justify-between items-center h-full w-full px-6'>
                                        <div className='flex flex-col'>
                                            <span className='text-sm font-semibold'>By Gunpowder Innovations</span>
                                            <span className='text-sm'>20 Jan 2025</span>
                                        </div>
                                        <div>Design</div>
                                    </div>
                                </div>
                            </div>
                            <h6 className='font-semibold lg:text-2xl text-xl mt-9'>Mobile Apps Design: The Secret to Retention and User Engagement</h6>
                            <p className='text-base font-normal mt-2'>Emphasizing user experience (UX) and usefulness, mobile app design has changed drastically. Companies have to make sure their apps offer simple, z</p>
                            <div className='flex items-center text-brand font-semibold mt-6' href='/blog/1'>
                                <Link href={`/blog/123`}>Read post</Link>
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