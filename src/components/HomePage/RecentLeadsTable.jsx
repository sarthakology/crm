// components/RecentLeadsTable.jsx
import React from "react";

const leads = [
  { name: "Amit Kumar", phone: "9876543210", status: "Paid" },
  { name: "Sara Khan", phone: "9123456780", status: "Follow-up" },
  { name: "John Doe", phone: "9988776655", status: "New" },
];

export default function RecentLeadsTable() {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <h3 className="text-lg font-semibold mb-4">Recent Leads</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="text-sm text-gray-500">
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, idx) => (
            <tr key={idx} className="border-t">
              <td className="py-2">{lead.name}</td>
              <td>{lead.phone}</td>
              <td>
                <span className={`px-2 py-1 rounded text-white text-sm ${lead.status === "Paid" ? "bg-green-500" : lead.status === "Follow-up" ? "bg-yellow-500" : "bg-blue-500"}`}>
                  {lead.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
