const express = require("express");
const pool = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const weeklyMealRoutes = require("./routes/weeklyMealRoutes");
const cors = require("cors");
const app = express();


const PORT = 3000;


app.use(express.json());
app.use(cors());app.use("/api/users", userRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/weekly-meals", weeklyMealRoutes);


app.get("/", (req, res) => {
  res.json({
    message: "Shno Atbakh Backend is running 🍳",
  });
});

app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      message: "Database connected successfully",
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database connection failed",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});