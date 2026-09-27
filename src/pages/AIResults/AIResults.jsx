import { useLocation, useNavigate } from "react-router-dom"

import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import RecipeCard from "../components/RecipeCard/RecipeCard"
import mockRecipes from "../data/mockRecipes"

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
    <div>

      <Navbar />

      <main className="py-16 min-h-[70vh]">

        <div className="container">

          <button
            onClick={() => navigate("/")}
            className="text-[#2E7D32] font-semibold mb-8"
          >
            ← Back
          </button>

          <div className="text-center mb-12">

            <span className="text-[#4CAF50] font-semibold">
              🤖 AI Results
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#263238] mt-2 mb-5">
              Recipes For Your Ingredients
            </h1>

            <div className="flex flex-wrap justify-center gap-2">

              {ingredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="bg-[#E8F5E9] text-[#2E7D32] px-4 py-2 rounded-full"
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
            <div className="text-center py-20">

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