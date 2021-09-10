const auth = (req, res, next) => {
  if (typeof req.session.user != "undefined") {
    return next();
  } else {
    return res.redirect("/login");
  }
};
module.exports = auth;
