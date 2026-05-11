interface Props {
  balance: number;
}

export default function BalanceCard({ balance }: Props) {
  return (
    <div className="bg-gradient-to-br from-green-500 to-emerald-700 rounded-3xl p-8 shadow-2xl">
      
      <p className="text-sm opacity-80">
        Available Balance
      </p>

      <h1 className="text-5xl font-bold mt-4">
        ₹{balance}
      </h1>

      <div className="mt-10 flex justify-between text-sm opacity-80">
        <span>ATM SAVINGS</span>
        <span>•••• 2048</span>
      </div>
    </div>
  );
}