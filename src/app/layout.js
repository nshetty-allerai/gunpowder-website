// import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CustomCursor from "@/components/common/CustomCursor";
import { AntdRegistry } from '@ant-design/nextjs-registry';

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Urbanist, Afacad } from 'next/font/google';
import ContentSquareScript from "@/components/hotjar/ContentSquareScript";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google';
// Define fonts
const afacad = Afacad({
  subsets: ['latin'],
  weights: ['400', '500', '600', '700'],
  variable: '--font-afacad'
});

const urbanist = Urbanist({
  subsets: ['latin'],
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-urbanist'
});


export const metadata = {
  title: "Explore AI Wealth Management Solutions | Gunpowder Innovations",
  description: "Gunpowder Digital offers AI-driven financial advice, custom fintech solutions, and mobile app development for wealth management and startups in the UK.",
  keywords: ["AI-Powered Financial Advice Engine", "Fintech Development Solutions", "Mvp Development for Startups", "Custom Saas Product Design", "Website design company UK", "Mobile App Solutions UK", "Custom Fintech Development", "End-to-End Fintech App Development", "Mobile App Development for WealthTech", "Android ios app development", "AI Wealth Management Solutions", "Gunpowder Digital agency UK", "Transforming Wealth Management with AI", "Gunpowder’s Client Mobile App Expertise", "Android App Development Service", "AI-Driven Wealth Engine", "Web Development Agency UK", "Web development company UK"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      className={`${afacad.variable} ${urbanist.variable}`}
    >
      <body
        id="body"
        className="font-urbanist"
      >
        <ContentSquareScript />
        <AntdRegistry>
          <CustomCursor />
          <Header />
          <Analytics />
          {/* <SpeedInsights /> */}
          {children}
          <Footer />
        </AntdRegistry>
        <GoogleAnalytics gaId="G-Z2VQJ4N54Y" />
      </body>
    </html>
  );
}
