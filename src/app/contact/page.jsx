
// import Calendly from '@/components/Contact/Calendly'
"use client"
import dynamic from 'next/dynamic'
const Calendly = dynamic(() => import('../../components/Contact/Calendly'), { ssr: false })
import ContactForm from '@/components/Contact/ContactForm'
import Questions from '@/components/UI/Questions'
import React from 'react'
import ScheduleCall from '@/components/Contact/ScheduleCall'

const Contact = () => {
  return (
    <div>
      <ContactForm/>
      {/* <Calendly/> */}
      <ScheduleCall/>
     <Questions/>
    </div>
  )
}

export default Contact