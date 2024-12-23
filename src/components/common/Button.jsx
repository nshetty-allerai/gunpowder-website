"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Arrow } from '@/utils/constants/constant'
// import ScheduleCall from '../Contact/ScheduleCall'
import ScheduleCallModal from './ScheduleCallModal'
import { sendGAEvent } from '@next/third-parties/google'



const Button = ({ children, icon ,showIcon=true }) => {
  const [showModal ,setShowModal]=useState(false)

  const handleClickLetsTalk =()=> {
    setShowModal(true)
    sendGAEvent('click', 'Let`s Talk Button', { value: '100' })
  }

  return (
    <>
      <div onClick={handleClickLetsTalk} className='flex items-center gap-2 bg-[#FF0073] cursor-pointer hover:bg-hover-gradient transition-all duration-300 text-white w-fit px-6 py-3 md:px-6 md:py-[18px] rounded-[30px] lg:mt-8 md:mt-6 mt-4'>
        <span className='text-base font-bold'>{children}</span>
        {showIcon&&<Image
          src={Arrow}
          alt='arrow'
          className='w-[18px]'
        />}
      </div>
      <ScheduleCallModal
        open={showModal}
        close={()=>setShowModal(false)}
      />
    </>
  )
}

export default Button