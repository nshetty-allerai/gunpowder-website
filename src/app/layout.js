// import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CustomCursor from "@/components/common/CustomCursor";
import { AntdRegistry } from '@ant-design/nextjs-registry';


import { Urbanist, Afacad } from 'next/font/google';

// Define fonts
const afacad = Afacad({
  subsets: ['latin'],
  weights: ['400', '500', '600', '700'],
  variable:'--font-afacad'
});

const urbanist = Urbanist({
  subsets: ['latin'],
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
   variable:'--font-urbanist'
});




export const metadata = {
  title: "Gunpowder",
  description: "Gunpowder Innovation",
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
        <AntdRegistry>
          <CustomCursor />
          <Header />
          {children}
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
