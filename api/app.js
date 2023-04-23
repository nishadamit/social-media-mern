const express = require("express");
const dotEnv = require("dotenv");
const helmet = require("helmet");

const app = express();

const userRoutes = require("./routes/User");

// middle wares
dotEnv.config();
app.use(express.json());
app.use(helmet());

app.use("/api/users", userRoutes);
module.exports = app;
