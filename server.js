const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const PORT = process.env.PORT;

dotenv.config();
connectDB();

const app = express();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

