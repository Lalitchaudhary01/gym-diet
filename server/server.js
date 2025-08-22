const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const dotenv = require("dotenv");
const cors = require("cors"); // <<--- import cors

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// ✅ enable cors
app.use(
  cors({
    origin: "http://localhost:5173", // tumhare frontend ka origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
