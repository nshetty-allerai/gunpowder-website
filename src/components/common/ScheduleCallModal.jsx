"use client"

import { Close, Meeting, WhatsApp } from '@/utils/constants/constant'
import { ConfigProvider, Modal } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import CalModal from './CalModal'

const ScheduleCallModal = ({ open, close }) => {
    const [show,setShow]=useState(false)


    // useEffect(() => {
    //     (async function () {
    //         const cal = await getCalApi({ "namespace": "30min" });
    //         cal("ui", { "theme": "dark", "cssVarsPerTheme": { "dark": { "cal-brand": "#FF0073" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    //     })();
    // }, [])
    return (
        <>
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
                    title={<div className='ms-4 me-10 md:me-0 font-afacad'><span >Bring your idea, and we’ll make it happen!</span></div>}
                    open={open}
                    onOk={close}
                    onCancel={close}
                    okText=""
                    cancelText=""
                    footer={null}
                    width={810}
                    closeIcon={<Image src={Close} className='w-[30px] absolute top-[20px] right-[30px]' alt='close icon' />}
                    className="custom-modal-schedule-call-modal"
                >
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-6 mt-6 p-4 font-urbanist'>
                        <div className='bg-[#1F0E43] py-5 px-6 rounded-3xl text-white'>
                            <div className='flex items-center gap-3'>
                                <Image
                                    src={Meeting}
                                    className="w-[50px]"
                                    alt=""
                                />
                                <h6 className='md:text-3xl text-xl font-afacad'>Schedule Meeting</h6>
                            </div>
                            <p className='font-semibold text-sm leading-[20px] my-5'>Talking business takes time. Schedule a meeting for later!</p>
                            <button className='block w-full py-4 bg-brand rounded-[30px] font-semibold text-lg' 
                                // data-cal-namespace="30min" data-cal-link="contact-us-ho6ezd/30min" data-cal-config='{"layout":"month_view","theme":"dark"}'
                                onClick={()=>setShow(true)}
                                >Get a Slot</button>
                        </div>
                        <div className='bg-[#29164C3B] py-5 px-6 rounded-3xl text-white'>
                            <div className='flex items-center gap-3'>
                                <Image
                                    src={WhatsApp}
                                    className="w-[50px]"
                                    alt=""
                                />
                                <h6 className='md:text-3xl text-xl font-afacad'>Quick Chat</h6>
                            </div>
                            <p className='font-semibold text-sm leading-[20px] my-5'>Let&apos;s cut to the chase. Our business team is a text away!</p>
                            <button className='block w-full py-4 bg-transparent border-2 text-brand border-brand rounded-[30px] font-semibold text-lg'>Chat Now</button>
                        </div>
                    </div>
                </Modal>
            </ConfigProvider>

            <CalModal
                open={show}
                close={()=>setShow(false)}
            />
        </>
    )
}

export default ScheduleCallModal