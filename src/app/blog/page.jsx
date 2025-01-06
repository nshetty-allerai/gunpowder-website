import { HomeIcon, PrevArrow, ReadMoreArrow } from '@/utils/constants/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BlogImage } from '@/utils/constants/constant'

const page = async () => {

    const url = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries`;
    let resolvedData
    try {
        const res = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
            },
        });
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        // Parse the JSON response
        const apiResponse = await res.json();
        // Format the response
         resolvedData = apiResponse.items.map((item) => {
            // Resolve the image from includes
            const imageId = item.fields.image?.sys?.id;
            const imageAsset = apiResponse.includes.Asset.find(
                (asset) => asset.sys.id === imageId
            );
            return {
                ...item.fields,
                imageUrl: imageAsset?.fields.file.url
                    ? `https:${imageAsset.fields.file.url}`
                    : null,
            };
        });
    } catch (error) {

    }

    return (
        <section>
            {/* <pre>{JSON.stringify(resolvedData, null, 2)}</pre> */}
            <div className='max-w-[1440px] mx-auto px-8'>
                <div className='relative z-10 flex items-center gap-3 mt-6'>
                    <Link href="/">
                        <Image
                            src={HomeIcon}
                            className='w-5'
                            alt='home icon'
                        />
                    </Link>
                    <span>/ <Link href="/blog" className='font-semibold text-brand text-sm font-afacad'>Blogs</Link></span>
                </div>
                <div className='mb-[64px] lg:mb-[84px] lg:mt-10 mt-[50px]'>
                    <div className='font-semibold text-brand text-sm font-afacad'>Blogs</div>
                    <div className='font-semibold text-white text-4xl lg:text-6xl mt-3 font-afacad'>Blogs</div>
                </div>

                <div className='hidden lg:flex flex-wrap mb-[64px]'>
                    <div className='shrink-0 px-3.5 py-2.5 text-white bg-brand font-semibold rounded-[32px] me-3 cursor-pointer'>
                        View all
                    </div>
                    {/* <div className='shrink-0 px-3.5 py-2.5 text-white bg-transparent font-semibold rounded-[32px] me-3 cursor-pointer'>
                        Design
                    </div> */}
                </div>
                <div className='lg:hidden mb-[48px]'>
                    <select className='w-full rounded-lg px-3.5 py-2.5 font-semibold text-[#101828]'>
                        <option value=''>View all</option>
                        {/* <option value=''>Design</option> */}
                    </select>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                    {/* {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index}>
                            <div className='relative'>
                                <Image
                                    className='md:h-[280px] h-[230px] w-full object-cover rounded-[20px]'
                                    src={BlogImage}
                                    alt='blog image'
                                />
                                <div className='absolute bottom-0 left-0 right-0 w-full h-14 bg-[#FFFFFF30] backdrop-blur-md rounded-b-[20px]'>
                                    <div className='flex justify-between items-center h-full w-full px-6'>
                                        <div className='flex flex-col'>
                                            <span className='text-sm font-semibold'>Sanket A</span>
                                            <span className='text-sm'>20 Jan 2025</span>
                                        </div>
                                        <div>Design</div>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:mt-8 mt-6'>
                                <h6 className='font-semibold lg:text-2xl text-xl'>UX review presentations</h6>
                                <p className='text-base font-normal mt-2'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                                <Link className='flex items-center text-brand font-semibold mt-6' href='/blog/1'>
                                    <span>Read post</span>
                                    <Image
                                        src={ReadMoreArrow}
                                        className='w-5 h-5'
                                        alt='read more arrow'
                                    />
                                </Link>
                            </div>
                        </div>))} */}
                    {resolvedData&&resolvedData.map((item, index) => (
                        <div key={index}>
                            <div className='relative'>
                                <Image
                                    className='md:h-[280px] h-[230px] w-full object-cover rounded-[20px]'
                                    src={item?.imageUrl || BlogImage}
                                    alt='blog image'
                                    width={400}
                                    height={280}
                                />
                                 {/* <Image
                                    className='md:h-[280px] h-[230px] w-full object-cover rounded-[20px]'
                                    src={BlogImage}
                                    alt='blog image'
                                /> */}
                                <div className='absolute bottom-0 left-0 right-0 w-full h-14 bg-[#FFFFFF30] backdrop-blur-md rounded-b-[20px]'>
                                    <div className='flex justify-between items-center h-full w-full px-6'>
                                        <div className='flex flex-col'>
                                            <span className='text-sm font-semibold'>{item?.authour}</span>
                                            <span className='text-sm'>{item?.publishDate}</span>
                                        </div>
                                        <div>{item?.type}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:mt-8 mt-6'>
                                <h6 className='font-semibold lg:text-2xl text-xl'>
                                    {item?.title?.length > 40 ? `${item?.title?.slice(0, 40)}...` : item?.title}
                                </h6>
                                <p className='text-base font-normal mt-2'>
                                    {item?.shortDescription}
                                    {/* {item?.description?.content?.[0]?.content?.[0]?.value?.slice(0, 220)} */}
                                </p>
                                <Link className='flex items-center text-brand font-semibold mt-6' href='/blog/1'>
                                    <Link href={`/blog/${item?.slug}`}>Read post</Link>
                                    <Image
                                        src={ReadMoreArrow}
                                        className='w-5 h-5'
                                        alt='read more arrow'
                                    />
                                </Link>
                            </div>
                        </div>))}
                </div>
                <div className='w-full border-t border-[#EAECF0] mt-12 lg:mb-[96px] mb-[78px]'>
                    <div className='flex items-center justify-between py-6'>
                        <div className='flex items-center gap-2 font-semibold text-brand text-sm border border-brand rounded-lg px-3.5 py-2.5 cursor-pointer'>
                            <Image
                                src={PrevArrow}
                                className='w-[18px]'
                                alt='home icon'
                            />
                            <span className='lg:inline-block hidden'>Previous</span>
                        </div>
                        <div className='hidden lg:flex items-center justify-center gap-1'>
                            <span className='px-4 py-2.5 rounded-lg border border-brand text-sm font-medium text-brand cursor-pointer'>1</span>
                            {/* <span className='px-4 py-2.5 rounded-l text-sm font-medium cursor-pointer'>2</span>
                            <span className='px-4 py-2.5 rounded-l text-sm font-medium cursor-pointer'>3</span>
                            <span className='px-4 py-2.5 rounded-l text-sm font-medium cursor-pointer'>4</span>
                            <span className='px-4 py-2.5 rounded-l text-sm font-medium cursor-pointer'>...</span>
                            <span className='px-4 py-2.5 rounded-l text-sm font-medium cursor-pointer'>8</span>
                            <span className='px-4 py-2.5 rounded-l text-sm font-medium cursor-pointer'>9</span>
                            <span className='px-4 py-2.5 rounded-l text-sm font-medium cursor-pointer'>10</span> */}
                        </div>
                        <div className='lg:hidden text-sm text-[#344054]'>
                            Page 1 of 1
                        </div>
                        <div className='flex items-center gap-2 font-semibold text-brand text-sm border border-brand rounded-lg px-3.5 py-2.5 cursor-pointer'>
                            <span className='lg:inline-block hidden'>Next</span>
                            <Image
                                src={PrevArrow}
                                className='w-[18px] rotate-180'
                                alt='home icon'
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page