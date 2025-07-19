import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StatusManager() {
  const [statusList, setStatusList] = useState([]);
  const [newMainStatus, setNewMainStatus] = useState("");
  const [newSubStatus, setNewSubStatus] = useState("");
  const [activeMainIndex, setActiveMainIndex] = useState(null);

  const token = localStorage.getItem("token");

  const fetchStatuses = async () => {
    const res = await axios.get("http://localhost:8080/lead-status", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setStatusList(res.data);
  };

  useEffect(() => {
    fetchStatuses();
  }, []);

  const addMainStatus = async () => {
    if (!newMainStatus.trim()) return;
    await axios.post(
      "http://localhost:8080/lead-status",
      { title: newMainStatus.trim() },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setNewMainStatus("");
    fetchStatuses();
  };

  const deleteMainStatus = async (id) => {
    await axios.delete(`http://localhost:8080/lead-status/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchStatuses();
  };

  const addSubStatus = async (id) => {
    if (!newSubStatus.trim()) return;
    await axios.post(
      `http://localhost:8080/lead-status/${id}/sub`,
      { subStatus: newSubStatus.trim() },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setNewSubStatus("");
    setActiveMainIndex(null);
    fetchStatuses();
  };

  const deleteSubStatus = async (id, index) => {
    await axios.delete(`http://localhost:8080/lead-status/${id}/sub/${index}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchStatuses();
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold text-blue-800 mb-4">Lead Status Manager</h2>

      <div className="space-y-6">
        {statusList.map((status, i) => (
          <div key={status._id} className="bg-gray-50 p-4 rounded shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-700">{status.title}</h3>
              <button
                className="text-red-500 text-sm"
                onClick={() => deleteMainStatus(status._id)}
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
                    onClick={() => deleteSubStatus(status._id, j)}
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
                  onClick={() => addSubStatus(status._id)}
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
