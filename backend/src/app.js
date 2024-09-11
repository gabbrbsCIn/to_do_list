require("dotenv").config();
const express = require("express");
const db = require("./models");
const app = express();
const authRoutes = require("./routes/auth")
app.use(express.json());

PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use("/", authRoutes);

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Conexão com o banco de dados estabilizada com sucesso");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados", error);
  }
})();

module.exports = app;
