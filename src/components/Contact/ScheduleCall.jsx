"use client"
import { SeheduleCallGradient } from '@/utils/constants/constant'
import Image from 'next/image'
import React, { useState } from 'react'
import ScheduleCallModal from '../common/ScheduleCallModal'

const ScheduleCall = () => {
  const [showModal,setShowModal]=useState(false)
  return (
    <section className='max-w-[1440px] mx-auto md:bg-[#000000] bg-[#140D10] relative z md:py-0 py-[40px] mb-4 md:mb-0'>
      <div
        style={{ background: "linear-gradient(90deg, #FF007A, #5A00FF)" }}
        className='lg:p-10 px-10 py-[100px] rounded-[37px] md:mx-[60px] mx-5 lg:my-[84px] md:my-[70px]'>
        <div>
          <h6 className='text-center font-bold lg:text-5xl md:text-3xl text-2xl'>Ready to bring your ideas to life? Schedule a call with us today!</h6>
          <div className='flex justify-center lg:mt-[50px] mt-9'>
            <button onClick={()=>setShowModal(true)} className='bg-white border border-brand rounded-[61px] text-brand md:px-6 md:py-3 px-4 py-2 lg:text-3xl text-2xl font-semibold'>Schedule a Call</button>
          </div>
        </div>
      </div>
      {/* <div>
        <Image
        src={SeheduleCallGradient}
        className="absolute bottom-[-500px] z-40"
        alt=""
        />
      </div> */}

      <ScheduleCallModal
        open={showModal}
        close={()=>setShowModal(false)}
      />
    </section>
  )
}

export default ScheduleCall