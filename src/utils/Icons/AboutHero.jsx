"use client";

import { useState } from "react";
import { AboutUsHeroSection, AboutUsHeroSectionHover } from "../constants/constant";
import Image from "next/image";

const HoverImage = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-64 h-64 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={hovered?AboutUsHeroSectionHover:AboutUsHeroSection}
        alt="Hovered image"
        className={`lg:w-[432px] md:w-[224px] w-[315px] transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default HoverImage;

