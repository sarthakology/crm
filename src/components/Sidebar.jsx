// components/Sidebar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, BarChart2, Users } from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: <Home size={20} /> },
  { name: "Analytics", icon: <BarChart2 size={20} /> },
  { name: "Callers", icon: <Users size={20} /> },
];

export default function Sidebar({ isOpen, toggle }) {
  return (
    <motion.div
      animate={{ width: isOpen ? 200 : 60 }}
      className="h-screen bg-blue-800 text-white shadow-lg flex flex-col transition-all duration-300"
    >
      <div className="p-4 text-xl font-bold flex items-center justify-between">
        {isOpen && <span>Barça</span>}
        <button onClick={toggle} className="text-white focus:outline-none">
          ☰
        </button>
      </div>

      <ul className="space-y-2 mt-6 px-2">
        {navItems.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded cursor-pointer"
          >
            {item.icon}
            {isOpen && <span>{item.name}</span>}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
