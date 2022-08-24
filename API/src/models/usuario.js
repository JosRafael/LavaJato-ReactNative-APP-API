const mongoose = require("mongoose");

const Usuario = mongoose.model("Usuario", {
  email: String,
  nome: String,
  telefone: String,
  password: String,
});

module.exports = Usuario;
