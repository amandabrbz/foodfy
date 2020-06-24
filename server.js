const express = require("express"); //servidor
const nunjucks = require("nunjucks"); //blades

const server = express();

server.use(express.static("public/assets"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false
});

server.get("/", function (req, res) {
  return res.render("home");
});

server.use(function(req, res) {
  return res.status(404).render("not-found");
});

server.listen(5000, function () {
  // create the localhost thing, port 5000
  console.log("server is running");
});
