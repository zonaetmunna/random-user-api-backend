const express = require("express");
const cors = require("cors");

// app and port declared
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// api
app.get("/", (req, res) => {
  res.send("api");
});

// app listen
app.listen(port, () => {
  console.log("listing the port", port);
});
