const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/authMiddleware");
const membros = require("../controllers/membros");

router.get("/", authenticateToken, membros.getMembros);

module.exports = router;
