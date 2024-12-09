"use client";

import { useState,useEffect } from "react";
import { BombAnimationHovered, BombAnimation } from "../constants/constant";
import Image from "next/image";

const HoverImage = () => {
  const [hovered, setHovered] = useState(false);



  
  const [width, setWidth] = useState(0);
  const [boxWidth, setBoxWidth] = useState(295); // Default width


  useEffect(() => {
    const updateWidth = () => {
      const screenWidth = window.innerWidth;
      setWidth(screenWidth);

      // Apply conditions based on screen width
      if (screenWidth >= 1024) {
        setBoxWidth(295); // lg:w-[295px]
      } else if (screenWidth >= 768) {
        setBoxWidth(209); // md:w-[209px]
      } else {
        setBoxWidth(118); // w-[200px]
      }
    };

    updateWidth(); // Set initial values
    window.addEventListener('resize', updateWidth); // Update on resize

    return () => {
      window.removeEventListener('resize', updateWidth); // Cleanup on unmount
    };
  }, []);

  return (
    <div
      className="relative w-64 h-64 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        width={boxWidth}
        src={hovered?BombAnimationHovered:BombAnimation}
        alt="Hovered image"
        className={`lg:w-[295px] md:w-[209px] w-[209px] lg:h-[400px] h-[283px] transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default HoverImage;

