"use client"

// import { InlineWidget } from "react-calendly";
// import './Calendly.css'

// function MyCalendly() {

//   const applyCustomStyles = () => {
//     const iframe = document.querySelector(".calendly-inline-widget iframe");
    
//     // Check if iframe is loaded and accessible
//     if (iframe) {
//       try {
//         const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        
//         // Create style element to inject into the iframe document
//         const style = document.createElement("style");
//         style.textContent = `
//           #full_name_input {
//             background-color: transparent !important;
//             color: #333333 !important; /* Adjust text color */
//           }
//         `;
//         iframeDoc.head.appendChild(style);

//       } catch (error) {
//         console.error("Could not access iframe content due to cross-origin restrictions:", error);
//       }
//     }
//   };


  
//   return (
//     <div id="calendly" >
//       <InlineWidget 
//         url="https://calendly.com/jadhavane001" 
//         // styles={{ height: "700px" ,backgroundColor: "#1e1e2f"}} 
//         pageSettings={{
//           backgroundColor: "#16090F",
//           textColor: "#fff",
//           primaryColor: "#FF0073",
//           border:"1px solid #FF0073",
//           hideLandingPageDetails: false,
//           // hideEventTypeDetails: true,
          
//         }}
//         onLoad={applyCustomStyles} 
//       />
//     </div>
    
//   );
// }

// export default MyCalendly;


// "react-calendly": "^4.3.1",



import  { getCalApi } from "@calcom/embed-react";
import { useEffect ,useState } from "react";


import dynamic from 'next/dynamic';

const Cal = dynamic(() => import('@calcom/embed-react'), { ssr: false });

export default function ContactPage() {



  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures the code runs only on the client
  }, []);

  
  useEffect(() => {
    (async function () {
      // if(isClient){ 
        try {
        const cal = await getCalApi({ namespace: "demo" });
        cal("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#FF0073"},"dark":{"cal-brand":"#FF0073" }},"hideEventTypeDetails":false,"layout":"month_view"});
      } catch (error) {
        console.error("Cal API error:", error);
      }
    // }
    })();
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto">
    <div className="">
      {isClient ?<Cal
        namespace="demo"
        calLink="contact-us-ho6ezd/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" ,background:'#16090F', paddingTop:'70px' ,paddingBottom:'20px',paddingLeft:'16px',paddingRight:'16px' }}
        config={{ layout: "month_view", theme: "dark" }}
      /> : 'server '}
    </div>
    </section>
  );
}

// import React from 'react'

// const Calendly = () => {
//   return (
//     <div>Calendly</div>
//   )
// }

// export default Calendly

