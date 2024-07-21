const express = require("express");
const todoRoutes = require("./routes/todoRoutes");
const app = express();
const PORT = 4000;

app.get("/", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
