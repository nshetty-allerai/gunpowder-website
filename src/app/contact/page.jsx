
// import Calendly from '@/components/Contact/Calendly'
"use client"
import dynamic from 'next/dynamic'
const Calendly = dynamic(() => import('../../components/Contact/Calendly'), { ssr: false })
import ContactForm from '@/components/Contact/ContactForm'
import Questions from '@/components/UI/Questions'
import React from 'react'
import ScheduleCall from '@/components/Contact/ScheduleCall'
import PricingGradient from '../pricing/PricingGradient'

const Contact = () => {
  return (
    <div>
      <ContactForm/>
      {/* <Calendly/> */}
      {/* <ScheduleCall/> */}
      <Questions/>
     <PricingGradient 
          title={`"${"Bring your ideas to life schedule a call today!"}"`}
          // description="Our team is here to help you succeed. Let&apos;s work together to achieve your goals and elevate your brand to new heights."
          description="Our team is here to help you succeed. Let&apos;s work together to achieve your goals and elevate your brand to new heights."
        />
    </div>
  )
}

export default Contact