import Link from "next/link";
import AllDonerAndStatistics from "./Components/AllDonerAndStatistics";
import BloodGroupAvailability from "./Components/BloodGroupAvailability";
import DonarStats from "./Components/DonarStats";
import SaveLifeTodayCard from "./Components/SaveLifeTodayCard";
import { db } from "./Firebase/FIrebase";

export default function Home() {
console.log(db);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Main content area */}
      <main className="w-full max-w-7xl p-4 lg:p-8 mt-20 lg:mt-0 pb-20 lg:pb-8">
        {/* "Save Lives Today" card */}
        <SaveLifeTodayCard />

        {/* Donor statistics section */}
        <DonarStats />

        {/* Blood group availability section */}
        <BloodGroupAvailability />

        {/* Main actions section */}
        <AllDonerAndStatistics />
      </main>

      {/* Fixed bottom navigation bar for mobile */}

      {/* "Designed by Readdy" footer */}
      <footer className="fixed bottom-0 right-0 -translate-x-1/2 p-2 px-4 mb-4 bg-white/70 backdrop-blur-sm rounded-full text-sm text-gray-600 hidden lg:flex items-center space-x-2">
        <span>Designed by</span>
        <span className="flex items-center space-x-1">
          <i className="fas fa-paper-plane text-blue-500"></i>
          <Link href="#">MD. NAEEM UDDIN</Link>
        </span>
      </footer>
    </div>
  );
}
