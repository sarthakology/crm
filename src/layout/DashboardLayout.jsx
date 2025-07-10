// layout/AdminDashboardLayout.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col">
        <Topbar
          title="Lead Management Dashboard"
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isOpen}
        />
        
        {/* Scrollable content area if needed */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
