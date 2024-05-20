import React, { useEffect, useState } from "react";
import axios from "axios";

import CheeseGrid from "../Components/CheeseGrid.jsx";
import CheeseCalculator from "../Components/CheeseCalculator.jsx";

const Cheese = () => {
  const [cheeses, setCheeses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((res) => setCheeses(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <CheeseGrid cheeses={cheeses} />
      <CheeseCalculator cheeses={cheeses} />
    </div>
  );
};

export default Cheese;
