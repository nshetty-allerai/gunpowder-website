"use client"
import React, { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const cursor = cursorRef.current;
            // if (cursor) {
            //     cursor.style.left = `${e.clientX}px`;
            //     cursor.style.top = `${e.clientY}px`;
            // }
            if (cursor) {
                // Check if the mouse is over the footer
                if (e.target.closest("#footer") || e.target.closest("#What-you-get") || e.target.closest("#questions") || e.target.closest("#founder-image") || e.target.closest("#team-member")) {
                    cursor.style.display = "none"; 
                } else {
                    cursor.style.display = "block";
                    cursor.style.left = `${e.clientX}px`;
                    cursor.style.top = `${e.clientY}px`;
                }
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div ref={cursorRef} className={styles.customCursor}>
            <svg xmlns="http://www.w3.org/2000/svg" width="992" height="991" viewBox="0 0 992 991" fill="none">
                <g filter="url(#filter0_f_1822_3223)">
                    <path d="M640 352.086H352V639.086H640V352.086Z" fill="#FF0073" fillOpacity="0.29" />
                </g>
                <defs>
                    <filter id="filter0_f_1822_3223" x="0.100006" y="0.185944" width="991.8" height="990.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="175.95" result="effect1_foregroundBlur_1822_3223" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default CustomCursor;
