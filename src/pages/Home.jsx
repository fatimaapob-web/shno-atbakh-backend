import { useState } from "react"

import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import CategoryCard from "../components/CategoryCard/CategoryCard"
import RecipeCard from "../components/RecipeCard/RecipeCard"
import AISection from "../components/AISection/AISection"
import SearchBar from "../components/SearchBar/SearchBar"

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
    <div>
      <Navbar />

      <Hero />

      <section className="py-20 bg-white">
        <div className="container">

          <div className="text-center mb-12">
            <span className="text-[#4CAF50] font-semibold">
              Explore
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#263238] mt-2">
              What are you in the mood for?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <CategoryCard
              icon="🥗"
              title="Healthy"
              description="Nutritious meals for your everyday lifestyle."
            />

            <CategoryCard
              icon="🍝"
              title="Quick Meals"
              description="Delicious recipes ready in less time."
            />

            <CategoryCard
              icon="🌍"
              title="Eastern"
              description="Explore flavors from the Middle East."
            />

            <CategoryCard
              icon="🍕"
              title="Western"
              description="Discover popular Western recipes."
            />

          </div>

        </div>
      </section>

      <section className="py-20 bg-[#FFFDF7]">
        <div className="container">

          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#263238] text-center mb-7">
              Find Your Recipe
            </h2>

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