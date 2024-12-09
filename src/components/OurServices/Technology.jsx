import React from 'react'
import { PhotoShop, ReactIcon,FigmaIcon,JavaScriptIcon ,FlutterIcon,AndroidIcon ,NextJsIcon,FramerIcon,
    PythonIcon,DaisyUIIcon,WebFlowIcon,TailwindIcon,IOSIcon,CSSIcon,ShophifyIcon,VueIcon } from '@/utils/constants/constant'
import Image from 'next/image'


const data = [
    {
        icon: PhotoShop,
        technology: 'Photoshop'
    },
    {
        icon: ReactIcon,
        technology: 'React'
    },
    {
        icon: FigmaIcon,
        technology: 'Figma'
    },
    {
        icon: JavaScriptIcon,
        technology: 'JavaScript'
    },
    {
        icon: FlutterIcon,
        technology: 'Flutter'
    },
    {
        icon: AndroidIcon,
        technology: 'Android'
    },
    {
        icon: NextJsIcon,
        technology: 'Next.Js'
    },
    {
        icon: FramerIcon,
        technology: 'Framer'
    },
    {
        icon: PythonIcon,
        technology: 'Python'
    },
    {
        icon: DaisyUIIcon,
        technology: 'Daisy UI'
    },
    {
        icon: WebFlowIcon,
        technology: 'Webflow'
    },
    {
        icon: TailwindIcon,
        technology: 'Tailwind CSS'
    },
    {
        icon: IOSIcon,
        technology: 'iOS'
    },
    {
        icon: CSSIcon,
        technology: 'CSS'
    },
    {
        icon: ShophifyIcon,
        technology: 'Shopify'
    },
    {
        icon: VueIcon,
        technology: 'Vue.Js'
    },
]
const Card = ({icon ,technology}) => {
    return (
        <div className='border border-[#FF0073] hover:bg-[#FF00732B] transition-all duration-300 cursor-pointer py-2 px-4 rounded-[66px] flex items-center gap-3'>
            <Image
                src={icon}
                className=""
                alt=""
            />
            <span className='text-2xl font-semibold'>
                {technology}
            </span>
        </div>
    )
}

const Technology = () => {
    return (
        <section className="max-w-[1440px] mx-auto lg:my-20 md:my-10 my-10">
            <div >
                <h5 className='text-center font-bold md:text-[40px] md:leading-[46px] text-3xl font-afacad'>Technologies & Tools</h5>
                <p className='text-center text-lg mt-4'>Tools and we use to get the job done.</p>
            </div>
            <div className='flex flex-wrap items-center justify-center md:gap-x-12 gap-x-3 gap-y-3 md:gap-y-12 mt-9'>
                {data.map((item, index) => (
                    <div key={index}>
                        <Card
                        icon={item?.icon}
                        technology={item?.technology}
                    />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Technology