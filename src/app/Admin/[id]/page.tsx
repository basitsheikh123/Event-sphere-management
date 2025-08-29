import Link from "next/link";

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-3">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          Event Details
        </h1>
        <Link
          href="/Admin/Events"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition"
        >
          ← Back to Events
        </Link>
      </div>

      {/* Event Card */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Event ID: <span className="text-indigo-600">{id}</span>
        </h2>
        <p className="text-gray-600">
          This is a placeholder detail page for the event. Later you can fetch
          real event data from backend using this <b>ID</b>.
        </p>

        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-4 bg-gray-50 rounded-lg border">
            <h3 className="text-sm font-semibold text-gray-700">Overview</h3>
            <p className="text-gray-600 text-sm mt-1">
              High-level details about the event.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border">
            <h3 className="text-sm font-semibold text-gray-700">Schedule</h3>
            <p className="text-gray-600 text-sm mt-1">
              Timings, sessions, and agenda.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border">
            <h3 className="text-sm font-semibold text-gray-700">Speakers</h3>
            <p className="text-gray-600 text-sm mt-1">
              Keynote speakers & panelists.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border">
            <h3 className="text-sm font-semibold text-gray-700">Attendees</h3>
            <p className="text-gray-600 text-sm mt-1">
              List of registered participants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
