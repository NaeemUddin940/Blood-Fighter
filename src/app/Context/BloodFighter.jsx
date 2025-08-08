"use client";
import React, { useContext, useState } from "react";
import { createContext } from "react";

const BloodFighterContext = createContext();

export default function BloodFighterContextProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const bloodGroups = [
    { group: "A+", color: "bg-green-300", donors: 23 },
    { group: "A-", color: "bg-green-200", donors: 12 },
    { group: "B+", color: "bg-red-300", donors: 18 },
    { group: "B-", color: "bg-red-200", donors: 8 },
    { group: "AB+", color: "bg-violet-300", donors: 15 },
    { group: "AB-", color: "bg-violet-200", donors: 10 },
    { group: "O+", color: "bg-blue-300", donors: 28 },
    { group: "O-", color: "bg-blue-200", donors: 14 },
  ];



  const state = {
    searchQuery,
    setSearchQuery,
    bloodGroups,
  };
  return (
    <BloodFighterContext.Provider value={state}>
      {children}
    </BloodFighterContext.Provider>
  );
}

export const useBloodFighterContext = () => useContext(BloodFighterContext);
