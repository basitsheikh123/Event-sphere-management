"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", attendees: 320 },
  { month: "Feb", attendees: 410 },
  { month: "Mar", attendees: 380 },
  { month: "Apr", attendees: 520 },
  { month: "May", attendees: 610 },
  { month: "Jun", attendees: 560 },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-50 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Analytics Dashboard
        </h1>
        <span className="text-sm text-gray-500">2025 Overview</span>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-yellow-400 via-red-500 via-green-500 to-blue-500">
          <div className="rounded-2xl bg-white p-6 text-center">
            <p className="text-gray-500 text-sm">Total Attendees</p>
            <h2 className="text-2xl font-bold text-gray-900">2,800+</h2>
          </div>
        </div>

        <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-yellow-400 via-red-500 via-green-500 to-blue-500">
          <div className="rounded-2xl bg-white p-6 text-center">
            <p className="text-gray-500 text-sm">Avg Growth</p>
            <h2 className="text-2xl font-bold text-gray-900">+15%</h2>
          </div>
        </div>

        <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-yellow-400 via-red-500 via-green-500 to-blue-500">
          <div className="rounded-2xl bg-white p-6 text-center">
            <p className="text-gray-500 text-sm">Total Events</p>
            <h2 className="text-2xl font-bold text-gray-900">12</h2>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="rounded-2xl p-6 bg-white shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Attendees by Month
          </h2>
          <span className="text-sm text-gray-500">Jan – Jun 2025</span>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  background: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  color: "#111827",
                }}
              />
              <Line
                type="monotone"
                dataKey="attendees"
                stroke="url(#gradientStroke)"
                strokeWidth={3}
                dot={{ r: 4, fill: "#fff", strokeWidth: 2 }}
                activeDot={{ r: 6 }}
              />
              <defs>
                <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#facc15" />
                  <stop offset="50%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
