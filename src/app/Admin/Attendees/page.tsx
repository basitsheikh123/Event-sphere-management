"use client";

import { useState } from "react";

type Attendee = {
  id: string;
  name: string;
  email: string;
  event: string;
  status: "Confirmed" | "Pending" | "Cancelled";
};

const FALLBACK: Attendee[] = [
  { id: "att-1001", name: "Ali Raza", email: "ali.raza@example.com", event: "Tech Expo Karachi", status: "Confirmed" },
  { id: "att-1002", name: "Sara Khan", email: "sara.khan@example.com", event: "Health Innovation Summit", status: "Pending" },
  { id: "att-1003", name: "John Doe", email: "john.doe@example.com", event: "Tech Expo Karachi", status: "Cancelled" },
];

export default function AttendeesPage() {
  const [attendees] = useState<Attendee[]>(FALLBACK);
  const [query, setQuery] = useState("");

  const filtered = attendees.filter(
    (a) =>
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      a.email.toLowerCase().includes(query.toLowerCase()) ||
      a.event.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Attendees</h1>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search attendees..."
          className="rounded-lg border px-3 py-2 text-sm w-72 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3 font-medium">Name</th>
              <th className="px-6 py-3 font-medium">Email</th>
              <th className="px-6 py-3 font-medium">Event</th>
              <th className="px-6 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-3 font-medium text-gray-800">{a.name}</td>
                <td className="px-6 py-3 text-gray-600">{a.email}</td>
                <td className="px-6 py-3 text-gray-600">{a.event}</td>
                <td className="px-6 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      a.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : a.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <p className="p-6 text-center text-gray-500 text-sm">No attendees found.</p>
        )}
      </div>
    </div>
  );
}
