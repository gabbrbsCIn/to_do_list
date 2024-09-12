const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/authMiddleware");
const membros = require("../controllers/membros");

router.get("/", authenticateToken, membros.getAll);
router.delete("/", authenticateToken, membros.deleteMembro);

module.exports = router;
