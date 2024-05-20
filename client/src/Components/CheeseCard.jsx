import React from "react";
import styles from "../Stylesheets/CheesesStyle.module.css";

const CheeseCard = (props) => {
  function imgCheck() {
    if (props.cheese.img == null || props.cheese.img === "")
      return "/Default.jpg";
    else return props.cheese.img;
  }
  return (
    <div className={styles["cheese-card"]}>
      <img src={imgCheck()} alt={props.cheese.name} />
      <div className={styles["cheese-details"]}>
        <h2>{props.cheese.name}</h2>
        <p>{props.cheese.description}</p>
        <p>Price per Kg: ${props.cheese.pricePerKg}</p>
        <p>Colour: {props.cheese.colour}</p>
      </div>
    </div>
  );
};

export default CheeseCard;
