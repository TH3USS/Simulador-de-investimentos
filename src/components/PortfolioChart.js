import { useEffect, useState } from "react";
import { fetchStockData } from "../utils/fetchStockData";
import usePortfolio from "../store/usePortfolio";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const PortfolioChart = () => {
  const investments = usePortfolio((state) => state.investments);
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      let result = [];
      for (const inv of investments) {
        const stockData = await fetchStockData(inv.symbol);
        if (stockData) {
          const dates = Object.keys(stockData).slice(0, 30);
          dates.forEach((date, index) => {
            if (!result[index]) result[index] = { date };
            result[index][inv.symbol] = parseFloat(
              stockData[date]["4. close"]
            );
          });
        }
      }
      setData(result);
    };
    if (investments.length) loadData();
  }, [investments]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Histórico de Preços</h2>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        {investments.map((inv) => (
          <Line key={inv.symbol} type="monotone" dataKey={inv.symbol} stroke="#8884d8" />
        ))}
      </LineChart>
    </div>
  );
};

export default PortfolioChart;
