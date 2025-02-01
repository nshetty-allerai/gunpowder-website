import CookiesModal from "@/components/common/CookiesModal";
import BlogForHomePages from "@/components/UI/BlogForHomePages";
import FeturedAndBenifts from "@/components/UI/FeturedAndBenifts";
import HeroSection from "@/components/UI/HeroSection";
import NeedHelpCircle from "@/components/UI/NeedHelpCircle";
import Process from "@/components/UI/Process";
import Questions from "@/components/UI/Questions";
import WhoWeAre from "@/components/UI/WhoWeAre";
import Image from "next/image";



export const metadata = {
  title: "Top UX/UI Design, Web Development, and Software Development Services | Gunpowder Innovations",
  description: "Gunpowder Digital offers AI-driven financial advice, custom fintech solutions, and mobile app development for wealth management and startups in the UK.",
  keywords:["AI-Powered Financial Advice Engine", "Fintech Development Solutions", "Mvp Development for Startups", "Custom Saas Product Design", "Website design company UK", "Mobile App Solutions UK", "Custom Fintech Development", "End-to-End Fintech App Development", "Mobile App Development for WealthTech", "Android ios app development", "AI Wealth Management Solutions", "Gunpowder Digital agency UK", "Transforming Wealth Management with AI", "Gunpowder’s Client Mobile App Expertise", "Android App Development Service", "AI-Driven Wealth Engine", "Web Development Agency UK", "Web development company UK"],
  metadataBase: new URL("https://www.gunpowderinnovations.com"),
  alternates: {
    canonical: "/",
  },

};


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
          {/* <BlogForHomePages/> */}
      </div>
   {/* <CookiesModal/> */}
   </>
  );
}
