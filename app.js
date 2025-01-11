const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const moodLogRoutes = require("./routes/moodLogRoutes");
const journalRoutes = require("./routes/journalRoutes");
const symptomLogRoutes = require("./routes/symptomLogRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/mood-logs", moodLogRoutes);
app.use("/api/journals", journalRoutes)
app.use("/api/symptoms", symptomLogRoutes);


module.exports = app;