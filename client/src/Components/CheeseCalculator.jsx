import React, { useState } from "react";
import styles from "../Stylesheets/CheeseCalculatorStyle.module.css";

const CheeseCalculator = (props) => {
  const [selectedCheese, setSelectedCheese] = useState("");
  const [weight, setWeight] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheeseSelect = (event) => {
    setSelectedCheese(event.target.value);
  };

  const handleWeightChange = (event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setWeight(value);
    } else {
      setWeight(0);
    }
  };

  const calculateTotalCost = () => {
    if (selectedCheese === "") {
      setErrorMessage("Please select a cheese.");
      return;
    }
    if (weight <= 0) {
      setErrorMessage("Please enter a valid weight.");
      return;
    }

    const selectedCheeseObj = props.cheeses.find(
      (cheese) => cheese.name === selectedCheese
    );
    if (selectedCheeseObj) {
      const cost = selectedCheeseObj.pricePerKg * weight;
      setTotalCost(cost);
      setErrorMessage("");
    }
  };

  return (
    <div className={styles["cheese-calculator"]}>
      <h2>Cheese Calculator</h2>
      <label htmlFor={styles["cheese-select"]}>Select Cheese:</label>
      <select id={styles["cheese-select"]} onChange={handleCheeseSelect}>
        <option value="">--Please choose a cheese--</option>
        {Object.keys(props.cheeses).map((cheese, index) => (
          <option key={index} value={props.cheeses[cheese].name}>
            {props.cheeses[cheese].name}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor={styles["weight-input"]}>Enter Weight (kg):</label>
      <input
        type="number"
        id={styles["weight-input"]}
        value={weight}
        onChange={handleWeightChange}
      />
      <br />
      <button onClick={calculateTotalCost}>Calculate Total Cost</button>
      <br />
      {errorMessage && (
        <p className={styles["error-message"]}>{errorMessage}</p>
      )}
      {totalCost > 0 && (
        <div>
          <h3>Total Cost:</h3>
          <p>${totalCost.toFixed(2)} AUD</p>
        </div>
      )}
    </div>
  );
};

export default CheeseCalculator;
