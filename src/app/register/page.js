"use client";
import React, { useState } from "react";

// The main component for the Register Donor page.
const Register = () => {
  // State to manage form data.
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    villageCity: "",
    bloodGroup: "",
    phoneNumber: "",
  });

  // State to manage the status message after form submission.
  const [submissionStatus, setSubmissionStatus] = useState("");

  // Function to handle form input changes.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle blood group selection.
  const handleBloodGroupClick = (group) => {
    setFormData({ ...formData, bloodGroup: group });
  };

  // Function to handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled.
    const requiredFields = [
      "fullName",
      "age",
      "villageCity",
      "bloodGroup",
      "phoneNumber",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setSubmissionStatus("Please fill in all required fields.");
        return;
      }
    }

    // At this point, the form would be submitted to a backend.
    // For this UI-only version, we'll just simulate a successful submission.

    setSubmissionStatus("Donor registration successful!");
    setTimeout(() => {
      setSubmissionStatus("");
    }, 3000);

    // Reset the form data after a successful "submission".
    setFormData({
      fullName: "",
      age: "",
      villageCity: "",
      bloodGroup: "",
      phoneNumber: "",
    });
  };

  // Array of blood groups for easy mapping.
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Main content area */}
      <main className="w-full max-w-2xl p-4 lg:p-8 mt-20 lg:mt-0 pb-20 lg:pb-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center text-4xl mb-2 shadow-lg">
            <i className="fas fa-user-plus"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Register Donor</h1>
          <p className="text-gray-500 mt-1 text-center">
            Add a new blood donor to the system
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter full name"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
            />
          </div>
          {/* Age */}
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Enter age"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
            />
          </div>
          {/* Village/City */}
          <div className="mb-4">
            <label
              htmlFor="villageCity"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Village/City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="villageCity"
              name="villageCity"
              value={formData.villageCity}
              onChange={handleInputChange}
              placeholder="Enter village or city"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
            />
          </div>
          {/* Phone Number */}
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
            />
          </div>
          {/* Blood Group */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Blood Group <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {bloodGroups.map((group) => (
                <button
                  key={group}
                  type="button"
                  onClick={() => handleBloodGroupClick(group)}
                  className={`
                                        px-4 py-3 cursor-pointer rounded-lg font-semibold text-lg
                                        ${
                                          formData.bloodGroup === group
                                            ? "bg-red-600 text-white shadow-md"
                                            : "bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors duration-200"
                                        }
                                    `}>
                  {group}
                </button>
              ))}
            </div>
          </div>

          {/* Email Address */}
          {/* <div className="mb-4">
            <label
              htmlFor="emailAddress"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              placeholder="Enter email address"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
            />
          </div> */}
          {/* Last Donation Date */}
          {/* <div className="mb-6">
            <label
              htmlFor="lastDonationDate"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Last Donation Date
            </label>
            <div className="relative">
              <input
                type="date"
                id="lastDonationDate"
                name="lastDonationDate"
                value={formData.lastDonationDate}
                onChange={handleInputChange}
                placeholder="mm/dd/yyyy"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Leave empty if this is the first donation
            </p>
          </div> */}

          <button
            type="submit"
            onClick={() => console.log(formData)}
            className="w-full cursor-pointer bg-red-600 text-white font-semibold py-4 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-200">
            Register Donor
          </button>
          {/* Submission status message */}
          {submissionStatus && (
            <p
              className={`mt-4 text-center font-semibold ${
                submissionStatus.includes("success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}>
              {submissionStatus}
            </p>
          )}
        </form>

        {/* Donation Guidelines Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 flex items-center justify-center text-blue-600 mt-0.5">
              <i className="ri-information-line"></i>
            </div>
            <div>
              <h3 className="font-medium text-blue-900">Donation Guidelines</h3>
              <ul className="text-sm text-blue-800 mt-1 space-y-1">
                <li>• Donors must be 18-65 years old</li>
                <li>• Wait 56 days between donations</li>
                <li>• Must weigh at least 50kg</li>
                <li>• Be in good health</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
