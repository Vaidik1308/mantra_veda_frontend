import type { Metadata } from "next";
import "./globals.css";
import HeaderSection from "@/components/common/header";
import FooterSection from "@/components/common/footer";




export const metadata: Metadata = {
  title: "MantraVeda",
  description: "vedic mantra a app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased text-[var(--text-primary)] w-full min-h-screen bg-[#FFFDF0]`}
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
