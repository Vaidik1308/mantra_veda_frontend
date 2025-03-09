import type { Metadata } from "next";
import "./globals.css";
import HeaderSection from "@/components/common/header";
import FooterSection from "@/components/common/footer";
import { Poppins } from 'next/font/google'




export const metadata: Metadata = {
  title: "MantraVeda",
  description: "vedic mantra a app",
};


const inter = Poppins({ 
  weight: ['100','200','300','400', '500', '600','700','800','900'],
  subsets: ['latin'] 
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased ${inter.className} w-full min-h-screen bg-[#FFFDF0] `}
      >
        <div className="w-full h-[10vh]">
          <HeaderSection/>
        </div>
        <div className="w-full ">
          {children}
        </div>
        <div className="w-full h-[]">
          <FooterSection/>
        </div>
      </body>
    </html>
  );
}
