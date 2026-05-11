import { useNavigate } from "react-router-dom";

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      
      <h2 className="text-xl font-semibold mb-6">
        Quick Actions
      </h2>

      <div className="space-y-4">
        
        <button
          onClick={() => navigate("/transaction")}
          className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl"
        >
          Deposit Money
        </button>

        <button
          onClick={() => navigate("/transaction")}
          className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl"
        >
          Withdraw Money
        </button>

        <button
          onClick={() => navigate("/history")}
          className="w-full bg-white/10 hover:bg-white/20 py-3 rounded-xl"
        >
          View History
        </button>
      </div>
    </div>
  );
}