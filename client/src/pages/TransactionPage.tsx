import { useEffect, useState } from "react";
import API from "../api";
import AppLayout from "../layout/AppLayout";

export default function TransactionPage() {
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/account").then((res) => {
      setBalance(res.data.balance);
    });
  }, []);

  const handle = async (type: "deposit" | "withdraw") => {
    try {
      setMsg("");
      setError("");

      const res = await API.post(`/transaction/${type}`, { amount });

      setBalance(res.data.balance);
      setMsg(`${type} successful`);
      setAmount("");

    } catch (err: any) {
      setError(err?.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <AppLayout>

      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Transactions
        </h1>

        <p className="text-gray-400 mt-2">
          Deposit or withdraw money securely.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* TRANSACTION CARD */}
        <div className="xl:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Make a Transaction
          </h2>

          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-4 rounded-xl bg-[#0f172a] outline-none mb-6"
          />

          <div className="grid grid-cols-2 gap-4">
            
            <button
              onClick={() => handle("deposit")}
              className="bg-green-500 hover:bg-green-600 py-4 rounded-xl font-semibold"
            >
              Deposit
            </button>

            <button
              onClick={() => handle("withdraw")}
              className="bg-red-500 hover:bg-red-600 py-4 rounded-xl font-semibold"
            >
              Withdraw
            </button>
          </div>

          {msg && (
            <p className="text-green-400 mt-6">
              {msg}
            </p>
          )}

          {error && (
            <p className="text-red-400 mt-6">
              {error}
            </p>
          )}
        </div>

        {/* SIDE INFO */}
        <div className="space-y-6">

          {/* BALANCE */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            
            <p className="text-gray-400">
              Current Balance
            </p>

            <h1 className="text-4xl font-bold text-green-400 mt-4">
              ₹{balance}
            </h1>
          </div>

          {/* TIPS */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            
            <h2 className="text-xl font-semibold mb-4">
              Tips
            </h2>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>• Ensure sufficient balance before withdrawal.</li>
              <li>• Deposits update instantly.</li>
              <li>• All activities are securely logged.</li>
            </ul>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}