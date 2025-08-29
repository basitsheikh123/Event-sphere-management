"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [org, setOrg] = useState({
    name: "EventSphere",
    email: "admin@eventsphere.com",
  });

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Settings ⚙️</h1>
        <p className="text-gray-500 mt-2 text-lg">
          Manage your organization preferences
        </p>
      </div>

      {/* Settings Form Card */}
      <div className="max-w-xl mx-auto rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-md">
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Organization Details
          </h2>

          <div className="space-y-5">
            {/* Organization Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Organization Name
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                value={org.name}
                onChange={(e) => setOrg({ ...org, name: e.target.value })}
                placeholder="Enter organization name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Support Email
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                value={org.email}
                onChange={(e) => setOrg({ ...org, email: e.target.value })}
                placeholder="Enter support email"
              />
            </div>

            {/* Update Button */}
            <div className="pt-4">
              <button className="w-full px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow hover:scale-105 transition">
                Update Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
