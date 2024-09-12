const express = require("express");
const { authenticateToken } = require("../middlewares/authMiddleware");
const router = express.Router();
const tarefas = require("../controllers/tarefas");

router.post("/create", authenticateToken, tarefas.create);

module.exports = router;
