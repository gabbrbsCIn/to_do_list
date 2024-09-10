const express = require("express");
const db = require("./src/models");
const app = express();
require("dotenv").config();

app.use(express.json());

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Conexão com o banco de dados estabilizada com sucesso");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados", error);
  }
})();

module.exports = app;
