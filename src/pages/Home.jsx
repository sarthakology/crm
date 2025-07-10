// pages/Home.jsx
import React from "react";
import LeadSummary from "../components/HomePage/LeadSummary";
import ConversionChart from "../components/HomePage/ConversionChart";
import RecentLeadsTable from "../components/HomePage/RecentLeadsTable";
import CallerActivity from "../components/HomePage/CallerActivity";
import DashboardLayout from "../layout/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Lead Dashboard</h1>
      <LeadSummary />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ConversionChart />
        <CallerActivity />
      </div>

      <div className="mt-6">
        <RecentLeadsTable />
      </div>
    </DashboardLayout>
  );
}
