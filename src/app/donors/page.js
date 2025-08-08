"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useBloodFighterContext } from "../Context/BloodFighter";

export default function Donors() {
  const { bloodGroups } = useBloodFighterContext();
  const initialDonors = [
    {
      id: 1,
      name: "John Smith",
      age: 29,
      phoneNumber: "01311078039",
      villageCity: "Dhaka",
      bloodGroup: "O+",
      donationDate: "4/15/2023",
      nextDonationDate: "10/15/2023",
      donations: 5,
      eligible: false,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      age: 25,
      phoneNumber: "01722334455",
      villageCity: "Khulna",
      bloodGroup: "A+",
      donationDate: "7/20/2024",
      nextDonationDate: "1/20/2025",
      donations: 4,
      eligible: true,
    },
    {
      id: 3,
      name: "Mike Davis",
      age: 32,
      phoneNumber: "01833445566",
      villageCity: "Chittagong",
      bloodGroup: "B+",
      donationDate: "7/10/2024",
      nextDonationDate: "1/10/2025",
      donations: 3,
      eligible: true,
    },
    {
      id: 4,
      name: "Emily Wilson",
      age: 28,
      phoneNumber: "01944556677",
      villageCity: "Sylhet",
      bloodGroup: "B+",
      donationDate: "3/25/2023",
      nextDonationDate: "9/25/2023",
      donations: 2,
      eligible: false,
    },
    {
      id: 5,
      name: "David Brown",
      age: 35,
      phoneNumber: "01655667788",
      villageCity: "Gazipur",
      bloodGroup: "O-",
      donationDate: "9/8/2024",
      nextDonationDate: "3/8/2025",
      donations: 12,
      eligible: true,
    },
    {
      id: 6,
      name: "Lisa Anderson",
      age: 30,
      phoneNumber: "01766778899",
      villageCity: "Rangpur",
      bloodGroup: "A-",
      donationDate: "7/30/2024",
      nextDonationDate: "1/30/2025",
      donations: 4,
      eligible: true,
    },
    {
      id: 7,
      name: "Robert Taylor",
      age: 41,
      phoneNumber: "01877889900",
      villageCity: "Bogra",
      bloodGroup: "B-",
      donationDate: "6/15/2024",
      nextDonationDate: "12/15/2024",
      donations: 5,
      eligible: true,
    },
    {
      id: 8,
      name: "Jennifer Lee",
      age: 27,
      phoneNumber: "01988990011",
      villageCity: "Comilla",
      bloodGroup: "AB-",
      donationDate: "7/18/2024",
      nextDonationDate: "1/18/2025",
      donations: 7,
      eligible: true,
    },
  ];

  // State for search query and active blood group filter.
  const [searchQuery, setSearchQuery] = useState("");
  const [activeBloodGroup, setActiveBloodGroup] = useState("All");

  // Filtered donors based on search and blood group.
  const filteredDonors = initialDonors.filter((donor) => {
    const matchesSearch =
      donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      donor.villageCity.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBloodGroup =
      activeBloodGroup === "All" || donor.bloodGroup === activeBloodGroup;
    return matchesSearch && matchesBloodGroup;
  });

  // Blood groups to display for the filter buttons.
  const bloodGroupsList = [
    "All",
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header section */}
      <header className="w-full max-w-7xl bg-white shadow-md p-4 flex flex-col lg:rounded-b-xl lg:px-8">
        <div className="flex items-center justify-between mb-4">
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
          <div className="text-sm flex gap-5 text-gray-600">
            <p className="text-xl font-bold">Total: {initialDonors.length}</p>
            <p className="text-xl font-bold text-green-500">
              Eligible: {initialDonors.filter((d) => d.eligible).length}
            </p>
          </div>
        </div>
        <div className="md:flex justify-between items-center">
          {/* Search bar */}
          <div className="relative mb-5 md:mb-0">
            <input
              type="text"
              placeholder="Search by name or village..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full lg:w-100 pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
            />
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
          {/* Blood group filters */}
          <div className="flex flex-wrap gap-2">
            {bloodGroupsList.map((group) => (
              <button
                key={group}
                onClick={() => setActiveBloodGroup(group)}
                className={`
                                px-3 py-2 cursor-pointer rounded-full text-sm font-semibold transition-colors duration-200
                                ${
                                  activeBloodGroup === group
                                    ? "bg-red-600 text-white shadow-md"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }
                            `}>
                {group}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main content area */}
      <main className="w-full max-w-7xl p-4 lg:p-0 lg:pt-8 pb-20">
        {/* Donor list grid on desktop */}
        <div className="hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:grid">
          {filteredDonors.map((donor) => (
            <div
              key={donor.id}
              className="bg-white rounded-2xl p-6 shadow-lg relative grid grid-cols-2 justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {donor.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {donor.villageCity}
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  <span className="font-semibold">Age:</span> {donor.age} years
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Donation Date:</span>{" "}
                  {donor.donationDate}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Next Donation:</span>{" "}
                  {donor.nextDonationDate}
                </p>
                <p className="text-sm font-semibold mt-2">
                  {donor.eligible ? (
                    <span className="text-green-600">Eligible</span>
                  ) : (
                    <span className="text-red-600">Not Eligible</span>
                  )}
                </p>
              </div>
              <div className="flex flex-col justify-between items-end mt-4">
                {bloodGroups
                  .filter((group) => group.group === donor.bloodGroup)
                  .map((group) => (
                    <div
                      key={group.id}
                      className={`w-12 h-12 rounded-full ${group.color} text-black flex items-center justify-center font-bold text-lg mb-2`}>
                      {group.group}
                    </div>
                  ))}

                <div className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-800">
                    {donor.donations}
                  </span>{" "}
                  Donations
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Donor list for mobile and tablet */}
        <div className="flex flex-col gap-4 lg:hidden">
          {filteredDonors.map((donor) => (
            <div
              key={donor.id}
              className={`${
                donor.eligible
                  ? "bg-green-100 border border-green-300"
                  : "bg-red-50 border border-red-400"
              } rounded-2xl p-6 shadow-lg relative flex justify-between items-start`}>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-800">
                  {donor.name}
                </h3>
                <p className="text-gray-500 text-sm">{donor.villageCity}</p>
                <p className="text-gray-600 text-sm mt-2">
                  <span className="font-semibold">Age:</span> {donor.age} years
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Donation Date:</span>{" "}
                  {donor.donationDate}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Next Donation Date:</span>{" "}
                  {donor.nextDonationDate}
                </p>
                <p className="text-sm font-semibold mt-2">
                  {donor.eligible ? (
                    <>
                      <span className="text-green-600">Eligible</span>{" "}
                      <span className="px-5 text0xl font-bold text-gray-700">
                        {donor.phoneNumber}
                      </span>
                      <a href={`tel:${donor.phoneNumber}`}>📞 Call Now</a>
                    </>
                  ) : (
                    <span className="text-red-600">Not Eligible</span>
                  )}
                </p>
              </div>
              <div className="flex flex-col items-center ml-4">
                {bloodGroups
                  .filter((group) => group.group === donor.bloodGroup)
                  .map((group) => (
                    <div
                      key={group.id}
                      className={`w-12 h-12 rounded-full ${group.color} text-black flex items-center justify-center font-bold text-lg mb-2`}>
                      {group.group}
                    </div>
                  ))}

                <div className="text-sm text-center">
                  <span className="font-semibold text-gray-800">
                    {donor.donations}
                  </span>
                  <br />
                  <span className="text-gray-500">Donations</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
