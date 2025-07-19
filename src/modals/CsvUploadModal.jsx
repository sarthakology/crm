import React, { useState } from "react";
import Papa from "papaparse";
import axios from "axios";

export default function CsvUploadModal({ onClose }) {
  const [parsedData, setParsedData] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file || !file.name.endsWith(".csv")) {
      alert("Please upload a valid .csv file");
      return;
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setParsedData(results.data);
        console.log("Parsed CSV JSON:", results.data);
      },
      error: (err) => {
        console.error("CSV Parse Error:", err);
        alert("❌ Failed to parse CSV file.");
      },
    });
  };

  const handleUpload = async () => {
    if (!parsedData.length) return;

    const cleanData = parsedData.map((row) => ({
      ...row,
      assignedTo: row.assignedTo?.trim() ? row.assignedTo : null,
      contactedAt: row.contactedAt || null,
      paidAt: row.paidAt || null,
    }));

    try {
      const res = await axios.post(
        "http://localhost:8080/lead/bulk",
        cleanData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert(
        `✅ Uploaded ${res.data.inserted} new leads, ${res.data.duplicates} duplicates (Total processed: ${res.data.total})`
      );
      onClose();
    } catch (err) {
      console.error("Upload error:", err);
      alert("❌ Failed to upload leads");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-blue-800">
            Upload Leads CSV
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            ×
          </button>
        </div>

        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="block w-full border border-gray-300 rounded px-3 py-2"
        />

        <p className="text-sm text-gray-500 mt-2">
          CSV must include headers like: <br />
          <code>
            playerFirstName, playerLastName, phone, email, camp, dob, gender...
          </code>
        </p>

        {parsedData.length > 0 && (
          <button
            onClick={handleUpload}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
          >
            Upload Leads
          </button>
        )}

        <button
          onClick={onClose}
          className="mt-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}
