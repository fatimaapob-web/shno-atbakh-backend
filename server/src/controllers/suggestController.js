const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const MODEL = process.env.GEMINI_MODEL || "gemini-3.8-flash";

// نقبل نوع الوجبة بالعربي أو الإنكليزي
const MEAL_TYPES = ["فطور", "غداء", "عشاء", "سناك", "breakfast", "lunch", "dinner", "snack"];

const validateSuggestInput = ({ ingredients, people, mealType, lang }) => {
  if (!Array.isArray(ingredients) || ingredients.length === 0) {
    return "ingredients must be a non-empty array";
  }
  if (people !== undefined && (typeof people !== "number" || people <= 0)) {
    return "people must be a number greater than 0";
  }
  if (mealType && !MEAL_TYPES.includes(String(mealType).toLowerCase())) {
    return `mealType must be one of: ${MEAL_TYPES.join(", ")}`;
  }
  if (lang && !["ar", "en"].includes(lang)) {
    return "lang must be 'ar' or 'en'";
  }
  return null;
};

const buildPrompt = ({ ingredients, people, mealType, lang = "ar" }) => {
  const language = lang === "en" ? "English" : "Iraqi Arabic";
  return `
You are "Maram", a friendly cooking assistant specialised in Iraqi and Arabic cuisine.
The user has these ingredients: ${ingredients.join(", ")}.
${people ? `Number of people: ${people}.` : ""}
${mealType ? `Meal type: ${mealType}.` : ""}

Suggest 2 to 3 recipes that use these ingredients only (or most of them).
Write every text value in ${language}.
Return JSON only, with no text before or after it, in exactly this shape:
{
  "suggestions": [
    {
      "name": "recipe name",
      "description": "one short sentence",
      "cuisine": "cuisine type",
      "matchPercentage": 0-100,
      "time": number of minutes as an integer,
      "servings": ${people || 4},
      "ingredients": ["ingredient 1", "ingredient 2"]
    }
  ]
}`;
};

const suggestRecipes = async (req, res) => {
  const validationError = validateSuggestInput(req.body);
  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  try {
    const model = genAI.getGenerativeModel({ model: MODEL });
    const result = await model.generateContent(buildPrompt(req.body));
    const cleaned = result.response.text().replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    if (!Array.isArray(parsed.suggestions)) {
      throw new Error("AI response has no suggestions array");
    }

    res.json(parsed);
  } catch (error) {
    console.error("AI suggest error:", error.message);
    res.status(500).json({ message: "Could not generate suggestions, please try again" });
  }
};

module.exports = { suggestRecipes };
