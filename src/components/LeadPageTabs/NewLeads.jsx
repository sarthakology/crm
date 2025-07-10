import React, { useState } from "react";
import AssignCallerModal from "../../modals/AssignCallerModal";
import LeadDetailModal from "../../modals/LeadDetailModal";

const sampleLeads = [
  { id: 1, name: "Riya Sharma", phone: "9876543210", status: "New" },
  { id: 2, name: "Arjun Mehta", phone: "9123456780", status: "New" },
  { id: 3, name: "Sneha Patel", phone: "9988776655", status: "New" },
  { id: 4, name: "Karan Das", phone: "9001122334", status: "New" },
];

export default function NewLeads() {
  const [selectMode, setSelectMode] = useState(false);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [leadDetail, setLeadDetail] = useState(null); // for lead detail modal

  const handleLeadClick = (lead) => {
    if (selectMode) {
      handleCheckboxChange(lead.id);
    } else {
      setLeadDetail(lead);
    }
  };

  const handleCheckboxChange = (id) => {
    setSelectedLeads((prev) =>
      prev.includes(id) ? prev.filter((leadId) => leadId !== id) : [...prev, id]
    );
  };

  const handleAssignClick = () => {
    setShowAssignModal(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
  <h3 className="text-lg font-semibold text-blue-800">New Leads</h3>

  <div className="flex items-center gap-x-2">
    {selectMode && selectedLeads.length > 0 && (
      <button
        onClick={handleAssignClick}
        className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
      >
        Assign Caller
      </button>
    )}
    <button
      onClick={() => {
        setSelectMode((prev) => !prev);
        setSelectedLeads([]);
      }}
      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
    >
      {selectMode ? "Cancel" : "Select"}
    </button>
  </div>
</div>


      <div className="space-y-3">
        {sampleLeads.map((lead) => (
          <div
            key={lead.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded shadow-sm hover:bg-blue-50 cursor-pointer"
            onClick={() => handleLeadClick(lead)}
          >
            <div className="flex items-center space-x-3">
              {selectMode && (
                <input
                  type="checkbox"
                  checked={selectedLeads.includes(lead.id)}
                  onChange={(e) => {
                    e.stopPropagation(); // Prevent lead click
                    handleCheckboxChange(lead.id);
                  }}
                />
              )}
              <div>
                <div className="font-medium text-blue-700">{lead.name}</div>
                <div className="text-sm text-gray-500">{lead.phone}</div>
              </div>
            </div>
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
              {lead.status}
            </span>
          </div>
        ))}
      </div>

      {showAssignModal && (
        <AssignCallerModal
          selectedLeadIds={selectedLeads}
          onClose={() => setShowAssignModal(false)}
          onAssign={(caller) => {
            console.log("Assigned", selectedLeads, "to", caller);
            setShowAssignModal(false);
            setSelectedLeads([]);
            setSelectMode(false);
          }}
        />
      )}

      {leadDetail && (
        <LeadDetailModal
          lead={leadDetail}
          onClose={() => setLeadDetail(null)}
        />
      )}
    </div>
  );
}
