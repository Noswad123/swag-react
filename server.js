const express = require("express");
const path = require("path");
const Redis = require("ioredis");
var db = require("./db");
const app = express();
const port = process.env.PORT || 8080;

db.connect();
app.use("/", express.static(`${__dirname}/build`));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
// app.get("/", (req, res) => {
//   res.send({ express: "Hello From Express" });
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
