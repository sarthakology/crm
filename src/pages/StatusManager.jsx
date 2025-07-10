import React, { useState } from "react";

export default function StatusManager() {
const [statusList, setStatusList] = useState([
  {
    title: "New Lead",
    subStatuses: ["Hot", "Cold", "Warm"],
  },
  {
    title: "Follow Up",
    subStatuses: ["Hot Follow Up", "Cold Follow Up", "Warm Follow Up"],
  },
  {
    title: "Interested",
    subStatuses: ["Needs More Info", "Waiting for Family Approval", "Considering Options"],
  },
  {
    title: "Not Interested",
    subStatuses: ["Budget Issue", "No Interest", "Already Enrolled Elsewhere"],
  },
  {
    title: "Converted",
    subStatuses: ["Paid in Full", "Partial Payment", "Payment Pending"],
  },
  {
    title: "Invalid Lead",
    subStatuses: ["Wrong Number", "Fake Lead", "Unresponsive"],
  },
]);


  const [newMainStatus, setNewMainStatus] = useState("");
  const [newSubStatus, setNewSubStatus] = useState("");
  const [activeMainIndex, setActiveMainIndex] = useState(null);

  const addMainStatus = () => {
    if (newMainStatus.trim()) {
      setStatusList([...statusList, { title: newMainStatus.trim(), subStatuses: [] }]);
      setNewMainStatus("");
    }
  };

  const deleteMainStatus = (index) => {
    setStatusList(statusList.filter((_, i) => i !== index));
  };

  const addSubStatus = (index) => {
    if (newSubStatus.trim()) {
      const updated = [...statusList];
      updated[index].subStatuses.push(newSubStatus.trim());
      setStatusList(updated);
      setNewSubStatus("");
      setActiveMainIndex(null);
    }
  };

  const deleteSubStatus = (mainIndex, subIndex) => {
    const updated = [...statusList];
    updated[mainIndex].subStatuses.splice(subIndex, 1);
    setStatusList(updated);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold text-blue-800 mb-4">Lead Status Manager</h2>

      <div className="space-y-6">
        {statusList.map((status, i) => (
          <div key={i} className="bg-gray-50 p-4 rounded shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-700">{status.title}</h3>
              <button
                className="text-red-500 text-sm"
                onClick={() => deleteMainStatus(i)}
              >
                Delete
              </button>
            </div>

            <ul className="pl-4 list-disc text-sm text-gray-600 space-y-1 mb-2">
              {status.subStatuses.map((sub, j) => (
                <li key={j} className="flex justify-between items-center">
                  <span>{sub}</span>
                  <button
                    className="text-xs text-red-400"
                    onClick={() => deleteSubStatus(i, j)}
                  >
                    remove
                  </button>
                </li>
              ))}
            </ul>

            {activeMainIndex === i ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSubStatus}
                  onChange={(e) => setNewSubStatus(e.target.value)}
                  className="border px-2 py-1 rounded w-full"
                  placeholder="Sub-status name"
                />
                <button
                  onClick={() => addSubStatus(i)}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            ) : (
              <button
                onClick={() => setActiveMainIndex(i)}
                className="text-sm text-blue-500"
              >
                + Add Sub-status
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-4">
        <h3 className="text-md font-medium mb-2">Add New Main Status</h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={newMainStatus}
            onChange={(e) => setNewMainStatus(e.target.value)}
            placeholder="e.g., Follow Up"
            className="border px-3 py-1 rounded w-full"
          />
          <button
            onClick={addMainStatus}
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
