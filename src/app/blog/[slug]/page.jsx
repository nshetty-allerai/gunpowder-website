import { ArrowCross, Blog1, Blog2, BlogImage, BlogPageGradientLeft, BlogPageGradientRight, CopyIcon, DemoProfile, FacebookIcon, HomeIcon, LinkedinIcon, TwitterIcon } from '@/utils/constants/constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { fetchEntryBySlug, formatContentfulData } from '@/utils/utils/utils';
import CopyButton from '@/components/blog/CopyButton';

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  // Decode and clean the slug
  const cleanedSlug = decodeURIComponent(slug).replace(/%2B/g, '+');

  // Fetch blog entry by slug
  const response = await fetchEntryBySlug(cleanedSlug);
  const data = await formatContentfulData(response);

  // Construct page URL
  const pageUrl = `http://localhost:3000/blog/${encodeURIComponent(cleanedSlug)}`;

  // console.log("Generated Metadata:", 
  //   {
  //   title: data.title,
  //   description: data.shortDescription || "Read this amazing blog post!",
  //   url: pageUrl,
  // });

  // Return metadata
  return {
    title: data.title,
    description: data.shortDescription || "Read this amazing blog post!",
    openGraph: {
      title: data.title,
      description: data.shortDescription || "Read this amazing blog post!",
      url: pageUrl,
      images: [
        {
          url: data.imageUrl || "https://example.com/default-og-image.jpg",
          width: 800,
          height: 600,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.shortDescription || "Read this amazing blog post!",
      images: [data.imageUrl || "https://example.com/default-og-image.jpg"],
    },
  };
};



const page = async ({ params }) => {

  const { slug } = params;

  const cleanedSlug = decodeURIComponent(slug).replace(/%2B/g, '+');

  const response = await fetchEntryBySlug(cleanedSlug);

  const data = await formatContentfulData(response);
  // console.log(data)




  const fetchCategory = async () => {
    const url = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries`;
    // let resolvedData
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
      let resolvedData = apiResponse.items.map((item) => {
        // Resolve the image from includes
        const imageId = item.fields.image?.sys?.id;
        const imageAsset = apiResponse.includes.Asset.find(
          (asset) => asset.sys.id === imageId
        );

        const authorImageId = item.fields.authourProfile?.sys?.id;
        const authorImageAsset = apiResponse.includes.Asset.find(
          (asset) => asset.sys.id === authorImageId
        );

        return {
          ...item?.fields,
          imageUrl: imageAsset?.fields?.file?.url
            ? `https:${imageAsset?.fields?.file?.url}`
            : null,
          authourProfile: authorImageAsset?.fields?.file?.url
            ? `https:${authorImageAsset?.fields?.file?.url}`
            : null,

        };
      });
      return resolvedData
    } catch (error) {

    }
  }


  const blogs = await fetchCategory()

  // console.log(blogs)





  return (
    <section>
      {/* <pre>{JSON.stringify(response, null, 2)}</pre> */}
      <div className='max-w-[1440px] mx-auto px-8 relative'>
        <div className='relative z-10 flex items-center gap-3 mt-6'>
          <Link href="/">
            <Image
              src={HomeIcon}
              className='w-5'
              alt='home icon'
            />
          </Link>
          <span>/ <Link href="/blog" className='font-semibold text-brand text-sm font-afacad'>Blogs</Link></span>
          <span>/ <span className='font-semibold text-brand text-sm font-afacad'>{slug.replace(/%2B/g, ' ')}</span></span>
        </div>
        <div className='relative z-10 lg:mt-[112px] mt-[44px]'>
          <h1 className='text-white font-semibold lg:text-6xl md:text-5xl text-4xl pt-4'>{data?.title}</h1>
          {/* <h6 className='lg:text-xl text-lg lg:mt-6 mt-4'>How do you create compelling presentations that wow your colleagues and impress your managers?</h6> */}
          <div className='mt-16'>
            {/* <Image
              src={BlogImage}
              className='md:h-[516px] h-[240px] w-full object-cover rounded-[26px]'
              alt='blog image'
            /> */}
            <Image
              src={data?.imageUrl}
              className='md:h-[516px] h-[240px] w-full object-cover rounded-[26px]'
              alt='blog image'
              height={516}
              width={400}
            />
          </div>
          <div className='flex justify-between items-center my-8'>
            <div className='flex gap-16'>
              <div className='flex flex-col'>
                <span className='text-brand font-semibold text-sm'>Written by</span>
                <span className='text-lg font-medium text-white'>{data?.author}</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-brand font-semibold text-sm'>Published on</span>
                <span className='text-lg font-medium text-white'>{data?.publishDate}</span>
              </div>
            </div>
            {/* <div className='hidden lg:flex gap-3'>
              <div className='flex items-center cursor-pointer gap-2 border border-brand rounded-lg px-4 py-2 bg-[#FF00732E] font-semibold text-brand'>
                <Image
                  src={CopyIcon}
                  className='w-4 h-4'
                  alt='author image'
                />
                <span className='text-sm'>Copy link</span>
              </div>
              <div className='flex gap-3'>
                <Image
                  src={TwitterIcon}
                  className='h-full w-auto'
                  alt='twitter icon'
                />
                <Image
                  src={FacebookIcon}
                  className='h-full w-auto'
                  alt='facebook icon'
                />
                <Image
                  src={LinkedinIcon}
                  className='h-full w-auto'
                  alt='linkedin icon'
                />
              </div>
            </div> */}
            <CopyButton />
          </div>
          {/* <div className='max-w-[720px] mx-auto lg:mb-[97px] mb-[64px]'>
            <h3 className='font-semibold md:text-3xl text-2xl'>Introduction</h3>
            <p className='lg:text-lg text-base mt-4'>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
            <p className='lg:text-lg text-base mt-4'>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.</p>
            <Image
              src={Blog1}
              alt='blog image'
              className='w-full md:h-[480px] h-[240px] object-cover rounded-xl my-9'
            />
            <p className='lg:text-lg text-base mt-4'>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p>
            <p className='lg:text-lg text-base mt-4'>
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
            </p>
            <p className='lg:text-lg text-base mt-4'>
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
            </p>
            <p className='lg:text-lg text-base mt-4'>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
            </p>
            <h6 className='font-semibold md:text-2xl text-xl my-7'>Software and tools</h6>
            <p className='lg:text-lg text-base'>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
            </p>
            <p className='lg:text-lg text-base mt-4'>
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
            </p>
            <h6 className='font-semibold md:text-2xl text-xl my-7'>Other resources</h6>
            <p className='lg:text-lg text-base'>
              Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
            </p>
            <Image
              src={Blog2}
              alt='blog image'
              className='w-full md:h-[480px] h-[240px] object-cover rounded-xl my-9'
            />
            <p className='lg:text-lg text-base'>
              Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.
            </p>
            <p className='lg:text-lg text-base mt-4'>
              Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
            </p>
          </div> */}

          <div className='pb-14 bg-transparent text-white' dangerouslySetInnerHTML={{ __html: data?.description }}></div>
          <div className='hidden lg:block'>
            <div className='border-t border-[#EAECF0]'></div>
            <div className='grid grid-cols-3 gap-10 p-20'>
              <div>
                <span className='text-brand font-semibold text-base'>Latest</span>
                <h6 className='text-4xl text-white font-semibold mt-3'>From the blogs</h6>
                <p className='text-lg mt-5'>The latest industry news, interviews, technologies, and resources.</p>
                <Link href='/blog' className='px-5 py-3 bg-brand text-white font-semibold text-base rounded-lg mt-10 block w-fit'>View all posts</Link>
              </div>
              {blogs && blogs.slice(0, 2).map((item, index) => (
                <Link
                  href={`/blog/${item?.slug}`}
                  className='block cursor-pointer'
                  key={item?.slug}
                >
                  <Image
                    src={item?.imageUrl}
                    alt='blog image'
                    className='w-full h-[240px] object-cover rounded-xl'
                    width={400}
                    height={240}
                  />
                  <div className='flex gap-1 items-center bg-white w-fit py-1 ps-1  rounded-2xl mt-9'>
                    <span className='px-2 py-0.5 bg-brand text-white rounded-2xl text-[12px] leading-4 '>{item?.type}</span>
                    <span className='px-2 py-0.5 text-brand text-[12px] leading-4'>{item?.readTime}</span>
                  </div>
                  <div className='flex gap-2 justify-between'>
                    <h6 className='font-semibold text-2xl mt-4'>{item?.title}</h6>
                    <Image
                      src={ArrowCross}
                      alt='blog image'
                      className='w-6 shrink-0'
                    />
                  </div>
                  {/* <p className='mt-2'>How do you create compelling presentations that wow your colleagues and impress your managers?</p> */}
                  <div className='flex items-center gap-3 mt-6'>
                    <div>
                      {/* <Image
                          src={DemoProfile}
                          alt='blog image'
                          className='w-10 h-10 rounded-full'
                        /> */}
                      <Image
                        src={item?.authourProfile}
                        alt='blog image'
                        className='w-10 h-10 rounded-full'
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className='flex flex-col text-sm'>
                      <span>{item?.authour}</span>
                      <span>{item?.publishDate}</span>
                    </div>
                  </div>
                </Link>))}
            </div>
          </div>
        </div>
        <div>
          <Image
            src={BlogPageGradientRight}
            alt='blog page gradient right'
            className='absolute top-0 right-0 z-0'
          />
          <Image
            src={BlogPageGradientLeft}
            alt='blog page gradient left'
            className='absolute bottom-0 left-0 z-0'
          />
          {/* <Image
            src={BlogPageGradientRight}
            alt='blog page gradient right'
            className='absolute bottom-0 right-0 z-0'
          />
          <Image
            src={BlogPageGradientLeft}
            alt='blog page gradient left'
            className='absolute bottom-0 left-0 z-0'
          /> */}
        </div>
      </div>
      {/* <pre>{JSON.stringify(blogs, null, 2)}</pre> */}
    </section>
  )
}

export default page