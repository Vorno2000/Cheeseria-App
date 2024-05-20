import React from "react";
import styles from "../Stylesheets/CheeseGridStyle.module.css";

import Cheese from "./CheeseCard";

const CheeseGrid = (props) => {
  return (
    <div className={styles["cheese-grid"]}>
      {Object.keys(props.cheeses).map((cheese, index) => (
        <Cheese key={index} cheese={props.cheeses[cheese]} />
      ))}
    </div>
  );
};

export default CheeseGrid;
