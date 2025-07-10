import React from "react";

export default function CallerDetailsModal({ caller, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-blue-800">Caller Details</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-xl">×</button>
        </div>
        <div className="space-y-2 text-sm">
          <p><strong>Name:</strong> {caller.name}</p>
          <p><strong>Phone:</strong> {caller.phone}</p>
          <p><strong>Total Calls:</strong> {caller.totalCalls}</p>
          <p><strong>Conversion Rate:</strong> {caller.conversionRate}</p>
          <p><strong>Last Call:</strong> {caller.lastCall}</p>
          <p><strong>Region:</strong> {caller.region}</p>
        </div>
      </div>
    </div>
  );
}
