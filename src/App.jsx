import React, { useEffect, useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/CurrencyInfo.js";
import InputBox from "./components/InputBox.jsx";

const App = () => {
  const [currencyFrom, setCurrencyFrom] = useState("inr");
  const [currencyTo, setCurrencyTo] = useState("usd");
  const [currencyCodeFrom, setCurrencyCodeFrom] = useState("IN");
  const [currencyCodeTo, setCurrencyCodeTo] = useState("US");
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(1);
  let currencyOptions = useCurrencyInfo(currencyFrom);
  const [options, setOptions] = useState();

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setCurrencyFrom(setCurrencyTo);
    setCurrencyTo(setCurrencyFrom);
    setCurrencyCodeTo(currencyCodeFrom);
    setCurrencyCodeFrom(currencyCodeTo)
  };

  const handleChange = () => {
    const exchangeRate = currencyOptions[currencyTo];
    setTo(Math.floor(from * exchangeRate * 1000) / 1000);
  };

  // Use useEffect to monitor changes in currencyOptions
  useEffect(() => {
    if (currencyOptions) {
      setOptions(Object.keys(currencyOptions));
    }
  }, [currencyOptions]); // Re-run when currencyOptions changes


  return (
    <>
      <div className="currencyConverter">
        <div className="mainBox">
          {options && (
            <InputBox
              options={options}
              label={"from"}
              value={from}
              setValue={setFrom}
              setCurrency={setCurrencyFrom}
              selected={currencyFrom}
              imageUrl={`https://flagsapi.com/${currencyCodeFrom}/flat/64.png`}
              
              setCountryCode={setCurrencyCodeFrom}
            />
          )}
          <button className="btn" onClick={handleSwap}>Swap</button>
          {options && (
            <InputBox
              options={options}
              label={"to"}
              value={to}
              setValue={setTo}
              setCurrency={setCurrencyTo}
              selected={currencyTo}
              imageUrl={`https://flagsapi.com/${currencyCodeTo}/flat/64.png`}
              setCountryCode={setCurrencyCodeTo}
            />
          )}
          <button className="btn" onClick={handleChange}>Convert</button>
        </div>
      </div>
    </>
  );
};

export default App;
