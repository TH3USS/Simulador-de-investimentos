import axios from "axios";

const API_KEY = "SUA_CHAVE_DA_API"; // Insira sua chave de API aqui
const BASE_URL = "https://www.alphavantage.co/query";

export const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: "TIME_SERIES_DAILY",
        symbol,
        apikey: API_KEY,
      },
    });
    return response.data["Time Series (Daily)"];
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return null;
  }
};
