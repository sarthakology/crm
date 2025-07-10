import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, ChevronDown } from "lucide-react";

export default function Topbar({ title, toggleSidebar }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (path) => {
    setShowProfileMenu(false);
    navigate(path);
  };

  return (
    <div className="w-full bg-white shadow-sm px-4 md:px-6 py-3 flex items-center justify-between">
      {/* Left: Sidebar toggle & title */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-blue-700 text-xl focus:outline-none"
        >
          ☰
        </button>
        <h1 className="text-xl font-semibold text-gray-700">{title}</h1>
      </div>

      {/* Right: Notifications & Profile */}
      <div className="flex items-center space-x-6 relative">
        {/* Notifications */}
        <div className="relative cursor-pointer">
          <Bell className="text-gray-500 hover:text-blue-500" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-[10px] text-white text-center">3</span>
        </div>

        {/* Profile with dropdown */}
        <div ref={profileRef} className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setShowProfileMenu((prev) => !prev)}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://i.pravatar.cc/40"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="hidden sm:block text-sm text-gray-700">Admin</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>

          {/* Dropdown menu */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
              <ul className="py-1 text-sm text-gray-700">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleMenuClick("/profile")}
                >
                  View Profile
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleMenuClick("/settings")}
                >
                  Settings
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    // Implement logout logic if needed
                    navigate("/login");
                  }}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
