"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function BottomNav() {
  const [activeGroup, setActiveGroup] = useState("Home");
  return (
    <nav
      id="mobile-nav"
      className="w-full bg-white shadow-lg p-3 fixed bottom-0 left-0 right-0 z-10 flex justify-around items-center lg:hidden">
      <Link
        href="/"
        className={`flex flex-col items-center transition-colors duration-200 ${
          activeGroup === "Home"
            ? "text-red-600"
            : "text-gray-400 hover:text-red-600"
        }`}
        onClick={() => setActiveGroup("Home")}>
        <i className="fas fa-home text-lg"></i>
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link
        href="/donors"
        className={`flex flex-col items-center transition-colors duration-200 ${
          activeGroup === "Donors"
            ? "text-red-600"
            : "text-gray-400 hover:text-red-600"
        }`}
        onClick={() => setActiveGroup("Donors")}>
        <i className="fas fa-users text-lg"></i>
        <span className="text-xs mt-1">Donors</span>
      </Link>
      <Link
        href="/register"
        className={`flex flex-col items-center transition-colors duration-200 ${
          activeGroup === "Register"
            ? "text-red-600"
            : "text-gray-400 hover:text-red-600"
        }`}
        onClick={() => setActiveGroup("Register")}>
        <i className="fas fa-plus-circle text-lg"></i>
        <span className="text-xs mt-1">Add</span>
      </Link>
      <Link
        href="/statistics"
        className={`flex flex-col items-center transition-colors duration-200 ${
          activeGroup === "Statistics"
            ? "text-red-600"
            : "text-gray-400 hover:text-red-600"
        }`}
        onClick={() => setActiveGroup("Statistics")}>
        <i className="fas fa-chart-line text-lg"></i>
        <span className="text-xs mt-1">Statistics</span>
      </Link>
    </nav>
  );
}
