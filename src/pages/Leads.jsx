import React, { useState } from "react";
import NewLeads from "../components/LeadPageTabs/NewLeads";
import FollowUpLeads from "../components/LeadPageTabs/FollowUpLeads";
import ConvertedLeads from "../components/LeadPageTabs/ConvertedLeads";
import RejectedLeads from "../components/LeadPageTabs/RejectedLeads";

const tabs = [
  { label: "New", component: <NewLeads /> },
  { label: "Follow-Up", component: <FollowUpLeads /> },
  { label: "Converted", component: <ConvertedLeads /> },
  { label: "Rejected", component: <RejectedLeads /> },
];

export default function Leads() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">Leads</h2>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`pb-2 text-sm font-medium border-b-2 ${
              activeTab === index
                ? "text-blue-600 border-blue-600"
                : "text-gray-500 border-transparent hover:text-blue-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div>{tabs[activeTab].component}</div>
    </div>
  );
}
