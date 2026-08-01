const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
const { port, appName } = require("./config/env");
const taskRoutes = require("./routes/taskRoutes");
app.use(cors());
app.use(express.json());
app.use("/api/students", taskRoutes);
app.get("/", (req, res) => {
  res.send(`port is running...`);
});
app.listen(port, () => {
  console.log(`${appName} is running at http://localhost:${port}`);
});
