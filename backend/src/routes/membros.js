const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/authMiddleware");
const membros = require("../controllers/membros");

router.get("/", authenticateToken, membros.getAll);
router.delete("/delete", authenticateToken, membros.deleteMembro);
router.put("/update", authenticateToken, membros.updateMembro);

module.exports = router;
