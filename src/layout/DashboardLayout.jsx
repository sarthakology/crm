// layout/DashboardLayout.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Topbar title="Lead Management Dashboard" />
        <main className="flex-1 bg-gray-100 p-4">{children}</main>
      </div>
    </div>
  );
}
