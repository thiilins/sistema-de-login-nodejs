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
    const { email, senha, lembrar } = req.body;
    const usuario = IndexModels.localizarEmail(email);
    const senhaU = usuario.password;
    if (!usuario || !crypto.validar(senha, senhaU)) {
      return res.render("pages/login", {
        pageTitle: "Login",
        error: "Usuario não existe ou a senha está errada!",
      });
    }
    if (lembrar != undefined) {
      const id = usuario.id;
      const mail = usuario.email;
      const key = crypto.criar(id + mail + "34567890");
      res.cookie("auth", key, { maxAge: 60000 });
      res.cookie("user", mail, { maxAge: 60000 });
    }

    req.session.user = usuario;
    return res.redirect("/sucesso");
  },
  fazerCadastro(req, res) {
    const { nome, email, senha } = req.body;
    const senhaC = crypto.criar(senha);
    IndexModels.cadastrarUsuario(nome, email, senhaC);

    res.redirect("/login");
  },
  logout(req, res) {
    res.clearCookie("user");
    res.clearCookie("auth");
    delete req.session.user;
    return res.redirect("/login");
  },
};
module.exports = MainController;
