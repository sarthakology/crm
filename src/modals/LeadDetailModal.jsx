import React from "react";

export default function LeadDetailModal({ lead, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-blue-800">Lead Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-2xl hover:text-red-500"
          >
            ×
          </button>
        </div>
        <div className="space-y-2">
          <div><span className="font-semibold">Name:</span> {lead.name}</div>
          <div><span className="font-semibold">Phone:</span> {lead.phone}</div>
          <div><span className="font-semibold">Status:</span> {lead.status}</div>
        </div>
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
