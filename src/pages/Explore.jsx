import { useState } from "react"

import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import RecipeCard from "../components/RecipeCard/RecipeCard"
import SearchBar from "../components/SearchBar/SearchBar"
import mockRecipes from "../data/mockRecipes"

function Explore() {
  const [recipes, setRecipes] = useState(mockRecipes)
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Eastern", "Western", "Healthy"]

  const filterRecipes = (filter) => {
    setActiveFilter(filter)

    if (filter === "All") {
      setRecipes(mockRecipes)
      return
    }

    if (filter === "Healthy") {
      setRecipes(
        mockRecipes.filter((recipe) => recipe.healthScore >= 90)
      )
      return
    }

    setRecipes(
      mockRecipes.filter((recipe) => recipe.cuisine === filter)
    )
  }

  const handleSearch = (value) => {
    const source =
      activeFilter === "All"
        ? mockRecipes
        : activeFilter === "Healthy"
          ? mockRecipes.filter((recipe) => recipe.healthScore >= 90)
          : mockRecipes.filter((recipe) => recipe.cuisine === activeFilter)

    if (!value.trim()) {
      setRecipes(source)
      return
    }

    setRecipes(
      source.filter((recipe) =>
        recipe.name.toLowerCase().includes(value.toLowerCase())
      )
    )
  }

  return (
    <div>
      <Navbar />

      <main className="py-16">

        <div className="container">

          <div className="text-center mb-10">
            <span className="text-[#4CAF50] font-semibold">
              Discover
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#263238] mt-2 mb-4">
              Explore Recipes
            </h1>

            <p className="text-[#757575]">
              Discover recipes from different cuisines and lifestyles.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">

            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => filterRecipes(filter)}
                className={px-5 py-3 rounded-full font-semibold transition ${
                  activeFilter === filter
                    ? "bg-[#4CAF50] text-white"
                    : "bg-white border border-[#E0E0E0] text-[#263238]"
                }}
              >
                {filter}
              </button>
            ))}

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
              />
            ))}

          </div>

        </div>

      </main>

      <Footer />
    </div>
  )
}

export default Explore