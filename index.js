const express = require("express");
const PORT = process.env.PORT || 8082;
const app = express();
const pug = require("pug");
const path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("landing.pug");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
