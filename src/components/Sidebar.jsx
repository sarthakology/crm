import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Users,
  Phone,
  UserPlus,
  IndianRupee,
  ChartNoAxesGantt
} from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Dashboard", icon: <Home size={20} />, to: "/" },
  { name: "Callers", icon: <Users size={20} />, to: "/callers" },
  { name: "Leads", icon: <Phone size={20} />, to: "/leads" },
  { name: "Payment Link", icon: <IndianRupee size={20} />, to: "/create-payment-link" },
  { name: "New Lead", icon: <UserPlus size={20} />, to: "/new-lead" },
  { name: "Status Manager", icon: <ChartNoAxesGantt size={20} />, to: "/status-manager" },
];

export default function Sidebar({ isOpen, toggle }) {
  return (
    <motion.div
      animate={{ width: isOpen ? 200 : 0 }}
      transition={{ duration: 0.5, ease: "anticipate" }}
      className={`fixed md:relative z-50 top-0 left-0 h-screen bg-blue-800 text-white shadow-lg flex flex-col ${
        isOpen ? "w-[200px]" : "w-0"
      } md:w-auto md:min-w-[60px]`}
    >
      <div className="p-4 text-xl font-bold flex items-center justify-between">
        {isOpen && <span>Barça</span>}
        <button onClick={toggle} className="text-white focus:outline-none">
          ☰
        </button>
      </div>

      <ul className="space-y-2 mt-6 px-2">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.to}
              className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded cursor-pointer"
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
