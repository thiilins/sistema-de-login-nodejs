const path = require("path");
const IndexModels = require("../models/IndexModels");
const MainController = {
  login(req, res) {
    res.render("pages/login");
  },
  register(req, res) {
    res.render("pages/register");
  },
};
module.exports = MainController;
