import { HomeIcon, PrivacyCenterMobile1, PrivacyLeft1, PrivacyLeft2, PrivacyLeftMobile1, PrivacyLeftTab1, PrivacyRight1, PrivacyRight2, PrivacyRightTab1, PrivacyRigthMobile1 } from '@/utils/constants/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// paragraph
// title

// font-semibold md:text-3xl text-2xl text-brand
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
                <span>/ <Link href="/PrivacyPolicy" className='font-semibold text-brand text-sm ms-3 font-afacad'>Privacy Policy</Link></span>
            </div>
            <div className='relative z-10 max-w-[720px] mx-auto mt-5'>
                <div className='px-8'>
                    <h1 className='font-semibold lg:text-[64px] lg:leading-[76px] md:text-5xl text-4xl'>Privacy Policy</h1>
                    <p className='paragraph lg:mt-14 md:mt-8 mt-4'>We at Gunpowder innovations  value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website, use our services, or engage with us in any capacity. By accessing or using our site, you agree to the practices described in this policy.</p>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>What information do we collect?</h6>
                    <p className='paragraph'>We collect information to provide and improve our services, enhance user experiences, and ensure the effective operation of our website. This includes personal information you voluntarily provide,</p>
                    <p className='paragraph'>such as your name, email address, phone number, and any details shared through forms, emails, or support inquiries. Additionally, we automatically collect data when you interact with our website, such as your device type, operating system, browser details, IP address, and usage patterns like pages visited and time spent on the site.</p>
                    <p className='paragraph md:mt-6 mt-4'> To further improve functionality and analyze performance, we use cookies and similar technologies, which may also personalize your browsing experience. In some cases, we may receive additional information about you through trusted third-party platforms or services. All collected information is handled responsibly and in accordance with applicable privacy laws.</p>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>How do we use your information?</h6>
                    <p className='paragraph'>We use the information we collect to provide, enhance, and personalize our services, ensuring they meet your needs and expectations. This includes managing and improving our website&apos;s functionality, responding to your inquiries, and delivering the products or services you request. Your information also helps us analyze user behavior to optimize content, develop new features, and ensure a seamless browsing experience. Additionally, with your consent, we may use your contact details to send updates, newsletters, or promotional materials relevant to our services. All data usage complies with applicable privacy laws and is handled with the utmost care to safeguard your privacy.</p>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>Do we use cookies and other tracking technologies?</h6>
                    <p className='paragraph'>Yes, we use cookies and similar tracking technologies to enhance your browsing experience, analyze website performance, and provide personalized content and advertisements.</p>
                    <p className='paragraph md:mt-8 mt-4'>Cookies are small text files stored on your device that help us understand user behavior, optimize functionality, and remember your preferences for future visits. These technologies also allow us to gather insights into website usage, ensuring we can continually improve our services. You can manage or disable cookies through your browser settings; however, please note that some features of our website may not function properly without them.</p>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>How long do we keep your information?</h6>
                    <p className='paragraph'>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. The retention period depends on the nature of the data and how it is used, such as to comply with legal obligations, resolve disputes, or enforce agreements. Once your information is no longer needed, we securely delete, anonymize, or archive it in a way that prevents unauthorized access or use. We are committed to handling your data responsibly and ensuring its protection throughout its lifecycle.</p>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>How do we keep your information safe?</h6>
                    <p className='paragraph'>We prioritize the security of your information and implement robust measures to protect it from unauthorized access, loss, misuse, or alteration. This includes the use of encryption, secure servers, firewalls, and regular security assessments to safeguard your data. Access to your personal information is restricted to authorized personnel only, who are required to maintain its confidentiality. While we take every precaution to protect your data, it is important to note that no system can guarantee complete security. However, we continuously review and update our security practices to ensure your information remains as safe as possible.</p>
                    <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>What are your privacy rights?</h6>
                    <p className='paragraph'>You have certain rights regarding your personal information, and we are committed to ensuring you can exercise them. Depending on your location and applicable laws, your privacy rights may include the following:</p>
                    <div>
                        <p className='paragraph my-6'>
                            <span className='font-bold'>Access:</span> You can request to know what personal data we hold about you and obtain a copy of it.
                        </p>
                        <p className='paragraph my-6'>
                            <span className='font-bold'>Correction:</span> You can ask us to correct any inaccurate or incomplete information about you.
                        </p>
                        <p className='paragraph my-6'>
                            <span className='font-bold'>Deletion:</span> You can request that we delete your personal data in certain circumstances, also known as the &quot;right to be forgotten.&quot;
                        </p>
                        <p className='paragraph my-6'>
                            <span className='font-bold'>Restriction:</span> You can request that we limit how we process your data under certain conditions.
                        </p>
                        <p className='paragraph my-6'>
                            <span className='font-bold'>Objection:</span>You have the right to object to the processing of your data, particularly for direct marketing or where processing is based on our legitimate interests.
                        </p>
                        <p className='paragraph my-6'>
                            <span className='font-bold'>Data Portability:</span>You can request a copy of your data in a structured, commonly used, and machine-readable format for transfer to another service provider.
                        </p>
                        <p className='paragraph my-6'>
                            <span className='font-bold'>Withdraw Consent:</span> Where data processing is based on your consent, you can withdraw it at any time.
                        </p>
                        <p className='paragraph my-6'>
                            To exercise your rights, or if you have concerns about how your data is handled, please contact us at Info@gunpowderinnovations.com We will respond promptly and in accordance with applicable laws to address your requests or resolve any issues.
                        </p>
                    </div>
                    <div className='md:pb-[145px] pb-[100px]'>
                        <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>How can you contact us about this policy?</h6>
                        <p className='paragraph'>
                                If you have any questions or concerns about this Privacy Policy, please contact us at:
                        </p>
                        <p className='paragraph my-4'>Email: info@gunpowderinnovations.com</p>
                        <p className='paragraph my-4'>Address: 20 Market Hill, Southam, Warwickshire, United Kingdom, CV47 0HF</p>
                        <p className='paragraph my-4'>We are happy to assist you.</p>
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