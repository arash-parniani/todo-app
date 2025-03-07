const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();
const routes = require("./routes/route");

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.URI;


app.use((req, res, next) => {
  console.log(` در خواست: ${req.method} ${req.path}`);
  next();
});


app.use(express.json());
app.use(cors())


// Route
app.use("/api/v1", routes);


app.get("/", (req, res) => {
  res.send('<h1>سلام خوش اومدی این یک api ساده است</h1>')
});


if (!MONGO_URI) {
  console.error("❌ MongoDB URI is not defined in .env file!");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
      console.log(`✅ Mongoose is connected`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err);
  });
