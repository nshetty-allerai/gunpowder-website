import { HomeIcon } from '@/utils/constants/constant'
import Image from 'next/image'
import React from 'react'

const ClickableMenu = ({path,title}) => {
    return (
        <div className='relative z-10 px-8 flex items-center gap-3 mt-6'>
            <Image
                src={HomeIcon}
                className='w-5'
                alt='home icon'
            />
            <span>/ <span className='font-semibold text-brand text-sm ms-3 font-afacad'>{title}</span></span>
        </div>
    )
}

export default ClickableMenu