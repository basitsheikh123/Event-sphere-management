import EventTable from "@/components/Admin/EventTable";

export default function EventsPage() {
  return (
    <div className="space-y-6 p-6 bg-[var(--page-bg)] min-h-screen">
      <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
     <h1 className="text-3xl font-bold text-Black">
          Events
        </h1>
      </div>

      <div className="bg-[var(--card-bg)] rounded-xl shadow-sm p-4">
        <EventTable />
      </div>
    </div>
  );
}
