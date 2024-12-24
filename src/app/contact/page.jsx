
// import Calendly from '@/components/Contact/Calendly'
"use client"
import dynamic from 'next/dynamic'
const Calendly = dynamic(() => import('../../components/Contact/Calendly'), { ssr: false })
import ContactForm from '@/components/Contact/ContactForm'
import Questions from '@/components/UI/Questions'
import React from 'react'
import ScheduleCall from '@/components/Contact/ScheduleCall'
import PricingGradient from '../pricing/PricingGradient'


// export const metadata = {
//   title: "Web App Development Services UK | Gunpowder Innovations",
//   description: "Gunpowder Digital provides professional web design, UI/UX services, custom app development, and advanced technology solutions for businesses in the UK.",
//   keywords : ["Ui and Ux Design Services", "Software Development Services","Custom App Development UK", "Website Maintenance Services", "Professional Web Design Service", "Web App Development Services", "Custom web development Services", "Digital Wealth Management Solutions", "Advanced Technology Solutions UK"],
//   metadataBase: new URL("https://www.gunpowderinnovations.com"),
//   alternates: {
//     canonical: "/contact",
//   },
// };

const Contact = () => {
  return (
    <div>
      <ContactForm/>
      {/* <Calendly/> */}
      {/* <ScheduleCall/> */}
      <Questions/>
     <PricingGradient 
          title={`${"Bring your ideas to life schedule a call today!"}`}
          // description="Our team is here to help you succeed. Let&apos;s work together to achieve your goals and elevate your brand to new heights."
          description="Our team is here to help you succeed. Let&apos;s work together to achieve your goals and elevate your brand to new heights."
        />
    </div>
  )
}

export default Contact