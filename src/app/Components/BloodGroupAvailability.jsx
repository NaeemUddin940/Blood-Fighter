"use client";
import React from "react";
import { useBloodFighterContext } from "../Context/BloodFighter";

export default function BloodGroupAvailability() {
  const { bloodGroups } = useBloodFighterContext();
  return (
    <section className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Blood Group Availability
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 text-center">
        {bloodGroups.map((item) => (
          <div className="flex flex-col items-center group p-2" key={item.group}>
            <div className={`w-16 h-16 cursor-pointer rounded-full ${item.color} text-black flex items-center group-hover:shadow-2xl group-hover:scale-110 transition-transform duration-200 justify-center font-bold text-xl mb-1`}>
              <h1 className="group-hover:scale-110 transition-transform duration-200">
                {item.group}
              </h1>
            </div>
            <p className="text-gray-800 text-sm font-semibold">{item.donors} donors</p>
          </div>
        ))}
      </div>
    </section>
  );
}
