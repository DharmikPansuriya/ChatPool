const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes')

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use('/api/user', userRoutes)

app.listen(PORT, console.log(`${PORT}`));
