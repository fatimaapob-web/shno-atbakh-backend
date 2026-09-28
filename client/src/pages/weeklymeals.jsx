import { useState } from "react"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import RecipeCard from "../components/RecipeCard/RecipeCard.jsx"
import mockRecipes from "../data/mockRecipes"

function WeeklyMeals() {
  const [recipes, setRecipes] = useState(mockRecipes)

  const toggleFavorite = (recipe) => {
    setRecipes((current) =>
      current.map((item) =>
        item.id === recipe.id
          ? { ...item, favorite: !item.favorite }
          : item
      )
    )
  }

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]

  return (
    <div className="page-shell">
      <Navbar />

      <main className="py-16">

        <div className="container">

          <div className="page-heading">
            <span className="section-eyebrow">A LITTLE PLAN, A LOT LESS “WHAT’S FOR DINNER?”</span>
            <h1>Your week, <em>well fed.</em></h1>
            <p>Seven comforting ideas to make the everyday table feel special.</p>
          </div>

          <div className="space-y-14">

            {days.map((day, index) => {
              const recipe = recipes[index % recipes.length]

              return (
                <section className="reveal-item meal-day" key={day}>
                  <div className="meal-day-heading">
                    <span className="meal-day-number">{String(index + 1).padStart(2, "0")}</span>
                    <h2>{day}</h2>
                    <span className="meal-day-label">{index === 0 ? "LET’S START THE WEEK" : "ON THE MENU"}</span>
                  </div>

                  <div className="max-w-sm">
                    <RecipeCard
                      recipe={recipe}
                      onFavorite={toggleFavorite}
                    />
                  </div>

                </section>
              )
            })}

          </div>

        </div>

      </main>

      <Footer />
    </div>
  )
}

export default WeeklyMeals
