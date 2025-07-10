import React, { useState } from "react";

export default function AddCallerModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-blue-800">Add New Caller</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-xl">×</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded px-3 py-2 text-sm"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              className="w-full border rounded px-3 py-2 text-sm"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded px-3 py-2 text-sm"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Caller
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
