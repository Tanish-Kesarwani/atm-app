import {
    ArrowLeftRight,
    History,
    LayoutDashboard,
    LogOut,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const itemClass = (path: string) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition ${
      location.pathname === path
        ? "bg-green-500 text-white"
        : "text-gray-400 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <div className="hidden md:flex w-64 bg-white/5 border-r border-white/10 p-6 flex-col justify-between">
      
      {/* TOP */}
      <div>

        <h1 className="text-2xl font-bold mb-10">
          💳 ATM System
        </h1>

        <div className="space-y-2">

          <div
            className={itemClass("/dashboard")}
            onClick={() => navigate("/dashboard")}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </div>

          <div
            className={itemClass("/transaction")}
            onClick={() => navigate("/transaction")}
          >
            <ArrowLeftRight size={18} />
            Transactions
          </div>

          <div
            className={itemClass("/history")}
            onClick={() => navigate("/history")}
          >
            <History size={18} />
            History
          </div>
        </div>
      </div>

      {/* LOGOUT */}
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}