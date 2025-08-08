import React from "react";

export default function DonarStats() {
  return (
    <section className="mt-8 grid grid-cols-2 gap-4">
      <div className="bg-white group rounded-2xl p-6 text-center shadow-lg">
        {/* Total Donors */}
        <div className="w-16 h-16 mx-auto mb-2  bg-red-100 rounded-full flex items-center justify-center">
          <i className="ri-user-heart-fill group-hover:scale-150 transition-transform duration-200 text-red-600 text-xl"></i>
        </div>
        <p className="text-3xl font-bold text-gray-800">156</p>
        <p className="text-gray-500 mt-1">Total Donors</p>
      </div>

      {/* Available Donors Now */}
      <div className="bg-white group rounded-2xl p-6 text-center shadow-lg">
        <div className="w-16 h-16 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
          <i className="ri-drop-fill group-hover:scale-150 transition-transform duration-200 text-green-600 text-xl"></i>
        </div>
        <p className="text-3xl font-bold text-gray-800">89</p>
        <p className="text-gray-500 mt-1">Available Now</p>
      </div>
    </section>
  );
}
