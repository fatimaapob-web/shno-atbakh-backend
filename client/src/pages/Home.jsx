import { useState } from "react"

import Hero from "../components/Hero/Hero.jsx"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import CategoryCard from "../components/Categorycard/categorycard.jsx"
import RecipeCard from "../components/RecipeCard/RecipeCard.jsx"
import AISection from "../components/AIsection/AIsection.jsx"
import SearchBar from "../components/searchBar/searchBar.jsx"

import mockRecipes from "../data/mockRecipes"

function Home() {
  const [recipes, setRecipes] = useState(mockRecipes)

  const handleFavorite = (recipe) => {
    setRecipes((currentRecipes) =>
      currentRecipes.map((item) =>
        item.id === recipe.id
          ? { ...item, favorite: !item.favorite }
          : item
      )
    )
  }

  const handleSearch = (value) => {
    if (!value.trim()) {
      setRecipes(mockRecipes)
      return
    }

    const filtered = mockRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(value.toLowerCase())
    )

    setRecipes(filtered)
  }

  return (
    <div className="page-shell">
      <Navbar />

      <Hero />

      <section className="reveal-section py-20 bg-white">
        <div className="container">

          <div className="section-heading text-center mb-12">
            <span className="section-eyebrow">
              SOMETHING FOR EVERY CRAVING
            </span>

            <h2>
              What sounds <em>good</em> today?
            </h2>
            <p>Pick a mood. We’ll bring the meal ideas.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <CategoryCard
              icon="🥗"
              title="Feel-good"
              description="Colorful, fresh and full of goodness."
            />

            <CategoryCard
              icon="🍝"
              title="Quick & cozy"
              description="Big comfort, without the long wait."
            />

            <CategoryCard
              icon="🌍"
              title="Middle Eastern"
              description="Warm spices, generous tables, happy hearts."
            />

            <CategoryCard
              icon="🍕"
              title="Little classics"
              description="The familiar favorites you always crave."
            />

          </div>

        </div>
      </section>

      <section id="popular-recipes" className="reveal-section py-20 bg-[#FFFDF7]">
        <div className="container">

          <div className="section-heading max-w-3xl mx-auto mb-12">
            <span className="section-eyebrow">A GOOD PLACE TO START</span>
            <h2>
              What are we <em>making?</em>
            </h2>
            <p>Find a new favorite for tonight’s table.</p>

            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onFavorite={handleFavorite}
              />
            ))}

          </div>

          {recipes.length === 0 && (
            <p className="text-center text-[#757575] mt-10">
              No recipes found.
            </p>
          )}

        </div>
      </section>

      <AISection />

      <Footer />
    </div>
  )
}

export default Home