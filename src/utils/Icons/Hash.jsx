import React from 'react'

const Hash = ({width ,height}) => {
    return (
        <svg width={width|| "33"} height={height||"32"} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.1159 8H3.44922" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30.1159 24H3.44922" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.7832 2.66797V29.3346" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24.7832 2.66797V29.3346" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default Hash