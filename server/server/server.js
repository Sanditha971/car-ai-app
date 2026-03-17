const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/ask", (req, res) => {
  res.json({ answer: "Server working!" });
});

app.listen(3000, () => console.log("Server running"));
