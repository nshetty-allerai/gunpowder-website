import { HomeIcon, PrivacyCenterMobile1, PrivacyLeft1, PrivacyLeft2, PrivacyLeftMobile1, PrivacyLeftTab1, PrivacyRight1, PrivacyRight2, PrivacyRightTab1, PrivacyRigthMobile1 } from '@/utils/constants/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: "Web App Development Services UK | Gunpowder Innovations",
    description: "Gunpowder Digital provides professional web design, UI/UX services, custom app development, and advanced technology solutions for businesses in the UK.",
    keywords : ["Ui and Ux Design Services", "Software Development Services","Custom App Development UK", "Website Maintenance Services", "Professional Web Design Service", "Web App Development Services", "Custom web development Services", "Digital Wealth Management Solutions", "Advanced Technology Solutions UK"],
    metadataBase: new URL("https://www.gunpowderinnovations.com"),
    alternates: {
      canonical: "/privacy-policy",
    },
  };

const page = () => {
    return (
        <section className='relative max-w-[1440px] mx-auto'>
            <div className='relative z-10 px-8 flex items-center gap-3 mt-6'>
                <Link href="/">
                    <Image
                        src={HomeIcon}
                        className='w-5'
                        alt='home icon'
                    />
                </Link>
                <span>/ <Link href="/privacy-policy" className='font-semibold text-brand text-sm ms-3 font-afacad'>Privacy Policy</Link></span>
            </div>
            <div className='relative z-10 max-w-[720px] mx-auto mt-5'>
                <div className='px-8 lg:pb-[100px] md:pb-[70px] pb-10'>
                    <h1 className='font-semibold lg:text-[64px] lg:leading-[76px] md:text-5xl text-4xl'>Privacy Policy</h1>
                    <p className='paragraph lg:mt-14 md:mt-8 mt-4'>Gunpowder Innovations (“we,” “our,” or “us”) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or engage with our services, applicable to users globally.</p>

                    <div>
                        <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>1. Information We Collect</h6>
                        <p className='paragraph'>We may collect the following types of information:</p>
                        <ul className='mt-5'>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Personal Information: Name, email address, phone number, budget information, and messages you provide when contacting us.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Analytics Data: Information such as IP addresses, browser type, and website usage data collected through Google Analytics or similar tools.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Cookies: Cookies and similar technologies to enhance user experience and analyze website usage. Please refer to our Cookie Policy for more details.</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>2. How We Collect Your Information</h6>
                        <p className='paragraph'>We collect personal information through:</p>
                        <ul className='mt-5'>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Contact forms on our website.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Email communication initiated by users.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Cookies and analytics tools.</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>3. How We Use Your Information</h6>
                        <p className='paragraph'>We use the information we collect for the following purposes:</p>
                        <ul className='mt-5'>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>To provide and manage our services and deliverables.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>To respond to inquiries and communicate with you.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>To improve our website and user experience through analytics.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>To send marketing communications based on implied consent. Users can opt out at any time.</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>4. Lawful Basis for Processing</h6>
                        <p className='paragraph'>We process your personal data based on the following lawful grounds:</p>
                        <ul className='mt-5'>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Consent: When you provide explicit consent, such as by submitting a contact form or accepting cookies.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Contract: When processing is necessary to fulfill a contract or provide requested services.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Legitimate Interests: For purposes such as improving services, website functionality, and operational efficiency.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Compliance with Legal Obligations: Where required by law.</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>5. Sharing Your Information</h6>
                        <p className='paragraph'>We may share your information with:</p>
                        <ul className='mt-5'>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Google Analytics: To analyze website performance and user behavior.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Third-Party Services: Such as cloud storage providers, CRM systems, and email marketing tools, to support our operations and improve services.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Legal Authorities: When required by law or to protect our legal rights.</li>
                        </ul>
                        <p className='paragraph mt-5'>We do not sell your personal information to any third parties.</p>
                    </div>
                    <div>
                        <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>6. Your Rights</h6>
                        <p className='paragraph'>Depending on your location, you may have specific rights under data protection laws such as GDPR (EU/UK) and CCPA (California):</p>
                        <ul className='mt-5'>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Access: Request access to the personal data we hold about you.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Rectification: Request corrections to inaccurate or incomplete data.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Deletion: Request deletion of your personal data, subject to legal obligations.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Restriction: Request to limit how we process your data.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Objection: Object to the processing of your data for certain purposes.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Portability: Request a copy of your data in a machine-readable format.</li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>Opt-Out: California users may opt out of the sale of their data (though we do not sell data).</li>
                        </ul>
                        <p className='paragraph mt-5'>To exercise these rights, please contact us at <b><Link target='_blank' href="mailto:reach@gunpowderinnovations.com?subject=&cc=&bcc=&body-" className='text-brand'>reach@gunpowderinnovations.com</Link></b></p>
                    </div>
                    <div>
                        <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>7. Data Retention</h6>
                        <p className='paragraph'>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by legal, accounting, or regulatory obligations. Data may be deleted upon user request, subject to applicable laws.</p>
                    </div>
                    <div>
                        <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>8. International Data Transfers</h6>
                        <p className='paragraph'>As a global website, we may transfer and process your data in countries outside your own, including the United Kingdom, European Union, and the United States. All data transfers comply with applicable privacy laws, including the General Data Protection Regulation (GDPR) and other local regulations.</p>
                    </div>
                    <div>
                        <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>9. Cookies</h6>
                        <p className='paragraph'>Our website uses cookies to enhance functionality and improve user experience. For more details, please refer to our Cookie Policy.</p>
                    </div>
                    <div>
                        <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>10. Security</h6>
                        <p className='paragraph'>We implement reasonable security measures, such as secure hosting providers and industry-standard practices, to protect your personal information from unauthorized access, loss, or misuse. However, no system is completely secure, and we cannot guarantee absolute security.</p>
                    </div>
                    <div>
                        <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>11. Updates to This Policy</h6>
                        <p className='paragraph'>We may update this Privacy Policy from time to time. Updates will be reflected on this page with a revised “Last Updated” date. Your continued use of our website constitutes acceptance of any changes.</p>
                    </div>
                    <div>
                        <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>12. Contact Us</h6>
                        <p className='paragraph'>If you have questions or concerns about this Privacy Policy, you can contact us at:</p>
                        <p className='paragraph mt-2'>Email :
                            <Link target='_blank' href="mailto:reach@gunpowderinnovations.com?subject=&cc=&bcc=&body-" className='text-brand'> reach@gunpowderinnovations.com</Link></p>
                        <p className='paragraph mt-2'><i>Last Updated: December 9, 2024</i></p>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='hidden lg:block w-full absolute left-0 top-0 z-0'>
                <Image
                    src={PrivacyLeft1}
                    alt=''
                    className='w-full'
                />
            </div>
            <div className='hidden lg:block w-full left-0 absolute bottom-0 z-0' >
                <Image
                    src={PrivacyLeft2}
                    alt=''
                    className='w-full'
                />
            </div>
            <div className='hidden lg:block w-full absolute right-0 top-0  z-0'>
                <Image
                    src={PrivacyRight1}
                    alt=''
                    className='w-full'
                />
            </div>
            <div className='hidden lg:block w-full absolute right-0 top-[1200px] z-0'>
                <Image
                    src={PrivacyRight2}
                    alt=''
                    className='w-full'
                />
            </div>

            {/*  Tab  */}
            {/* PrivacyRightTab1,PrivacyLeftTab1 */}
            <div className='hidden md:block lg:hidden w-full absolute left-0 top-0 z-0'>
                <Image
                    src={PrivacyLeftTab1}
                    alt=''
                    className='w-full'
                />
            </div>
            <div className='hidden md:block lg:hidden w-full absolute right-0 top-[-400px] z-0'>
                <Image
                    src={PrivacyRightTab1}
                    alt=''
                    className='w-full'
                />
            </div>


            {/* mobile */}

            <div className='md:hidden w-full absolute left-0 top-0  z-0'>
                <Image
                    src={PrivacyLeftMobile1}
                    alt=''
                    className='w-full'
                />
            </div>
            <div className='md:hidden w-full absolute right-0 top-0  z-0'>
                <Image
                    src={PrivacyRigthMobile1}
                    alt=''
                    className='w-full'
                />
            </div>
            <div className='md:hidden w-full absolute  top-[1200px]  z-0'>
                <Image
                    src={PrivacyCenterMobile1}
                    alt=''
                    className='w-full'
                />
            </div>
            <div className='md:hidden w-full absolute  top-[2100px]  z-0'>
                <Image
                    src={PrivacyCenterMobile1}
                    alt=''
                    className='w-full'
                />
            </div>
        </section>
    )
}

export default page