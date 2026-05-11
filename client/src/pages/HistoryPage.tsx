import { useEffect, useState } from "react";
import API from "../api";
import AppLayout from "../layout/AppLayout";

interface Transaction {
  type: string;
  amount: number;
  createdAt: string;
}

export default function HistoryPage() {
  const [tx, setTx] = useState<Transaction[]>([]);

  useEffect(() => {
    API.get("/transaction/history").then((res) => setTx(res.data));
  }, []);

  return (
    <AppLayout>

      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Transaction History
        </h1>

        <p className="text-gray-400 mt-2">
          View all your recent activities.
        </p>
      </div>

      <div className="space-y-4 max-w-4xl">
        
        {tx.map((t, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 flex justify-between items-center"
          >
            
            <div>
              <h2 className="capitalize text-lg font-semibold">
                {t.type}
              </h2>

              <p className="text-sm text-gray-400 mt-1">
                {new Date(t.createdAt).toLocaleString()}
              </p>
            </div>

            <h2
              className={`text-2xl font-bold ${
                t.type === "deposit"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              ₹{t.amount}
            </h2>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}