import { useState } from "react"

import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import RecipeCard from "../components/RecipeCard/RecipeCard"
import mockRecipes from "../data/mockRecipes"

function Favorites() {
  const [recipes, setRecipes] = useState(
    mockRecipes.map((recipe, index) => ({
      ...recipe,
      favorite: index < 2,
    }))
  )

  const toggleFavorite = (recipe) => {
    setRecipes((current) =>
      current.map((item) =>
        item.id === recipe.id
          ? { ...item, favorite: !item.favorite }
          : item
      )
    )
  }

  const favorites = recipes.filter((recipe) => recipe.favorite)

  return (
    <div>
      <Navbar />

      <main className="py-16 min-h-[70vh]">

        <div className="container">

          <div className="mb-12">
            <span className="text-[#FF7043] font-semibold">
              ❤️ Saved Recipes
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#263238] mt-2">
              My Favorites
            </h1>
          </div>

          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {favorites.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onFavorite={toggleFavorite}
                />
              ))}

            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-7xl mb-5">
                🤍
              </div>

              <h2 className="text-2xl font-bold mb-3">
                No favorites yet
              </h2>

              <p className="text-[#757575]">
                Save recipes you love and find them here.
              </p>
            </div>
          )}

        </div>

      </main>

      <Footer />
    </div>
  )
}

export default Favorites