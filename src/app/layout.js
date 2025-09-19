import React from "react";

// import { Geist, Geist_Mono } from "next/font/google";
import { GFS_Didot, Poppins } from "next/font/google";
import "./globals.css";  

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"], // adjust weights as needed
  display: "swap",
});

const gfsDidot = GFS_Didot({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gfs-didot",
  display: "swap",
});

export const metadata = {
  title: "Kavana Penida",
  description: "Restaurant near Crystal Bay Nusa Penida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${gfsDidot.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
