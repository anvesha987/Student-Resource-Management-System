const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 3003;

const authRoutes = require("./routes/authRoutes");
const resourceRoutes = require("./routes/resourceRoutes");

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose
  .connect("mongodb://127.0.0.1:27017/studentPortal")
  .then(() => console.log("MongoDB connected (Local)"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/resources", resourceRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
