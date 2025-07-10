import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", leads: 120, paid: 45 },
  { month: "Feb", leads: 135, paid: 55 },
  { month: "Mar", leads: 160, paid: 70 },
  { month: "Apr", leads: 180, paid: 85 },
  { month: "May", leads: 200, paid: 95 },
  { month: "Jun", leads: 190, paid: 90 },
  { month: "Jul", leads: 210, paid: 100 },
  { month: "Aug", leads: 220, paid: 110 },
  { month: "Sep", leads: 230, paid: 105 },
  { month: "Oct", leads: 250, paid: 120 },
  { month: "Nov", leads: 240, paid: 115 },
  { month: "Dec", leads: 260, paid: 130 },
];


export default function ConversionChart() {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <h3 className="text-lg font-semibold mb-4">Monthly Conversions</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="leads" stroke="#60A5FA" strokeWidth={2} />
          <Line type="monotone" dataKey="paid" stroke="#10B981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
