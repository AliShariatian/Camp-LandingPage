import { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
// FONT and STYLE
import { Inter } from "next/font/google";
import "./globals.css";
// COMPONENTS
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontInter = Inter({ subsets: ["latin"], display: "swap", weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
   title: "Travel",
   description: "Travel UI/UX App for Camping",
};

const RootLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
   return (
      <html lang="en">
         <body className={fontInter.className}>
            <Navbar />
            <main className="relative overflow-hidden">{children}</main>
            <Footer />
         </body>
      </html>
   );
};

export default RootLayout;
