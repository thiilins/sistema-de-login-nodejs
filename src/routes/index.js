const express = require("express");
const router = express.Router();
const MainController = require("../controllers/MainController");
router.get("/", MainController.redirecionamento);
router.get("/login", MainController.login);
router.get("/cadastre-se", MainController.cadastro);
router.get("/sucesso", MainController.sucesso);

router.post("/login", MainController.fazerLogin);
router.post("/cadastre-se", MainController.fazerCadastro);

module.exports = router;
