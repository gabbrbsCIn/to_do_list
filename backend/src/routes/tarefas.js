const express = require("express");
const { authenticateToken } = require("../middlewares/authMiddleware");
const router = express.Router();
const tarefas = require("../controllers/tarefas");
const { adminTarefa } = require("../middlewares/adminTarefaMiddleware");

router.post("/create", authenticateToken, tarefas.create);
router.put("/update", authenticateToken, adminTarefa, tarefas.update);
router.get("/membro", authenticateToken, tarefas.getMembroTarefas);
router.get("/", authenticateToken, tarefas.getAll);
router.get("/:id", authenticateToken, adminTarefa, tarefas.getTarefaById);
router.delete("/delete/:id", authenticateToken, adminTarefa, tarefas.deleteTarefa);
router.patch("/finish", authenticateToken, adminTarefa, tarefas.finish);

module.exports = router;
