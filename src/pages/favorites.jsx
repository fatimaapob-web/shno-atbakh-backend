import { useState } from "react"

import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import RecipeCard from "../components/RecipeCard/RecipeCard.jsx"
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
    <div className="page-shell">
      <Navbar />

      <main className="py-16 min-h-[70vh]">

        <div className="container">

          <div className="reveal-item page-heading page-heading-left">
            <span className="section-eyebrow">THE ONES YOU LOVED</span>
            <h1>Your little <em>recipe box.</em></h1>
            <p>Keep the good ones close. Dinner inspiration, saved for later.</p>
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
            <div className="empty-state">
              <div className="empty-state-icon">
                🤍
              </div>

              <h2>
                No favorites yet
              </h2>

              <p>
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