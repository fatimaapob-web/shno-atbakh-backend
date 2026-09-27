import { useLocation, useNavigate } from "react-router-dom"

import Navbar from "../../components/Navbar.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import RecipeCard from "../../components/RecipeCard/RecipeCard.jsx"
import mockRecipes from "../../data/mockRecipes"

function AIResults() {
  const location = useLocation()
  const navigate = useNavigate()

  const ingredients = location.state?.ingredients || []

  const recipes = mockRecipes.filter((recipe) =>
    recipe.ingredients.some((ingredient) =>
      ingredients
        .map((item) => item.toLowerCase())
        .includes(ingredient.toLowerCase())
    )
  )

  return (
    <div className="page-shell">

      <Navbar />

      <main className="py-16 min-h-[70vh]">

        <div className="container">

          <button
            onClick={() => navigate("/")}
            className="text-[#2E7D32] font-semibold mb-8"
          >
            ← Back
          </button>

          <div className="reveal-item page-heading">
            <span className="section-eyebrow">A LITTLE FRIDGE MAGIC</span>
            <h1>Let’s cook <em>something lovely.</em></h1>
            <p>Here are a few delicious ways to use what you already have.</p>

            <div className="flex flex-wrap justify-center gap-2">

              {ingredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="ingredient-result-chip"
                >
                  {ingredient}
                </span>
              ))}

            </div>

          </div>

          {recipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                />
              ))}

            </div>
          ) : (
            <div className="empty-state">

              <div className="text-6xl mb-5">
                🍳
              </div>

              <h2 className="text-2xl font-bold mb-3">
                No matching recipes yet
              </h2>

              <p className="text-[#757575]">
                Try adding different ingredients.
              </p>

            </div>
          )}

        </div>

      </main>

      <Footer />

    </div>
  )
}

export default AIResults