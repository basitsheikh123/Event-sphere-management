"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type EventItem = {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  status?: string;
  description?: string;
};

const FALLBACK: EventItem[] = [
  {
    id: "evt-1001",
    title: "Tech Expo Karachi",
    date: "2025-09-10",
    time: "10:00",
    location: "Karachi",
    status: "Upcoming",
  },
  {
    id: "evt-1002",
    title: "Health Innovation Summit",
    date: "2025-09-18",
    time: "09:00",
    location: "Lahore",
    status: "Upcoming",
  },
];

export default function EventTable() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    try {
      const raw =
        typeof window !== "undefined"
          ? localStorage.getItem("es_admin_events")
          : null;
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setEvents(parsed);
          return;
        }
      }
    } catch (e) {}
    setEvents(FALLBACK);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return events;
    return events.filter(
      (e) =>
        (e.title || "").toLowerCase().includes(q) ||
        (e.location || "").toLowerCase().includes(q) ||
        (e.id || "").toLowerCase().includes(q)
    );
  }, [events, query]);

  return (
    <div className="space-y-6">
      {/* Heading line with title */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search events..."
          className="border border-gray-300 bg-white text-gray-800 placeholder-gray-400 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Table Card */}
      <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-yellow-400 via-red-500 via-green-500 to-blue-500 shadow-md">
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-700 border-b border-gray-200 bg-gray-50">
                  <th className="p-3 font-semibold">Event</th>
                  <th className="p-3 font-semibold">Date</th>
                  <th className="p-3 font-semibold">Location</th>
                  <th className="p-3 font-semibold">Status</th>
                  <th className="p-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((e) => (
                  <tr
                    key={e.id}
                    className="border-b border-gray-200 last:border-none hover:bg-gray-50 transition"
                  >
                    <td className="p-3 font-semibold text-gray-900">{e.title}</td>
                    <td className="p-3 text-gray-700">{e.date}</td>
                    <td className="p-3 text-gray-700">{e.location || "-"}</td>
                    <td className="p-3">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          e.status === "Upcoming"
                            ? "bg-indigo-100 text-indigo-800"
                            : e.status === "Ongoing"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {e.status || "Unknown"}
                      </span>
                    </td>
                    <td className="p-3">
                      <Link
                        href={`/Admin/${e.id}`}
                        className="text-indigo-600 hover:text-indigo-800 hover:underline transition text-sm font-medium"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="p-6 text-center text-gray-500 italic"
                    >
                      No events found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
