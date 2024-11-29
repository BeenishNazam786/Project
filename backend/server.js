require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const donorRoutes = require("./routes/donorRoutes");


const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/donors", require("./routes/donorRoutes"));
app.use("/api", require("./routes/donorRoutes"));


// Connect to MongoDB
connectDB();

// Test Route
app.get("/", (req, res) => {
    res.send("Blood Bank API is running!");
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
