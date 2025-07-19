import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import CallerDetailsModal from "../modals/CallerDetailsModal";
import API_URLS from "../API_URLS";
import GlobalContext from "../context/GlobalContext";

export default function ManageCaller() {
  const [callers, setCallers] = useState([]);
  const [selectedCaller, setSelectedCaller] = useState(null);

  const { setShowAddCallerModel } = useContext(GlobalContext);

  console.log(selectedCaller);
  const fetchCallers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(API_URLS.CALLER_LIST, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data.map((caller) => ({
        id: caller._id,
        name: caller.fullName || "Unnamed",
        email: caller.email,
        phone: caller.phone || "N/A",
        isOnline: caller.isOnline,
        lastSeen: caller.lastSeen,
      }));

      setCallers(data);
    } catch (error) {
      console.error("Failed to load callers:", error);
    }
  };

  useEffect(() => {
    fetchCallers();
  }, []);

  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-blue-800">Manage Callers</h2>
        <button
          onClick={() => setShowAddCallerModel(true)}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          + Add Caller
        </button>
      </div>

      <div className="divide-y">
        {callers.map((caller) => (
          <div
            key={caller.id}
            className="py-3 cursor-pointer hover:bg-blue-50 px-2 rounded"
            onClick={() => setSelectedCaller(caller)}
          >
            <div className="flex items-center gap-2">
              <span
                className={`inline-block w-3 h-3 rounded-full ${
                  caller.isOnline ? "bg-green-500" : "bg-gray-400"
                }`}
              ></span>
              <div className="font-medium text-blue-700">{caller.name}</div>
            </div>
            <div className="text-sm text-gray-500">{caller.email}</div>
            <div className="text-xs text-gray-400">
              {caller.isOnline
                ? "Online now"
                : caller.lastSeen
                ? `Last seen: ${new Date(caller.lastSeen).toLocaleString()}`
                : "Offline"}
            </div>
          </div>
        ))}
      </div>

      {selectedCaller && (
        <CallerDetailsModal
          caller={selectedCaller}
          onClose={() => setSelectedCaller(null)}
        />
      )}
    </div>
  );
}
