import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [balance, setBalance] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const register = async () => {
    try {
      setError("");
      setMsg("");

      await API.post("/auth/register", {
        name,
        email,
        pin,
        balance: Number(balance) || 0
      });

      setMsg("Account created successfully");

      // optional auto-login
      const res = await API.post("/auth/login", { email, pin });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");

    } catch (err: any) {
      setError(err?.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-slate-900 p-8 rounded-xl w-80 shadow-xl">
        <h2 className="text-xl mb-6 text-center">Create Account</h2>

        <input className="w-full p-2 mb-3 bg-slate-800 rounded"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)} />

        <input className="w-full p-2 mb-3 bg-slate-800 rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />

        <input type="password"
          className="w-full p-2 mb-3 bg-slate-800 rounded"
          placeholder="4-digit PIN"
          onChange={(e) => setPin(e.target.value)} />

        <input
          className="w-full p-2 mb-4 bg-slate-800 rounded"
          placeholder="Initial Balance"
          onChange={(e) => setBalance(e.target.value)}
        />

        <button
          onClick={register}
          className="w-full bg-green-500 py-2 rounded hover:bg-green-600"
        >
          Register
        </button>

        {/* SUCCESS / ERROR MESSAGES */}
        {msg && <p className="text-green-400 mt-3 text-sm">{msg}</p>}
        {error && <p className="text-red-400 mt-3 text-sm">{error}</p>}

        <p className="text-sm text-center mt-4 text-gray-400">
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