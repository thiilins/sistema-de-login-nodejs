const crypto = require("./crypto");
const IndexModels = require("../models/IndexModels");
const cookiesLogin = (req, res, next) => {
  if (req.cookies.user != undefined && req.session.user == undefined) {
    const { user, auth } = req.cookies;
    const loginUser = IndexModels.findEmail(user);
    const { id, email } = loginUser;
    if (loginUser || crypto.validate(id, email, auth)) {
      req.session.user = loginUser;
    }
  }
  next();
};
module.exports = cookiesLogin;
