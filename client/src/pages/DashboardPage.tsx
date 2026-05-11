import { useEffect, useState } from "react";
import API from "../api";
import BalanceCard from "../components/BalanceCard";
import QuickActions from "../components/QuickActions";
import AppLayout from "../layout/AppLayout";

interface Account {
  name: string;
  balance: number;
}

interface Transaction {
  type: string;
  amount: number;
  createdAt: string;
}

export default function DashboardPage() {
  const [data, setData] = useState<Account | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    API.get("/account").then((res) => setData(res.data));

    API.get("/transaction/history").then((res) =>
      setTransactions(res.data.slice(0, 3))
    );
  }, []);

  return (
    <AppLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Welcome back, {data?.name}
        </h1>

        <p className="text-gray-400 mt-2">
          Here's an overview of your account activity.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* LEFT SECTION */}
        <div className="xl:col-span-2 space-y-8">

          <BalanceCard balance={data?.balance || 0} />

          {/* RECENT ACTIVITY */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            
            <h2 className="text-2xl font-semibold mb-6">
              Recent Activity
            </h2>

            <div className="space-y-4">
              
              {transactions.map((t, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-white/5 pb-4"
                >
                  <div>
                    <p className="capitalize font-medium">
                      {t.type}
                    </p>

                    <p className="text-sm text-gray-400">
                      {new Date(t.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <p
                    className={`font-bold ${
                      t.type === "deposit"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    ₹{t.amount}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <QuickActions />
      </div>
    </AppLayout>
  );
}