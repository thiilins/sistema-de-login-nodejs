const auth = {
  verify(req, res, next) {
    if (typeof req.session.user != "undefined") {
      return next();
    } else {
      return res.redirect("/login");
    }
  },
  login(req, res, next) {
    if (typeof req.session.user == "undefined") {
      return next();
    } else {
      return res.redirect("/sucesso");
    }
  },
};
module.exports = auth;
