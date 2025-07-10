import React, { useState } from "react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  status: "New",
};

export default function CreateNewLead({ onCreate }) {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API call or call onCreate prop
    setTimeout(() => {
      if (onCreate) onCreate(form);
      setForm(initialForm);
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="bg-white shadow rounded-2xl p-4 w-full max-w-md">
      <h3 className="text-lg font-semibold text-blue-800 mb-4">Create New Lead</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="New">New</option>
          <option value="In Progress">In Progress</option>
          <option value="Paid">Paid</option>
          <option value="Not Interested">Not Interested</option>
        </select>

        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          {submitting ? "Creating..." : "Create Lead"}
        </button>
      </form>
    </div>
  );
}
