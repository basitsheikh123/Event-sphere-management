"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateEventForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    status: "Upcoming",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let events = [];
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem("es_admin_events");
      events = raw ? JSON.parse(raw) : [];
    }

    const newEvent = { id: `evt-${Date.now()}`, ...form };
    const updated = [...events, newEvent];
    localStorage.setItem("es_admin_events", JSON.stringify(updated));

    router.push("/Admin");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      {/* Gradient border wrapper */}
      <div className="rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-md">
        <div className="rounded-2xl bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Create New Event
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Title
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter event title"
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter location"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Upcoming">Upcoming</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter event details..."
              ></textarea>
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium shadow hover:scale-105 transition"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
