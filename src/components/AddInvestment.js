import { useState } from "react";
import usePortfolio from "../store/usePortfolio";

const AddInvestment = () => {
  const [symbol, setSymbol] = useState("");
  const [amount, setAmount] = useState(0);
  const addInvestment = usePortfolio((state) => state.addInvestment);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!symbol || amount <= 0) return;
    addInvestment({ symbol, amount });
    setSymbol("");
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <input
        type="text"
        placeholder="Ativo (ex: AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 border rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Adicionar
      </button>
    </form>
  );
};

export default AddInvestment;
