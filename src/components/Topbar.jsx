// components/Topbar.jsx
import React from "react";
import { Bell, User } from "lucide-react";

export default function Topbar({ title = "Dashboard" }) {
  return (
    <div className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Left: Page title or breadcrumbs */}
      <div className="text-xl font-semibold text-gray-700">{title}</div>

      {/* Right: Notification & Profile */}
      <div className="flex items-center space-x-6">
        {/* Notifications */}
        <div className="relative cursor-pointer">
          <Bell className="text-gray-500 hover:text-blue-500" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-[10px] text-white text-center">3</span>
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="hidden md:block text-sm text-gray-700">Admin</span>
        </div>
      </div>
    </div>
  );
}
