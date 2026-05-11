import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [balance, setBalance] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const register = async () => {
    try {
      setError("");
      setSuccess("");
      setLoading(true);

      await API.post("/auth/register", {
        name,
        email,
        pin,
        balance,
      });

      setSuccess("Registration successful. Please login.");

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (err: any) {
      setError(err?.response?.data?.msg || "Registration failed");
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
            Create Account
          </h1>

          <p className="text-gray-400 mt-2">
            Register for secure ATM access
          </p>
        </div>

        {/* NAME */}
        <input
          className="w-full p-4 mb-4 bg-[#0f172a] rounded-xl outline-none"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          maxLength={4}
          className="w-full p-4 mb-4 bg-[#0f172a] rounded-xl outline-none"
          placeholder="4-digit PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />

        {/* INITIAL BALANCE */}
        <input
          type="number"
          className="w-full p-4 mb-6 bg-[#0f172a] rounded-xl outline-none"
          placeholder="Initial Amount"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />

        {/* BUTTON */}
        <button
          onClick={register}
          disabled={loading}
          className={`w-full py-4 rounded-xl font-semibold ${
            loading
              ? "bg-gray-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? "Creating Account..." : "Register"}
        </button>

        {/* SUCCESS */}
        {success && (
          <p className="text-green-400 mt-4 text-center">
            {success}
          </p>
        )}

        {/* ERROR */}
        {error && (
          <p className="text-red-400 mt-4 text-center">
            {error}
          </p>
        )}

        {/* LOGIN LINK */}
        <p className="text-sm text-center mt-6 text-gray-400">
          Already registered?{" "}
          <span
            className="text-green-400 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}