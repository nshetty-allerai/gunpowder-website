// import { CookiesIcon ,Cookies } from '@/utils/constants/constant';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react'
// import CookieConsent from "react-cookie-consent";
// const CookieConsentComponent = () => {
//     return (
//         <div>
//             <CookieConsent
//                 location="bottom"
//                 buttonText="Accept Cookies"
//                 declineButtonText="Decline"
//                 enableDeclineButton
//                 cookieName="userCookieConsent"
//                 style={{ background: "#11022D"}}
//                 buttonStyle={{ color: "#ffffff", fontSize: "13px", background: '#FF0073', borderRadius: "24px", padding: '5px 16px', fontWeight: 600 }}
//                 declineButtonStyle={{ color: "#170F49", fontSize: "13px", background: "#ffffff", borderRadius: "24px",fontWeight: 600 }}
//                 expires={365}
//             >
//                 <div style={{display:'flex',alignItems:'start',gap:'10px'}}>
//                     <Image
//                         src={Cookies}
//                         className='w-[24px] '
//                         alt='CookiesIcon'
//                     />
//                     <span className='font-urbanist'>Our website use cookies. By continuing navigating, we assume your permission to deploy cookies as detailed in our <Link className='text-brand underline font-semibold' href="/PrivacyPolicy">Privacy Policy.</Link></span>
//                     </div>
//             </CookieConsent>
//         </div>
//     )
// }

// export default CookieConsentComponent


"use client"

// cursor coding ass 
import './CustomCursor.module.css'


import React, { useEffect } from 'react';

const CookieConsent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.freeprivacypolicy.com/public/cookie-consent/4.2.0/cookie-consent.js';
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    document.body.appendChild(script);

    script.onload = () => {
      cookieconsent.run({
        notice_banner_type: 'banner',
        consent_type: 'express',
        palette: 'dark',
        language: 'en',
        page_load_consent_levels: ['strictly-necessary'],
        notice_banner_reject_button_hide: false,
        preferences_center_close_button_hide: false,
        page_refresh_confirmation_buttons: false,
        website_name: 'gunpowder innovation',
        custom_css_class: 'custom-cookie-modal', // Add your custom class
      });

      // Apply additional styling after the modal is injected
      const style = document.createElement('style');
      style.innerHTML = `
      .custom-cookie-modal {
        position: fixed !important;
        bottom: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 400px !important;
        background-color: #333 !important;
        color: white !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 20px !important;
        box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.2) !important;
        z-index: 9999 !important;
      }
      
      .custom-cookie-modal .cc-btn {
        background-color: #007bff !important; /* Blue color */
        color: white !important;
        border: none !important;
        padding: 10px 20px !important;
        margin: 10px !important;
        border-radius: 5px !important;
        cursor: pointer !important;
      }
    
      .custom-cookie-modal .cc-btn:hover {
        background-color: #0056b3 !important; /* Darker shade of blue for hover */
      }
    `;
    
      document.head.appendChild(style);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <noscript>
        Cookie Consent by{' '}
        <a href="https://www.freeprivacypolicy.com/">Free Privacy Policy Generator</a>
      </noscript>
      <a className='font-semibold' style={{position:'fixed',bottom:'40px',right:'50px'}} href="#" id="open_preferences_center">
        Update cookies preferences
      </a>
    </div>
  );
};

export default CookieConsent;
