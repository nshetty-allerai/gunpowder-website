"use client"
import React, { useState } from 'react'
import ScheduleCallModal from '../common/ScheduleCallModal'

const PricingButton = ({children}) => {
    const [showModal,setShowModal]=useState(false)
    return (
        <>
        <button onClick={()=>setShowModal(true)} className="py-3 rounded-[50px] bg-brand hover:bg-[#C9005B] transition-all duration-300 text-white w-full text-base">
            {children}
        </button>

        <ScheduleCallModal
        open={showModal}
        close={()=>setShowModal(false)}
      />
        </>
    )
}

export default PricingButton