import React from "react";

export default function LeadDetailModal({ lead, onClose }) {
  if (!lead) return null;

  const fullName = `${lead.playerFirstName || ""} ${lead.playerLastName || ""}`.trim();
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
        <div className="space-y-2 text-sm">
          <div><span className="font-semibold">Name:</span> {fullName || "—"}</div>
          <div><span className="font-semibold">Phone:</span> {lead.phone || "—"}</div>
          <div><span className="font-semibold">Email:</span> {lead.email || "—"}</div>
          <div><span className="font-semibold">Camp:</span> {lead.camp || "—"}</div>
          <div><span className="font-semibold">School:</span> {lead.school || "—"}</div>
          <div><span className="font-semibold">DOB:</span> {lead.dob ? new Date(lead.dob).toLocaleDateString() : "—"}</div>
          <div><span className="font-semibold">Gender:</span> {lead.gender || "—"}</div>
          <div><span className="font-semibold">Field Position:</span> {lead.fieldPosition || "—"}</div>
          <div><span className="font-semibold">Guardian:</span> {`${lead.guardianFirstName || ""} ${lead.guardianLastName || ""}`.trim() || "—"}</div>
          <div><span className="font-semibold">Guardian Phone:</span> {lead.guardianPhone || "—"}</div>
          <div><span className="font-semibold">Status:</span> {lead.status || "—"}</div>
          <div><span className="font-semibold">Lead Stage:</span> {lead.leadStage || "—"}</div>
          <div><span className="font-semibold">Source:</span> {lead.source || "—"}</div>
          <div><span className="font-semibold">Note:</span> {lead.note || "—"}</div>
          <div><span className="font-semibold">Duplicate:</span> {lead.duplicate ? "Yes" : "No"}</div>
          <div><span className="font-semibold">Created At:</span> {new Date(lead.createdAt).toLocaleString()}</div>
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
