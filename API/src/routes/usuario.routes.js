const express = require("express");
const router = express.Router();
const Usuario = require("../models/usuario");

router.post("/login", async (req, res) => {
  try {
    const credenciais = req.body;
    const usuario = await Usuario.findOne(credenciais);

    if (usuario) {
      res.json({ error: false, usuario });
    } else {
      res.json({ err: true, message: "Nenhum usuário encontrado" });
    }
  } catch (err) {
    res.json({ err: true, message: err.message });
  }
});

router.post("/cadastrar", async (req, res) => {
  try {
    const credenciais = req.body;
    const usuario = await new Usuario(credenciais).save();
    res.json({ error: false, credenciais: usuario });
  } catch (err) {
    res.json({ error: false, mesage: err.message });
  }
});

module.exports = router;
