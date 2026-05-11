import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

interface Props {
  children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}