const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api"

export async function getRecipes() {
  const response = await fetch(`${API_BASE_URL}/recipes`)

  if (!response.ok) {
    throw new Error("Failed to fetch recipes")
  }

  return response.json()
}

export async function getWeeklyMeals() {
  const response = await fetch(`${API_BASE_URL}/weekly-meals`)

  if (!response.ok) {
    throw new Error("Failed to fetch weekly meals")
  }

  return response.json()
}

export async function searchRecipes(ingredients) {
  const response = await fetch(`${API_BASE_URL}/recipes/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients,
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to search recipes")
  }

  return response.json()
}

export async function getFavorites() {
  const response = await fetch(`${API_BASE_URL}/favorites`)

  if (!response.ok) {
    throw new Error("Failed to fetch favorites")
  }

  return response.json()
}

export async function addFavorite(recipeId) {
  const response = await fetch(`${API_BASE_URL}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      recipeId,
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to add favorite")
  }

  return response.json()
}

export async function removeFavorite(recipeId) {
  const response = await fetch(`${API_BASE_URL}/favorites/${recipeId}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("Failed to remove favorite")
  }

  return response.json()
}