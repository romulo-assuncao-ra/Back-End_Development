const router = require("express").Router();
const usuarios = require("../controller/usuarios.controller");


router.post("/criarUsuario", usuarios.criarUsuario);
router.get("/listarUsuarios", usuarios.listarUsuarios);
router.get("/exiberUsuario/:cpf", usuarios.exiberUsuario);
router.put("/atualizarUsuario/:cpf", usuarios.atualizarUsuario);
router.delete("/deletarUsuario/:cpf", usuarios.deletarUsuario);
router.post("/login", usuarios.loginUsuario);
router.get("/validarToken", usuarios.validarToken);

module.exports = router;