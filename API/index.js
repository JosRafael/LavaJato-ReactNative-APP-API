const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const database = require("./src/services/database");
const cors = require("cors");
const app = express();

const usuarioRoutes = require("./src/routes/usuario.routes");

// MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

// ROUTES
app.use("/usuario", usuarioRoutes);

app.listen(4200, () => {
  console.log("Servidor rodando.");
});

module.exports = app;
