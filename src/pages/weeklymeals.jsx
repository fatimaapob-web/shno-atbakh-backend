import { useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import RecipeCard from "../components/RecipeCard/RecipeCard"
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
    <div>
      <Navbar />

      <main className="py-16">

        <div className="container">

          <div className="text-center mb-14">
            <span className="text-[#4CAF50] font-semibold">
              Your Plan
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#263238] mt-2 mb-4">
              Weekly Meals
            </h1>

            <p className="text-[#757575]">
              Plan delicious meals for your entire week.
            </p>
          </div>

          <div className="space-y-14">

            {days.map((day, index) => {
              const recipe = recipes[index % recipes.length]

              return (
                <section key={day}>

                  <h2 className="text-2xl font-bold text-[#263238] mb-6">
                    {day}
                  </h2>

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
