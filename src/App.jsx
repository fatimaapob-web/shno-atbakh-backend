import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import WeeklyMeals from "./pages/weeklymeals"
import Favorites from "./pages/favorites"
import Explore from "./pages/Explore"
import Profile from "./pages/profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekly" element={<WeeklyMeals />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
import AIResults from "./pages/AIResults"
<Route
  path="/ai-results"
  element={<AIResults />}
/>