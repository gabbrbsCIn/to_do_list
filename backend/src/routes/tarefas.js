const express = require("express");
const { authenticateToken } = require("../middlewares/authMiddleware");
const router = express.Router();
const tarefas = require("../controllers/tarefas");

router.post("/create", authenticateToken, tarefas.create);
router.post("/update", authenticateToken, tarefas.update);
router.get("/membro", authenticateToken, tarefas.getMembroTarefas);
router.get("/", authenticateToken, tarefas.getAll);

module.exports = router;
