const express = require("express");
const { suggestRecipes } = require("../controllers/suggestController");

const router = express.Router();

// POST /api/suggest  →  وصفات من مرام حسب المكونات
router.post("/", suggestRecipes);

module.exports = router;
