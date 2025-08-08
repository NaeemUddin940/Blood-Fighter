"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const hideHeader = ["/donors"];
  const isHideHeader = hideHeader.includes(pathname);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth < 1024) {
        if (currentScrollY > lastScrollY) {
          setIsHeaderVisible(false);
        } else {
          setIsHeaderVisible(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="main-header"
      className={`w-full ${
        isHideHeader ? "hidden" : ""
      } bg-white shadow-md px-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 
                           lg:static lg:rounded-b-xl lg:px-8 transition-transform duration-300 ease-in-out transform
                           ${
                             isHeaderVisible
                               ? "translate-y-0"
                               : "-translate-y-full"
                           }`}>
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/blood-donation-save-life.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="hidden lg:flex lg:gap-8">
        <Link href="/">Home</Link>
        <Link href="/donors">Donors</Link>
        <Link href="/register">Register Donor</Link>
        <Link href="/statistics">Statistics</Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 cursor-pointer hover:text-red-600 transition-colors duration-200">
          <i className="fas fa-bell text-xl"></i>
        </button>
        {/* <button className="text-gray-600 hover:text-red-600 transition-colors duration-200">
          <i className="fas fa-heart text-xl"></i>
        </button> */}
      </div>
    </header>
  );
}
