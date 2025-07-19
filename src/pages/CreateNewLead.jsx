import React, { useState } from "react";
import CsvUploadModal from "../modals/CsvUploadModal"; // assume you created this
import XlsxUploadModal from "../modals/XlsxUploadModal"; // optional if using XLSX
// import AddLeadModal from "../modals/AddLeadModal"; // for single manual entry

export default function CreateNewLead() {
  const [showCsvModal, setShowCsvModal] = useState(false);
  const [showXlsxModal, setShowXlsxModal] = useState(false);
  const [showSingleLeadModal, setShowSingleLeadModal] = useState(false);

  return (
    <div className="bg-white shadow rounded-2xl p-6 w-full max-w-md space-y-4">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">Lead Management</h3>

      <button
        onClick={() => setShowSingleLeadModal(true)}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        ➕ Create Single Lead
      </button>

      <button
        onClick={() => setShowCsvModal(true)}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        📄 Import from CSV
      </button>

      <button
        onClick={() => setShowXlsxModal(true)}
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
      >
        📊 Import from Excel (.xlsx)
      </button>

      {/* Modals */}
      {/* {showSingleLeadModal && <AddLeadModal onClose={() => setShowSingleLeadModal(false)} />} */}
      {showCsvModal && <CsvUploadModal onClose={() => setShowCsvModal(false)} />}
      {showXlsxModal && <XlsxUploadModal onClose={() => setShowXlsxModal(false)} />}
    </div>
  );
}
