import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import BottomNav from "./Components/BottomNav";
import BloodFighterContextProvider from "./Context/BloodFighter";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blood Fighter",
  description: "Here we can found blood donors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BloodFighterContextProvider>
          <Header />
          {children}
        </BloodFighterContextProvider>
        <BottomNav />
      </body>
    </html>
  );
}
