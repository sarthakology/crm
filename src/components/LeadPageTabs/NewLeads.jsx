import React, { useEffect, useState } from "react";
import axios from "axios";
import LeadDetailModal from "../../modals/LeadDetailModal";

export default function NewLeads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortField, setSortField] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedLead, setSelectedLead] = useState(null); // 👈 State for modal

  useEffect(() => {
    axios
      .get("http://localhost:8080/get/leads/fresh", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setLeads(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch leads", err);
        setLoading(false);
      });
  }, []);

  const handleSort = (field) => {
    if (field === sortField) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedLeads = [...leads].sort((a, b) => {
    let valA = a[sortField];
    let valB = b[sortField];

    if (sortField === "playerFirstName" || sortField === "camp" || sortField === "assignedTo") {
      valA = (valA || "").toLowerCase();
      valB = (valB || "").toLowerCase();
      return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }

    if (sortField === "duplicate") {
      return sortOrder === "asc"
        ? Number(a.duplicate) - Number(b.duplicate)
        : Number(b.duplicate) - Number(a.duplicate);
    }

    if (sortField === "createdAt") {
      return sortOrder === "asc"
        ? new Date(valA) - new Date(valB)
        : new Date(valB) - new Date(valA);
    }

    return 0;
  });

  const renderSortIcon = (field) =>
    sortField === field ? (sortOrder === "asc" ? "↑" : "↓") : "";

  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">Fresh Leads</h2>

      {loading ? (
        <div className="text-gray-600">Loading leads...</div>
      ) : (
        <table className="min-w-full text-sm text-left border border-gray-200 bg-white rounded shadow">
          <thead className="bg-blue-50 text-blue-800 font-semibold">
            <tr>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("playerFirstName")}>
                Name {renderSortIcon("playerFirstName")}
              </th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("camp")}>
                Camp {renderSortIcon("camp")}
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("duplicate")}>
                Duplicate {renderSortIcon("duplicate")}
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("createdAt")}>
                Created At {renderSortIcon("createdAt")}
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("assignedTo")}>
                Assigned To {renderSortIcon("assignedTo")}
              </th>
              <th className="px-4 py-2">View</th>
            </tr>
          </thead>
          <tbody>
            {sortedLeads.map((lead) => {
              const name = `${lead.playerFirstName || ""} ${lead.playerLastName || ""}`.trim();
              return (
                <tr key={lead._id} className="border-t hover:bg-blue-50">
                  <td className="px-4 py-2">{name || "—"}</td>
                  <td className="px-4 py-2">{lead.phone || "—"}</td>
                  <td className="px-4 py-2">{lead.email || "—"}</td>
                  <td className="px-4 py-2">{lead.camp || "—"}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block w-3 h-3 rounded-full mr-2 ${
                        lead.duplicate ? "bg-red-500" : "bg-green-500"
                      }`}
                    ></span>
                    {lead.duplicate ? "Yes" : "No"}
                  </td>
                  <td className="px-4 py-2">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">
                    {lead.assignedTo || <span className="text-gray-400 italic">Unassigned</span>}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => setSelectedLead(lead)}
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {selectedLead && (<>
        <LeadDetailModal lead={selectedLead} onClose={() => setSelectedLead(null)} />
          </>
      )}
    </div>
  );
}
