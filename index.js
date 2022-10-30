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

app.get("/event1", (req, res) => {
  res.render("event1.pug");
});
app.get("/event2", (req, res) => {
  res.render("event2.pug");
});
app.get("/event3", (req, res) => {
  res.render("event3.pug");
});
app.get("/event4", (req, res) => {
  res.render("event4.pug");
});
app.get("/event5", (req, res) => {
  res.render("event5.pug");
});
app.get("/event6", (req, res) => {
  res.render("event6.pug");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
