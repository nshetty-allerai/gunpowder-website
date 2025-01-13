import React from 'react'
import { HomeIcon, PrivacyCenterMobile1, PrivacyLeft1, PrivacyLeft2, PrivacyLeftMobile1, PrivacyLeftTab1, PrivacyRight1, PrivacyRight2, PrivacyRightTab1, PrivacyRigthMobile1 } from '@/utils/constants/constant'
import Image from 'next/image'
import ClickableMenu from '@/components/common/ClickableMenu'
import Link from 'next/link'


export const metadata = {
    title: "Legal Terms for Digital Services | Gunpowder Innovations",
    description: "Familiarize yourself with the terms and conditions governing the use of our services, ensuring transparency and a mutual understanding of our policies.",
    keywords : ["Ui and Ux Design Services", "Software Development Services","Custom App Development UK", "Website Maintenance Services", "Professional Web Design Service", "Web App Development Services", "Custom web development Services", "Digital Wealth Management Solutions", "Advanced Technology Solutions UK"],
    metadataBase: new URL("https://www.gunpowderinnovations.com"),
    alternates: {
      canonical: "/terms-and-conditions",
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
                <span>/ <Link href="/terms-and-conditions" className='font-semibold text-brand text-sm ms-3 font-afacad'>Terms and Conditions</Link></span>
            </div>
            <div className='relative z-10 max-w-[720px] mx-auto mt-5'>
                <div className='mx-8'>
                <div className=''>
                    <h1 className='font-semibold lg:text-[64px] lg:leading-[76px] md:text-5xl text-4xl'>Terms and Conditions</h1>
                    <p className='paragraph md:mt-6 mt-4'>These TERMS OF SERVICE (the “Agreement”) govern our provision of services to you (as further described herein, the “Services”) and are legally binding and enforceable as between us, Gunpowder Innovations, who may be referred to as the “Company” in this Agreement, and you, the individual or company receiving the services, who may be referred to as the “Client” in this Agreement. Each of us is referred to as a “Party” in this Agreement and together, the “Parties.”</p>
                    <p className='paragraph md:mt-6 mt-4'>By soliciting, accepting, or using the Services or clicking “accept” or “agree” to an electronic manifestation of this Agreement, (1) you acknowledge that you have read, understand, and agree to be bound by this Agreement, and (2) you represent and warrant that you are legally capable of being bound by this Agreement and not prohibited by law from soliciting, accepting, or using the Services. If you do not accept and agree to be bound by all the terms of this Agreement, do not solicit, accept, or use the Services.</p>
                    <p className='paragraph md:mt-6 mt-4'>We may update or revise this Agreement from time to time at our sole discretion. You agree that you will review this Agreement periodically. By continuing to solicit, accept, or use the Services, you will be deemed to have accepted the revised or modified version of this Agreement. If you do not agree to this Agreement or any modified version thereof, your sole recourse is to terminate your solicitation, acceptance, and use of the Services. Except as otherwise expressly stated, any solicitation, acceptance, and use of the Services are subject to the version of this Agreement in effect at the time.</p>
                    <p className='paragraph md:mt-6 mt-4'>Remember, the best work comes out of great relationships. Honesty, respect, and gratitude are the keys to a great relationship, and therefore we have an interest in treating each other with these values at all times. As much as legal documents are important, what truly binds us is our drive to do great work with great people and to develop a relationship of mutual respect and trust.</p>
                    <p className='paragraph md:mt-6 mt-4'></p>
                </div>
                <div>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>1. Engagement & Workflow</h6>
                    <p className='paragraph mt-4'>The Client agrees to retain the Company, and the Company agrees to be retained, to perform the Services during the Term and deliver deliverables as described herein (the “Deliverables”) in accordance with this Agreement.</p>
                    <p className='paragraph mt-4'>The Client acknowledges that the provision of the Services and the delivery of the Deliverables will require the Client through its representatives to respond to inquiries, promptly provide certain information as reasonably requested from time to time by the Company, and engage in regular and informed communication with the Company.</p>
                    <p className='paragraph mt-4'>Timelines for the performance of the Services represent the Company’s best estimation. Unforeseen circumstances may alter the timeline for the delivery of the Deliverables. Accordingly, the Company shall not be liable for any losses associated with delays due to unforeseen circumstances.</p>
                </div>
                <div>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>2. Client’s Acknowledgments</h6>
                    <p className='paragraph mt-4'>The Client hereby acknowledges and agrees:</p>
                    <ul className='mt-5'>
                        <li className='paragraph' style={{ listStyleType: 'disc' }}>(a) The Company will not be required to perform any Services or develop any Deliverables unless duly authorized by the Client;</li>
                        <li className='paragraph' style={{ listStyleType: 'disc' }}>(b) The Deliverables shall be developed, organized, and delivered in accordance with the Company’s expertise and standard industry practices;</li>
                        <li className='paragraph' style={{ listStyleType: 'disc' }}>(c) Design Deliverables will be optimized solely for the visual format proposed by the Client;</li>
                        <li className='paragraph' style={{ listStyleType: 'disc' }}>(d) The Services and Deliverables do not include instruction on technical aspects or ongoing support unless otherwise agreed in writing.</li>
                    </ul>
                </div>
                <div>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>3. Review, Revisions, and Acceptance</h6>
                    <p className='paragraph'>Periodically during the Term, the Company shall present Deliverables to the Client for review. The Client may request revisions, and the Company shall use its best efforts to implement them. Any deviations or additions proposed outside the scope of the Services may be deemed additional work and will incur additional fees to be agreed upon by the Parties.</p>
                </div>
                <div>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>4. Third-Party Services</h6>
                    <p className='paragraph'>The Company may engage third-party providers for goods or services. While the Company uses reasonable efforts to engage qualified providers, it disclaims all liability with respect to third-party services. The Client agrees to independently review and accept the terms and conditions of such third-party providers.</p>
                </div>
                <div>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>5. Payment Terms</h6>
                    <p className='paragraph'>Fees for Services shall be invoiced and payable within seven (7) days of receipt. In the event of non-payment exceeding thirty (30) days, the Company reserves the right to cease providing the Services and charge interest on overdue amounts at the rate of 1.5% per month or the maximum rate permitted by law, whichever is lower. All fees are non-refundable unless otherwise stated in writing.</p>
                </div>
                <div>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>6. Ownership and Licenses</h6>
                    <p className='paragraph'>Upon full payment of all fees, the Client will own the Deliverables as a work-for-hire. However, the Company retains ownership of all pre-existing or independently developed materials, including but not limited to templates, tools, and methodologies (“Legacy IP”).</p>
                    <p className='paragraph'>The Company grants the Client a non-exclusive, royalty-free license to use the Legacy IP solely as incorporated into the Deliverables.</p>
                </div>
                <div>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>7. Confidentiality</h6>
                    <p className='paragraph'>Both Parties agree to keep all Confidential Information private and use it solely for the purposes outlined in this Agreement. Confidentiality obligations shall survive for three (3) years following the termination of this Agreement.</p>
                </div>
                <div>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>8. Limitation of Liability</h6>
                    <p className='paragraph'>The Company’s liability under this Agreement, whether in contract, tort, or otherwise, shall not exceed the total fees paid by the Client for the Services. In no event shall the Company be liable for indirect, incidental, or consequential damages arising from or in connection with this Agreement or the Services.</p>
                </div>
                <div>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>9. Indemnification</h6>
                    <p className='paragraph'>The Client agrees to indemnify and hold harmless the Company, its employees, and agents from any claims, liabilities, damages, or expenses arising from the Client’s use of the Deliverables or Services.</p>
                </div>
                <div>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>10. Termination</h6>
                    <p className='paragraph'>Either Party may terminate this Agreement by providing fifteen (15) days’ written notice. Upon termination, the Client shall pay for all Services rendered up to the termination date. Any provisions of this Agreement intended to survive termination, including but not limited to Confidentiality and Limitation of Liability, shall remain in full force and effect.</p>
                </div>
                <div>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>11. Force Majeure</h6>
                    <p className='paragraph'>Neither Party shall be liable for delays or failure to perform due to events beyond their reasonable control, including but not limited to acts of God, government restrictions, or other unforeseeable circumstances.</p>
                </div>
                <div className='pb-20'>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>12. Governing Law</h6>
                    <p className='paragraph'>This Agreement shall be governed by and construed in accordance with the laws of the United Kingdom.</p>
                    <p className='paragraph mt-4'>By soliciting, accepting, or using the Services, you acknowledge that you have read, understood, and agreed to these Terms of Service.</p>
                </div>
                </div>
            </div>
            {/*  */}
            {/* PrivacyLeft1 ,PrivacyLeft2 ,PrivacyRight1,PrivacyRight2 */}
            {/* Desktop */}
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
            <div className='hidden lg:block w-full absolute right-0 top-[-200px]  z-0'>
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