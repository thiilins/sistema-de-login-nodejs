const path = require("path");
const IndexModels = require("../models/IndexModels");
const MainController = {
  login(req, res) {
    res.render("pages/login");
  },
  redirecionamento(req, res) {
    res.redirect("/login");
  },
  cadastro(req, res) {
    res.render("pages/register");
  },
  fazerLogin(req) {},
  fazerCadastro(req) {},
};
module.exports = MainController;
