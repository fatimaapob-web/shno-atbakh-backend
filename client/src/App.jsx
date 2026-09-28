import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import WeeklyMeals from "./pages/weeklymeals"
import Favorites from "./pages/favorites"
import Explore from "./pages/Explore"
import Profile from "./pages/profile"
import AIResults from "./pages/AIResults/AIResults"
import usePageAnimations from "./animations/usePageAnimations"

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

function AnimatedRoutes() {
  usePageAnimations()

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekly" element={<WeeklyMeals />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ai-results" element={<AIResults />} />
      </Routes>
  )
}

export default App
