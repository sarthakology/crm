// components/ConversionChart.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", leads: 100, paid: 40 },
  { month: "Feb", leads: 150, paid: 60 },
  { month: "Mar", leads: 200, paid: 80 },
];

export default function ConversionChart() {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <h3 className="text-lg font-semibold mb-4">Monthly Conversions</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="leads" fill="#60A5FA" />
          <Bar dataKey="paid" fill="#10B981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
