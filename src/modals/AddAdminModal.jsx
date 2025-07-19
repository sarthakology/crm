import React, { useState, useContext } from "react";
import axios from "axios";
import API_URLS from "../API_URLS";
import GlobalContext from "../context/GlobalContext";

export default function AddAdminModal() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const { setLoader, setShowAddAdminModel } = useContext(GlobalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoader(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        API_URLS.CREATE_ADMIN,
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setShowAddAdminModel(false);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add admin");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-blue-800">Add New Admin</h3>
          <button
            onClick={() => setShowAddAdminModel(false)}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            ×
          </button>
        </div>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Admin Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Admin
            </button>
          </div>
        </form>

        {/* Instructions */}
        <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded-md text-sm text-blue-900">
          <p className="font-semibold mb-1">After adding an admin:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Ask them to visit the <strong>Register</strong> page.</li>
            <li>They’ll enter the email you registered here.</li>
            <li>They’ll receive an OTP to verify their identity.</li>
            <li>Once OTP is verified, they’ll set a password.</li>
            <li>After that, they can login and manage the CRM.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
