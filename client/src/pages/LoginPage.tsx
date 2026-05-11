import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async () => {
    try {
      setError("");
      setLoading(true);

      const res = await API.post("/auth/login", {
        email,
        pin,
      });

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");

    } catch (err: any) {
      setError(err?.response?.data?.msg || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816] px-6">
      
      <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-3xl w-full max-w-md shadow-2xl">

        {/* HEADER */}
        <div className="mb-8 text-center">
          
          <h1 className="text-3xl font-bold">
            ATM System
          </h1>

          <p className="text-gray-400 mt-2">
            Secure banking access
          </p>
        </div>

        {/* EMAIL */}
        <input
          className="w-full p-4 mb-4 bg-[#0f172a] rounded-xl outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PIN */}
        <input
          type="password"
          className="w-full p-4 mb-6 bg-[#0f172a] rounded-xl outline-none"
          placeholder="4-digit PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />

        {/* BUTTON */}
        <button
          onClick={login}
          disabled={loading}
          className={`w-full py-4 rounded-xl font-semibold ${
            loading
              ? "bg-gray-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* ERROR */}
        {error && (
          <p className="text-red-400 mt-4 text-center">
            {error}
          </p>
        )}

        {/* REGISTER */}
        <p className="text-sm text-center mt-6 text-gray-400">
          Not registered?{" "}
          <span
            className="text-green-400 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Create account
          </span>
        </p>
      </div>
    </div>
  );
}