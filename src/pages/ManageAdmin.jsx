import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import API_URLS from "../API_URLS";
import GlobalContext from "../context/GlobalContext";

export default function ManageAdmin() {
  const [admins, setAdmins] = useState([]);

  const { setShowAddAdminModel } = useContext(GlobalContext);
  
  const fetchAdmins = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(API_URLS.ADMIN_LIST, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data.map((admin) => ({
        id: admin._id,
        name: admin.fullName || "Unnamed",
        email: admin.email,
        phone: admin.phone || "N/A",
        isOnline: admin.isOnline,
        lastSeen: admin.lastSeen,
      }));

      setAdmins(data);
    } catch (error) {
      console.error("Failed to load admins:", error);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-blue-800">Manage Admins</h2>
        <button
          onClick={() => setShowAddAdminModel(true)}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          + Add Admin
        </button>
      </div>

      <div className="divide-y">
        {admins.map((admin) => (
          <div key={admin.id} className="py-3 px-2 hover:bg-blue-50 rounded">
            <div className="flex items-center gap-2">
              <span
                className={`inline-block w-3 h-3 rounded-full ${
                  admin.isOnline ? "bg-green-500" : "bg-gray-400"
                }`}
              ></span>
              <div className="font-medium text-blue-700">{admin.name}</div>
            </div>
            <div className="text-sm text-gray-500">{admin.email}</div>
            <div className="text-xs text-gray-400">
              {admin.isOnline
                ? "Online now"
                : admin.lastSeen
                ? `Last seen: ${new Date(admin.lastSeen).toLocaleString()}`
                : "Offline"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
