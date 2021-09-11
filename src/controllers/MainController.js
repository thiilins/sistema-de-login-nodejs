const path = require("path");
const IndexModels = require("../models/IndexModels");
const MainController = {
  login(req, res) {
    res.render("pages/login", { pageTitle: "Login" });
  },
  redirecionamento(req, res) {
    res.redirect("/login");
  },
  sucesso(req, res) {
    res.render("pages/sucess", { pageTitle: "Sucesso" });
  },
  cadastro(req, res) {
    res.render("pages/register", { pageTitle: "Cadastre-se" });
  },
  fazerLogin(req, res) {
    const { email, senha } = req.body;
    return res.redirect("/login");
  },
  fazerCadastro(req, res) {},
};
module.exports = MainController;
