import CookiesModal from "@/components/common/CookiesModal";
import FeturedAndBenifts from "@/components/UI/FeturedAndBenifts";
import HeroSection from "@/components/UI/HeroSection";
import NeedHelpCircle from "@/components/UI/NeedHelpCircle";
import Process from "@/components/UI/Process";
import Questions from "@/components/UI/Questions";
import WhoWeAre from "@/components/UI/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <>
   <div>
      <HeroSection/>
      <WhoWeAre/>
      <FeturedAndBenifts/>
      <Process/>
      <Questions/>
      <NeedHelpCircle/>
   </div>
   {/* <CookiesModal/> */}
   </>
  );
}
