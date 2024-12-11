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
                <span>/ <Link href="/PrivacyPolicy" className='font-semibold text-brand text-sm ms-3 font-afacad'>Cookies Policy</Link></span>
            </div>
            <div className='relative z-10 max-w-[720px] mx-auto mt-5 lg:pb-[100px] md:pb-[70px] pb-10'>
                <div className='px-8'>
                    <h1 className='font-semibold lg:text-[64px] lg:leading-[76px] md:text-5xl text-4xl'>Cookies Policy</h1>

                    <p className='paragrapgh mt-4'> Last updated: December 10, 2024</p>

                    <p className='paragrapgh mt-4'>This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.</p>

                    <p className='paragrapgh mt-4'> Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.</p>

                    <p className='paragrapgh mt-4'> We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.</p>


                    <div>
                        <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'>Interpretation and Definitions</h6>
                        <p><b className='font-bold'>Interpretation</b></p>
                        <p className='paragraph'>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                        <p><b className='font-bold'>Definitions</b></p>
                        <p>For the purposes of this Cookies Policy:</p>

                        <ul className='mt-5'>
                            <li className='paragraph mt-2' style={{ listStyleType: 'disc' }}>Company (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to AllerAI Limited, 20 Market Hill, Southam, Warwickshire, United Kingdom, CV47 0HF.</li>
                            <li className='paragraph mt-2' style={{ listStyleType: 'disc' }}>Cookies means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</li>
                            <li className='paragraph mt-2' style={{ listStyleType: 'disc' }}>Website refers to Gunpowder Innovations, accessible from <Link className='text-brand underline' href='/'>www.gunpowderinnovations.com</Link></li>
                            <li className='paragraph mt-2' style={{ listStyleType: 'disc' }}>You means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='title md:mt-10 md:mb-5 mt-8 mb-4'></h6>
                        <p className='paragraph mt-2 font-bold'>Type of Cookies We Use</p>
                        <p className='paragraph mt-2'>Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.</p>
                        <p className='paragraph mt-2'>We use both session and persistent Cookies for the purposes set out below:</p>
                    </div>
                    <div className='lg:mt-10 mt-6'>
                        <ul>
                            <li style={{ listStyleType: 'disc' }}>
                                <b className='font-bold paragraph'>Necessary / Essential Cookies</b>
                                <p className='paragraph mt-4'>Type: Session Cookies</p>
                                <p className='paragraph mt-4'>  Administered by: Us</p>
                                <p className='paragraph mt-4'>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='mx-4'>
                            <h6 className='paragraph font-bold'>Your Choices Regarding Cookies</h6>
                            <p className='paragraph'>If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.</p>
                        </div>
                        <div className='lg:mt-10 mt-6 mx-4'>
                            <ul>
                                <li style={{ listStyleType: 'disc' }}>
                                    <b className='font-bold paragraph'>Cookies Policy / Notice Acceptance Cookies</b>
                                    <p className='paragraph mt-4'>Type: Persistent Cookies</p>
                                    <p className='paragraph mt-4'>Administered by: Us</p>
                                    <p className='paragraph mt-4'>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
                                </li>
                            </ul>
                        </div>
                        <div className='lg:mt-10 mt-6 mx-4'>
                            <ul>
                                <li style={{ listStyleType: 'disc' }}>
                                    <b className='font-bold paragraph'>Functionality Cookies</b>
                                    <p className='paragraph mt-4'>Type: Persistent Cookies</p>
                                    <p className='paragraph mt-4'>Administered by: Us</p>
                                    <p className='paragraph mt-4'>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
                                </li>
                            </ul>
                        </div>
                        <div className='lg:mt-10 mt-6 mx-4'>
                            <ul>
                                <li style={{ listStyleType: 'disc' }}>
                                    <b className='font-bold paragraph'>Tracking and Performance Cookies</b>
                                    <p className='paragraph mt-4'>Type: Persistent Cookies</p>
                                    <p className='paragraph mt-4'>Administered by: Third-Parties</p>
                                    <p className='paragraph mt-4'>Purpose: These Cookies are used to track information about traffic to the Website and how users use the Website. The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. This is because the information collected is typically linked to a pseudonymous identifier associated with the device you use to access the Website. We may also use these Cookies to test new advertisements, pages, features or new functionality of the Website to see how our users react to them.</p>
                                </li>
                            </ul>
                        </div>
                        <div className='lg:mt-10 mt-6 mx-4'>
                            <ul>
                                <li style={{ listStyleType: 'disc' }}>
                                    <b className='font-bold paragraph'>Targeting and Advertising Cookies</b>
                                    <p className='paragraph mt-4'>Type: Persistent Cookies</p>
                                    <p className='paragraph mt-4'>Administered by: Third-Parties</p>
                                    <p className='paragraph mt-4'>Purpose: These Cookies track your browsing habits to enable Us to show advertising which is more likely to be of interest to You. These Cookies use information about your browsing history to group You with other users who have similar interests. Based on that information, and with Our permission, third party advertisers can place Cookies to enable them to show adverts which We think will be relevant to your interests while You are on third party websites.</p>
                                </li>
                            </ul>
                        </div>
                        <div className='lg:mt-10 mt-6 mx-4'>
                            <ul>
                                <li style={{ listStyleType: 'disc' }}>
                                    <b className='font-bold paragraph'>Social Media Cookies</b>
                                    <p className='paragraph mt-4'>Type: Persistent Cookies</p>
                                    <p className='paragraph mt-4'>Administered by: Third-Parties</p>
                                    <p className='paragraph mt-4'>Purpose: In addition to Our own Cookies, We may also use various third parties Cookies to report usage statistics of the Website, deliver advertisements on and through the Website, and so on. These Cookies may be used when You share information using a social media networking website such as Facebook, Instagram, Twitter or Google+.</p>
                                </li>
                            </ul>
                        </div>
                        <div className='mx-4'>
                            <p className='pragraph font-bold md:mt-10 mt-4'>Your Choices Regarding Cookies</p>
                            <p className='pragraph mt-4'>If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time. If You do not accept Our Cookies, You may experience some inconvenience in </p>
                            <p className='pragraph mt-2'>If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.</p>
                            <p className='pragraph mt-2'>If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.</p>
                        </div>

                        <ul className='mt-5 mx-4'>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>For the Internet Explorer web browser, please visit this page from Microsoft: <a className='text-brand' target='_blank' href="http://support.microsoft.com/kb/278835">http://support.microsoft.com/kb/278835</a></li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>For the Internet Explorer web browser, please visit this page from Microsoft: <a className='text-brand' target='_blank' href="http://support.microsoft.com/kb/278835 "> http://support.microsoft.com/kb/278835 </a></li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>For the Firefox web browser, please visit this page from Mozilla: <a className='text-brand' target='_blank' href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"> https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></li>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>For the Safari web browser, please visit this page from Apple:<a className='text-brand' target='_blank' href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></li>
                        </ul>
                        <p className='pragraph mt-4 mx-4'>For any other web browser, please visit your web browser's official web pages.</p>

                        <div className='mx-4'>
                            <p className='lg:py-4 py-2'>More Information about Cookies</p>
                            <p className='lg:py-4 py-2'>You can learn more about cookies: <a className='text-brand' target='_blank' href="https://www.freeprivacypolicy.com/blog/cookies/"> Cookies: What Do They Do?. </a></p>
                        </div>
                        <div className='mx-4'>
                            <p className='paragraph font-bold'>Contact Us</p>
                            <p className='paragraph'>If you have any questions about this Cookies Policy, You can contact us:</p>
                        </div>
                        <ul className='mt-5 mx-4'>
                            <li className='paragraph' style={{ listStyleType: 'disc' }}>By email: <a href="">[email protected]</a></li>
                        </ul>
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