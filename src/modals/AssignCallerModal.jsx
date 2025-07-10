import React, { useState } from "react";

const sampleCallers = [
  { id: 101, name: "Ravi Kumar" },
  { id: 102, name: "Ayesha Khan" },
  { id: 103, name: "Dev Joshi" },
];

export default function AssignCallerModal({ selectedLeadIds, onClose, onAssign }) {
  const [selectedCaller, setSelectedCaller] = useState("");

  const handleAssign = () => {
    if (selectedCaller) {
      onAssign(selectedCaller);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-blue-800">Assign Caller</h3>
          <button onClick={onClose} className="text-gray-500 text-xl hover:text-red-500">
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Select Caller</label>
            <select
              className="w-full border rounded px-3 py-2 text-sm"
              value={selectedCaller}
              onChange={(e) => setSelectedCaller(e.target.value)}
            >
              <option value="">-- Select --</option>
              {sampleCallers.map((caller) => (
                <option key={caller.id} value={caller.name}>
                  {caller.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Selected Leads</label>
            <ul className="text-sm text-gray-600 list-disc pl-5">
              {selectedLeadIds.map((id) => (
                <li key={id}>Lead ID: {id}</li>
              ))}
            </ul>
          </div>

          <div className="text-right">
            <button
              onClick={handleAssign}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              disabled={!selectedCaller}
            >
              Assign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
