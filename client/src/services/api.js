// كل طلبات الواجهة للسيرفر من هذا الملف
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api"

async function request(path, { method = "GET", body, auth = false } = {}) {
  const headers = { "Content-Type": "application/json" }

  if (auth) {
    const token = localStorage.getItem("token")
    if (token) headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.message || `Request failed (${response.status})`)
  }

  return data
}

// ---------- Maram AI ----------
export const suggestRecipes = (ingredients, options = {}) =>
  request("/suggest", { method: "POST", body: { ingredients, ...options } })

// ---------- Explore ----------
export const getCategories = () => request("/categories")
export const getPopularRecipes = () => request("/categories/popular")
export const getRecipesByCategory = (id) => request(`/categories/${id}/recipes`)
export const searchRecipes = (q) =>
  request(`/categories/search?q=${encodeURIComponent(q)}`)

// ---------- Users ----------
export const register = (data) => request("/users/register", { method: "POST", body: data })
export const login = (data) => request("/users/login", { method: "POST", body: data })
export const getProfile = () => request("/users/profile", { auth: true })

// ---------- Favorites ----------
export const getFavorites = () => request("/favorites", { auth: true })
export const addFavorite = (recipeId) =>
  request("/favorites", { method: "POST", body: { recipeId }, auth: true })
export const removeFavorite = (recipeId) =>
  request(`/favorites/${recipeId}`, { method: "DELETE", auth: true })

// ---------- Weekly meals ----------
export const getWeeklyMeals = () => request("/weekly-meals", { auth: true })
export const addWeeklyMeal = (data) =>
  request("/weekly-meals", { method: "POST", body: data, auth: true })
export const deleteWeeklyMeal = (id) =>
  request(`/weekly-meals/${id}`, { method: "DELETE", auth: true })
