const express = require("express");
const router = express.Router();
const MainController = require("../controllers/MainController");

router.get("/login", MainController.login);
router.get("/registre-se", MainController.register);

module.exports = router;
