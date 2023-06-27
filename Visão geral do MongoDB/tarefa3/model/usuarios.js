//importa mongoose
const mongoose = require("mongoose");

// implemente o schema para o usuário com os devidos dados
const UsuarioSchema = new mongoose.Schema({
  cpf: { type: String, required: true, unique: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
});

// define Usuario como modelo para novos usuários
const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;