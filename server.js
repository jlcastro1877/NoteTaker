const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res, next) => {
  res.render("index.ejs");
});

app.get("/notes", (req, res, next) => {
  res.render("notes.ejs");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
