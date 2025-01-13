
import ContactForm from '@/components/Contact/ContactForm'
import Questions from '@/components/UI/Questions'
import React from 'react'
import PricingGradient from '../pricing/PricingGradient'


export const metadata = {
  title: "Get in Touch for Innovative Tech Solutions | Gunpowder Innovations",
  description: "Get in touch with Gunpowder Innovations for any inquiries, support or partnership opportunities. We are here to provide assistance and answer your questions.",
  keywords : ["Ui and Ux Design Services", "Software Development Services","Custom App Development UK", "Website Maintenance Services", "Professional Web Design Service", "Web App Development Services", "Custom web development Services", "Digital Wealth Management Solutions", "Advanced Technology Solutions UK"],
  metadataBase: new URL("https://www.gunpowderinnovations.com"),
  alternates: {
    canonical: "/contact",
  },
};

const Contact = () => {
  return (
    <div>
      <ContactForm/>
      <Questions/>
     <PricingGradient 
          title={`${"Bring your ideas to life schedule a call today!"}`}
          description="Our team is here to help you succeed. Let&apos;s work together to achieve your goals and elevate your brand to new heights."
        />
    </div>
  )
}

export default Contact