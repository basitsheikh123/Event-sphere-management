import StatsCards from "@/components/Admin/StatsCards";
import EventTable from "@/components/Admin/EventTable";

export default function Page() {
  const stats = [
    { title: "Total Events", value: 23, hint: "+3 this month" },
    { title: "Attendees", value: 1260, hint: "avg 420/event" },
    { title: "Revenue (PKR)", value: "3.2M", hint: "last 30 days" },
    { title: "Satisfaction", value: "4.6/5", hint: "post-event surveys" },
  ];

  return (
    <div className="space-y-8 p-6 min-h-screen bg-gray-50">
      {/* Page Heading */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl p-[2px] bg-[length:200%_200%] animate-gradient bg-gradient-to-r from-yellow-400 via-red-500 via-green-500 to-blue-500 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="rounded-2xl bg-white p-6 h-full flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800">
                {stat.title}
              </h2>
              <p className="text-3xl font-bold mt-2 text-gray-900">
                {stat.value}
              </p>
              <span className="text-sm text-gray-500 mt-1">{stat.hint}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Events Table Section */}
      <div className="rounded-2xl p-6 bg-white shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Events
        </h2>
        <EventTable />
      </div>
    </div>
  );
}
