const path = require("path");
const IndexModels = require("../models/IndexModels");
const crypto = require("../middlewares/crypto");
const MainController = {
  login(req, res) {
    res.render("pages/login", { pageTitle: "Login", error: "" });
  },
  redirecionamento(req, res) {
    res.redirect("/login");
  },
  sucesso(req, res) {
    res.render("pages/sucess", {
      pageTitle: "Sucesso",
      usuario: req.session.user,
    });
  },
  cadastro(req, res) {
    res.render("pages/register", { pageTitle: "Cadastre-se" });
  },
  fazerLogin(req, res) {
    const { email, senha } = req.body;
    const usuario = IndexModels.localizarEmail(email);
    const senhaU = usuario.password;
    if (!crypto.validar(senha, senhaU)) {
      res.render("pages/login", {
        pageTitle: "Login",
        error: "Usuario não existe ou a senha está errada!",
      });
    }
    // console.log(usuario);
    req.session.user = usuario;
    return res.redirect("/sucesso");
  },
  fazerCadastro(req, res) {
    const { nome, email, senha } = req.body;
    const senhaC = crypto.criar(senha);
    IndexModels.cadastrarUsuario(nome, email, senhaC);
    console.log(nome, email, senha);
    res.redirect("/login");
  },
};
module.exports = MainController;
