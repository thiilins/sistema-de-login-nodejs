const crypto = require("./crypto");
const IndexModels = require("../models/IndexModels");
const cookiesLogin = (req, res, next) => {
  if (req.cookies.user != undefined && req.session.user == undefined) {
    const user = req.cookies.user;
    const auth = req.cookies.auth;
    const loginUser = IndexModels.localizarEmail(user);
    const { id, email } = loginUser;
    const key = id + email + "34567890"
    if (loginUser || crypto.validar(key, auth)) {
      req.session.user = loginUser;
    }
  }
  next();
};
module.exports = cookiesLogin;
