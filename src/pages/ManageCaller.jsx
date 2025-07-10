import React, { useState } from "react";
import CallerDetailsModal from "../modals/CallerDetailsModal";
import AddCallerModal from "../modals/AddCallerModal";

export default function ManageCaller() {
  const [callers, setCallers] = useState([
    {
      id: 1,
      name: "Ravi Kumar",
      phone: "9876543210",
      email: "ravi@example.com",
      totalCalls: 34,
      conversionRate: "28%",
      lastCall: "2025-07-08",
      region: "Delhi",
    },
    {
      id: 2,
      name: "Ayesha Khan",
      phone: "9123456780",
      email: "ayesha@example.com",
      totalCalls: 45,
      conversionRate: "35%",
      lastCall: "2025-07-09",
      region: "Mumbai",
    },
  ]);

  const [selectedCaller, setSelectedCaller] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddCaller = (newCaller) => {
    setCallers((prev) => [
      ...prev,
      { ...newCaller, id: Date.now(), totalCalls: 0, conversionRate: "0%", lastCall: "-", region: "Unknown" },
    ]);
    setShowAddModal(false);
  };

  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-blue-800">Manage Callers</h2>
        <button
          onClick={() => setShowAddModal(true)}
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
            <div className="font-medium text-blue-700">{caller.name}</div>
            <div className="text-sm text-gray-500">{caller.phone}</div>
          </div>
        ))}
      </div>

      {selectedCaller && (
        <CallerDetailsModal
          caller={selectedCaller}
          onClose={() => setSelectedCaller(null)}
        />
      )}

      {showAddModal && (
        <AddCallerModal
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddCaller}
        />
      )}
    </div>
  );
}
