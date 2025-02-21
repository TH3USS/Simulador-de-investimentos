import AddInvestment from "./components/AddInvestment";
import PortfolioChart from "./components/PortfolioChart";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Simulador de Investimentos</h1>
      <AddInvestment />
      <PortfolioChart />
    </div>
  );
}

export default App;
