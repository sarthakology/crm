import React, { useState } from "react";
import { Copy } from "lucide-react"; // Make sure lucide-react is installed

export default function CreatePaymentLinkPage() {
  const [formData, setFormData] = useState({
    name: "Riya Sharma",
    phone: "9876543210",
    amount: "45000",
    email: "riya@example.com",
    purpose: "Camp Registration",
  });

  const [responseUrl, setResponseUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const MOCK_RESPONSE = {
    checkoutPageUrl:
      "https://mercury-t2.phonepe.com/transact/pgv2?token=hq4wOGdzX31IuPyyh7/7AYOLiipO42P8QtgmusudZHta7zUAMbV5uMV5f6kF1hmvheryrLtNiVJFTlJOQvvVdxtGzQXjAOLs2SMNiBk0pyleDaiwLLJeZj50y9gChIQBUdFmvadqk6f29W1+Ck7qpV8Br6qGPLc9tD5Kh9OO9UpJIqw26W84b6ek7cNBOSpPq3zIcTzDG/JFmD44HVvpcFRaxDx/7SglnuLuWuSR/uf6cCaaqO1+yV8yVUf7FZPIB0V7Teg230Ysu7DZ/wfrP1n1OH8i+bG16v9kaB+CDkpnZsv0JIg/HrmMo/RgfUuZ/1uyYCaZTeWmrEu/uWF/GQyTXWllkKUnSZGY/MhHtzyNOZpDnp0alj/omCfSQ+6+X6ciTfO0Itd6dq1jocbRd1UAR4gf2zRunphS0mXRMPPNR6Og5iNw7mTgttDbsYUIIClYAcPkm9ScGfGn39Dq6JkxHZ7cav3Fh47MpPcu74Ptk6BvHCoI13Q+ENcZcxt2Wifu/k0/W5BcIu6EnkzYM9TiUAaeeHbfH0KirX1sY9V+Fw==",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCopied(false);

    setTimeout(() => {
      setResponseUrl(MOCK_RESPONSE.checkoutPageUrl);
      setLoading(false);
    }, 1000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(responseUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Create Payment Link</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount (₹)"
          value={formData.amount}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        />
        <input
          type="text"
          name="purpose"
          placeholder="Purpose"
          value={formData.purpose}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Generating..." : "Generate Payment Link"}
        </button>
      </form>

      {responseUrl && (
        <div className="mt-6 bg-gray-100 p-4 rounded-xl shadow">
          <h4 className="text-lg font-semibold text-green-700 mb-2">
            Payment Link:
          </h4>
          <div className="flex items-center gap-3">
            <p className="break-all text-sm text-blue-800 font-mono flex-1">
              {responseUrl}
            </p>
            <button
              onClick={handleCopy}
              className="text-blue-600 hover:text-blue-800"
              title="Copy to clipboard"
            >
              <Copy size={20} />
            </button>
            {copied && <span className="text-green-600 text-sm">Copied!</span>}
          </div>
        </div>
      )}
    </div>
  );
}
