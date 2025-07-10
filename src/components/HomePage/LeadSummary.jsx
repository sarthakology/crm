// components/LeadSummary.jsx
import React from "react";

const stats = [
  { label: "Total Leads", value: 1200 },
  { label: "Paid", value: 450 },
  { label: "Follow-ups", value: 300 },
  { label: "Not Interested", value: 200 },
];

export default function LeadSummary() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white shadow rounded-2xl p-4 text-center">
          <p className="text-gray-500">{stat.label}</p>
          <h2 className="text-2xl font-bold text-blue-600">{stat.value}</h2>
        </div>
      ))}
    </div>
  );
}
