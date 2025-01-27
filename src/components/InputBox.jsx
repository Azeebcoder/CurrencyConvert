import React from "react";
import styles from "./InputBox.module.css";

const InputBox = ({
  label,
  options,
  selected = "inr",
  value,
  setValue,
  setCurrency,
  imageUrl,
  setCountryCode,
}) => {
  return (
    <>
      <div className={styles.container}>
        <label htmlFor="from" className={styles.label}>
          {label}
        </label>
        <div className={styles.inputbox}>
          <div className={styles.inputContainer}>
            <input
              type="number"
              id="from"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.selectContainer}>
            <img
              src={imageUrl}
              alt=""
            />
            <select
              name="currency"
              id="currency"
              value={selected}
              onChange={(e) =>{
                setCurrency(e.target.value)
                setCountryCode(e.target.value.toUpperCase().slice(0,2))
              }}
              className={styles.select}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputBox;
