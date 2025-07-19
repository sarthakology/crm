import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URLS from "../API_URLS";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("sarthak@barcaacademy.in");
  const [password, setPassword] = useState("sarthaksarthak");

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(API_URLS.LOGIN, {
      email,
      password,
    });

    const { token, user } = response.data;

    // Save token and user info in localStorage (or context)
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    // Navigate based on role
    if (user.role === "admin") {
      navigate("/admin");
    } else if (user.role === "caller") {
      navigate("/caller");
    }
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md animate-fadeIn">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back 👋</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>


        {/* Register */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            New user?
            <button
              onClick={() => navigate("/register")}
              className="text-blue-600 font-medium ml-1 hover:underline"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
