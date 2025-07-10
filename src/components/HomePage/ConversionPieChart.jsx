import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Paid Conversions", value: 1158 },
  { name: "Unpaid Leads", value: 3202 - 1158 },
  { name: "Not Intrested Leads", value: 320 },
];

const COLORS = ["#10B981", "#60A5FA", "#000555"];

export default function ConversionPieChart() {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <h3 className="text-lg font-semibold mb-4">Conversion Breakdown</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
