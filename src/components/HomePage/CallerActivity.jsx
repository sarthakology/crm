// components/CallerActivity.jsx
import React from "react";

const callers = [
  { name: "Priya", calls: 50, conversions: 20 },
  { name: "Ravi", calls: 60, conversions: 15 },
  { name: "Neha", calls: 40, conversions: 25 },
];

export default function CallerActivity() {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <h3 className="text-lg font-semibold mb-4">Caller Performance</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="text-sm text-gray-500">
            <th>Name</th>
            <th>Calls</th>
            <th>Conversions</th>
          </tr>
        </thead>
        <tbody>
          {callers.map((caller, idx) => (
            <tr key={idx} className="border-t">
              <td className="py-2">{caller.name}</td>
              <td>{caller.calls}</td>
              <td>{caller.conversions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
