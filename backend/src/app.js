require("dotenv").config();
const express = require("express");
const db = require("./models");
const app = express();
const authRoutes = require("./routes/auth");
const membroRoutes = require("./routes/membros");
const tarefaRoutes = require("./routes/tarefas");
app.use(express.json());

PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use("/", authRoutes);
app.use("/membros", membroRoutes);
app.use("/tarefas", tarefaRoutes);

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Conexão com o banco de dados estabilizada com sucesso");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados", error);
  }
})();

module.exports = app;
