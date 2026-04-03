const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());

// Connect MongoDB
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/authBasicDB");
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
};
connectDB();
// Routes
app.use("/api", userRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});


