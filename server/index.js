const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const CheeseModel = require("./models/Cheeses");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001; //process.env.PORT;

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cheeseria.d4swfpe.mongodb.net/crud?retryWrites=true&w=majority&appName=Cheeseria`
);

app.get("/", (req, res) => {
  CheeseModel.find({})
    .then((cheeses) => res.json(cheeses))
    .catch((err) => res.json(err));
});

// app.post("/createCheese", (req, res) => {
//   CheeseModel.create(req.body)
//     .then((cheeses) => res.json(cheeses))
//     .catch((err) => res.json(err));
// });

app.listen(PORT, () => {
  console.log("Server is Running on Port: ", PORT);
});
