const express = require("express"); //servidor
const nunjucks = require("nunjucks"); //blades

const server = express();
const recipes = require("./recipes");

server.use(express.static("public/assets"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
});

server.get("/", function (req, res) {
  return res.render("home", { items: recipes });
});
server.get("/sobre", function (req, res) {
  return res.render("about");
});
server.get("/receitas", function (req, res) {
  return res.render("recipe");
});

server.use(function (req, res) {
  return res.status(404).render("not-found");
});

server.listen(5005, function () {});
