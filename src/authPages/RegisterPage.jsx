import { useState } from "react";
import { useNavigate } from "react-router-dom";

const demoApprovedEmails = ["caller1@example.com", "caller2@example.com"]; // Admin-approved

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const sendOtp = () => {
    if (!demoApprovedEmails.includes(email.trim().toLowerCase())) {
      setError("This email is not registered by admin. Contact admin@example.com");
      return;
    }
    const generatedOtp = "123456"; // Simulate OTP
    setOtp(generatedOtp);
    setError("");
    setStep(2);
  };

  const verifyOtp = () => {
    if (enteredOtp !== otp) {
      setError("Invalid OTP. Please try again.");
      return;
    }
    setError("");
    setStep(3);
  };

  const completeRegistration = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    alert("Registered successfully! You can now log in.");
    navigate("/login");
  };

  const progress = step * 33;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-700 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Caller Registration</h2>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        {step === 1 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Enter your registered email</label>
            <input
              type="email"
              className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="caller1@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={sendOtp}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Send OTP
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP sent to your email</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="123456"
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
            />
            <button
              onClick={verifyOtp}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Verify OTP
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Create Password</label>
              <input
                type="password"
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              onClick={completeRegistration}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Register
            </button>
          </div>
        )}

        <div className="mt-6 text-center text-sm text-gray-600">
          Already registered?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
