import { CookiesIcon ,Cookies } from '@/utils/constants/constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import CookieConsent from "react-cookie-consent";
const CookieConsentComponent = () => {
    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText="Accept Cookies"
                declineButtonText="Decline"
                enableDeclineButton
                cookieName="userCookieConsent"
                style={{ background: "#11022D"}}
                buttonStyle={{ color: "#ffffff", fontSize: "13px", background: '#FF0073', borderRadius: "24px", padding: '5px 16px', fontWeight: 600 }}
                declineButtonStyle={{ color: "#170F49", fontSize: "13px", background: "#ffffff", borderRadius: "24px",fontWeight: 600 }}
                expires={365}
            >
                <div style={{display:'flex',alignItems:'start',gap:'10px'}}>
                    <Image
                        src={Cookies}
                        className='w-[24px] '
                        alt='CookiesIcon'
                    />
                    <span className='font-urbanist'>Our website use cookies. By continuing navigating, we assume your permission to deploy cookies as detailed in our <Link className='text-brand underline font-semibold' href="/PrivacyPolicy">Privacy Policy.</Link></span>
                    </div>
            </CookieConsent>
        </div>
    )
}

export default CookieConsentComponent