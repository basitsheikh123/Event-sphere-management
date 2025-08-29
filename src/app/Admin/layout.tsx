"use client";
import Sidebar from "@/components/Admin/Sidebar";
import Navbar from "@/components/Admin/Navbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gradient-navy">
      {/* Sidebar (Dark) */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex-1 flex flex-col">
        {/* Navbar (Dark) */}
        <Navbar />

        {/* Content (Light) */}
        <main className="flex-1 p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
