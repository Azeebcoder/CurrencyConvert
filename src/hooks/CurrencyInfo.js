import { useEffect, useState } from "react";

const useCurrencyInfo = (currency = 'inr') => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCurrencyData = async () => {

      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      );
      const result = await response.json();
      setData(result[currency]);
      
    };

    if (currency) {
      fetchCurrencyData();
    }
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
