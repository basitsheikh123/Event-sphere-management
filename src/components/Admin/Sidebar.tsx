"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  PlusSquare,
  Users,
  BarChart2,
  Settings,
} from "lucide-react";

const links = [
  { name: "Dashboard", href: "/Admin", Icon: LayoutDashboard },
  { name: "Events", href: "/Admin/Events", Icon: Calendar },
  { name: "Create Event", href: "/Admin/Create", Icon: PlusSquare },
  { name: "Attendees", href: "/Admin/Attendees", Icon: Users },
  { name: "Analytics", href: "/Admin/Analytics", Icon: BarChart2 },
  { name: "Settings", href: "/Admin/Settings", Icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 hidden md:flex flex-col min-h-screen 
      bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900
      backdrop-blur-md border-r border-gray-700 shadow-lg">
      
      {/* Logo / Header */}
      <div className="p-5 border-b border-gray-700">
        <h1 className="font-bold text-xl text-white tracking-wide">
          EventSphere
        </h1>
        <p className="text-sm text-gray-400">Admin Panel</p>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {links.map(({ name, href, Icon }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
                    ${
                      active
                        ? "bg-gradient-to-r from-indigo-500 to-indigo-700 text-white shadow-md"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      active ? "text-white" : "text-gray-400 group-hover:text-white"
                    }`}
                  />
                  <span className="text-sm font-medium">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 text-xs text-gray-500 text-center">
        © 2025 EventSphere
      </div>
    </aside>
  );
}
