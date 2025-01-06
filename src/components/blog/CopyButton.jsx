"use client";
import { CopyIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from '@/utils/constants/constant'
import Image from 'next/image'
import React from 'react'
import { useState } from "react";
const CopyButton = () => {
    const [copied, setCopied] = useState(false);
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    const handleCopyLink = () => {
        const currentUrl = window.location.href; // Get the current URL
        navigator.clipboard
            .writeText(currentUrl)
            .then(() => {
                setCopied(true); // Set the state to show the alert
                setTimeout(() => setCopied(false), 2000); // Hide the alert after 2 seconds
            })
            .catch((err) => {
                console.error("Failed to copy URL: ", err);
            });
    };


    const shareOnTwitter = () => {
        const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            currentUrl
        )}&text=Check%20this%20out!`;
        window.open(twitterShareUrl, "_blank", "noopener,noreferrer");
    }
    const shareOnLinkedIn = () => {
        const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            currentUrl
          )}&title=Check%20this%20out!&summary=This%20is%20an%20amazing%20link!`;
          console.log("LinkedIn URL:", linkedInShareUrl); // Debugging
          window.open(linkedInShareUrl, "_blank", "noopener,noreferrer");
    }
    const shareOnFacebook = () => {
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            currentUrl
          )}`;
          window.open(facebookShareUrl, "_blank", "noopener,noreferrer");
    }
    return (
        <div>
            <div className='hidden lg:flex gap-3'>
                <div onClick={handleCopyLink} className='flex items-center cursor-pointer gap-2 border border-brand rounded-lg px-4 py-2 bg-[#FF00732E] font-semibold text-brand'>
                    <Image
                        src={CopyIcon}
                        className='w-4 h-4'
                        alt='author image'
                    />
                    <span className='text-sm'>{copied ? "URL copied" : "Copy link"}</span>
                </div>
                <div className='flex gap-3'>
                    <div className='cursor-pointer' onClick={shareOnTwitter}>
                        <Image
                            src={TwitterIcon}
                            className='h-full w-auto'
                            alt='twitter icon'
                        />
                    </div>
                    <div className='cursor-pointer'  onClick={shareOnFacebook}>
                        <Image
                            src={FacebookIcon}
                            className='h-full w-auto'
                            alt='facebook icon'
                        />
                    </div>
                    <div className='cursor-pointer'  onClick={shareOnLinkedIn}>
                        <Image
                            src={LinkedinIcon}
                            className='h-full w-auto'
                            alt='linkedin icon'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CopyButton