const IndexModels = require("../models/IndexModels");
const crypto = require("../middlewares/crypto");

const MainController = {
  login(req, res) {
    res.render("pages/login", { pageTitle: "Login", error: "" });
  },
  redirect(req, res) {
    res.redirect("/login");
  },
  sucess(req, res) {
    res.render("pages/sucess", {
      pageTitle: "Sucesso",
      user: req.session.user,
    });
  },
  register(req, res) {
    res.render("pages/register", { pageTitle: "Cadastre-se" });
  },
  signIn(req, res) {
    const { email, password, remember } = req.body;
    const user = IndexModels.findEmail(email);
    const cryptoPassword = user.password;
    if (!user || !crypto.validate(password, cryptoPassword)) {
      return res.render("pages/login", {
        pageTitle: "Login",
        error: "userio não existe ou a senha está errada!",
      });
    }
    if (remember != undefined) {
      const id = user.id;
      const mail = user.email;
      const key = crypto.keyGen(id, mail);
      res.cookie("auth", key, { maxAge: 60000 });
      res.cookie("user", mail, { maxAge: 60000 });
    }

    req.session.user = user;
    return res.redirect("/sucesso");
  },
  signUp(req, res) {
    const { name, email, password } = req.body;
    const cryptoPassword = crypto.create(password);
    IndexModels.registerUser(name, email, cryptoPassword);

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
