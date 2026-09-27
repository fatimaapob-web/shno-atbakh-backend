import { useState } from "react"

import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import RecipeCard from "../components/RecipeCard/RecipeCard.jsx"
import SearchBar from "../components/searchBar/searchBar.jsx"
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
    <div className="page-shell">
      <Navbar />

      <main className="py-16">

        <div className="container">

          <div className="reveal-item page-heading">
            <span className="section-eyebrow">A TABLE FULL OF IDEAS</span>
            <h1>Find your next <em>favorite.</em></h1>
            <p>From quick bites to slow Sunday suppers, there’s something delicious waiting.</p>
          </div>

          <div className="reveal-item max-w-3xl mx-auto mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="reveal-item flex flex-wrap justify-center gap-3 mb-12">

            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => filterRecipes(filter)}
                className={`filter-pill ${activeFilter === filter ? "selected" : ""}`}
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