"use client";

import { Search, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 
      bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
      backdrop-blur-md border-b border-gray-700 shadow-lg">
      
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        
        {/* Search */}
        <div className="flex items-center gap-4 w-full">
          <div className="relative w-full max-w-md">
            <input
              className="w-full rounded-xl pl-10 pr-3 py-2 text-sm 
                         text-gray-200 placeholder-gray-400 outline-none 
                         bg-gray-800 border border-gray-700 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Search events, attendees..."
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={16}
            />
          </div>
        </div>

        {/* Icons & Profile */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
            <Bell size={18} className="text-gray-300 hover:text-white" />
          </button>
          <div className="w-9 h-9 rounded-full 
            bg-gradient-to-r from-indigo-500 to-indigo-700 
            text-white grid place-items-center 
            text-sm font-semibold shadow-md">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
