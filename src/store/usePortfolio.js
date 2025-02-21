import { create } from "zustand";

const usePortfolio = create((set) => ({
  investments: [],
  addInvestment: (investment) =>
    set((state) => ({ investments: [...state.investments, investment] })),
  removeInvestment: (symbol) =>
    set((state) => ({
      investments: state.investments.filter((inv) => inv.symbol !== symbol),
    })),
}));

export default usePortfolio;
