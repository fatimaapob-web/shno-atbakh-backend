const express = require("express");
const { suggestRecipes, getRecipeDetails } = require("../controllers/suggestController");

const router = express.Router();

// POST /api/suggest  →  وصفات من مرام حسب المكونات
router.post("/", suggestRecipes);

// POST /api/suggest/recipe  →  المكونات بالكميات وطريقة التحضير لوصفة وحدة
router.post("/recipe", getRecipeDetails);

module.exports = router;
