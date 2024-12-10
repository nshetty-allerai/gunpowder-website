"use client"

import { Close, Meeting, WhatsApp } from '@/utils/constants/constant'
import { ConfigProvider, Modal } from 'antd'
import Image from 'next/image'

import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";


import dynamic from 'next/dynamic';

const Cal = dynamic(() => import('@calcom/embed-react'), { ssr: false });

const CalModal = ({open ,close}) => {



    

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures the code runs only on the client
  }, []);


  useEffect(() => {
    (async function () {
      // if(isClient){ 
      try {
        const cal = await getCalApi({ namespace: "demo" });
        cal("ui", { "theme": "dark", "cssVarsPerTheme": { "light": { "cal-brand": "#FF0073" }, "dark": { "cal-brand": "#FF0073" } }, "hideEventTypeDetails": false, "layout": "month_view" });
      } catch (error) {
        console.error("Cal API error:", error);
      }
      // }
    })();
  }, []);

    return (
        <ConfigProvider
            theme={{
                components: {
                    Modal: {
                        contentBg: '#11022D',
                        headerBg: '#11022D',
                        titleColor: '#ffffff',
                        titleFontSize: 22
                    },
                },
            }}
        >
            <Modal
                centered
                title={<div className='lg:ms-9 mx-4 me-10 md:me-0 font-urbanist'><span >Schedule a call with us </span></div>}
                open={open}
                onOk={close}
                onCancel={close}
                okText=""
                cancelText=""
                footer={null}
                width={1000}
                className='custom-modal-schedule-calcom-modal'
                closeIcon={<Image src={Close} className='w-[30px] absolute top-[20px] right-[30px]' alt='close icon' />}
            >
                <section className="lg:px-9 lg:pb-0 lg:pt-9 md:px-6 pb-6 pt-6 px-0">
                    <div className="">
                        {isClient ? <Cal
                            namespace="demo"
                            calLink="muneeb-ahmed/30min"
                            style={{ width: "100%", height: "100%", overflow: "scroll"}}
                            config={{ layout: "month_view", theme: "dark" }}
                        /> : 'server '}
                    </div>
                </section>
            </Modal>
        </ConfigProvider>
    )
}

export default CalModal





// "use client";

// import { Close } from '@/utils/constants/constant';
// import { ConfigProvider, Modal } from 'antd';
// import Image from 'next/image';
// import { useEffect, useRef, useState } from "react";
// import Appointlet from '@appointlet/appointlet.js';
// import '@appointlet/appointlet.js/dist/appointlet.min.css';

// const CalModal = ({ open, close }) => {
//   const schedulingPageUrl = "https://appt.link/meet-gun-powder-innovations";
//   const [isClient, setIsClient] = useState(false);
//   const embedRef = useRef(null);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     const embedSchedulingPage = async () => {
//       if (embedRef.current && open) {
//         const appointlet = new Appointlet(schedulingPageUrl);

//         try {
//           const meetingData = await appointlet.inlineEmbed(embedRef.current);
//           if (meetingData) {
//             console.log('Meeting booked:', meetingData);
//           }
//         } catch (error) {
//           console.error('Error embedding scheduling page:', error);
//         }
//       }
//     };

//     if (isClient && open) {
//       embedSchedulingPage();
//     }

//     return () => {
//       // Optional cleanup: Clear the embedded content if needed.
//       if (embedRef.current) {
//         embedRef.current.innerHTML = '';
//       }
//     };
//   }, [isClient, open, schedulingPageUrl]);

//   return (
//     <ConfigProvider
//       theme={{
//         components: {
//           Modal: {
//             contentBg: '#11022D',
//             headerBg: '#11022D',
//             titleColor: '#ffffff',
//             titleFontSize: 22,
//           },
//         },
//       }}
//     >
//       <Modal
//         centered
//         title={
//           <div className="lg:ms-9 mx-4 me-10 md:me-0 font-urbanist">
//             <span>Schedule a call with us</span>
//           </div>
//         }
//         open={open}
//         onOk={close}
//         onCancel={close}
//         footer={null}
//         width={1000}
//         className="custom-modal-schedule-calcom-modal"
//         closeIcon={
//           <Image
//             src={Close}
//             className="w-[30px] absolute top-[20px] right-[30px]"
//             alt="close icon"
//           />
//         }
//       >
//         <section className="lg:px-9 lg:pb-0 lg:pt-9 md:px-6 pb-6 pt-6 px-0">
//           <div>
//             {isClient ? (
//               <div ref={embedRef} style={{ height: '400px',overflowY:'auto' }} />
//             ) : (
//               'Loading...'
//             )}
//           </div>
//         </section>
//       </Modal>
//     </ConfigProvider>
//   );
// };

// export default CalModal;
