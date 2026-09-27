import { useState } from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: "Home", path: "/" },
    { name: "Weekly Meals", path: "/weekly" },
    { name: "Explore", path: "/explore" },
    { name: "Favorites", path: "/favorites" },
    { name: "Profile", path: "/profile" },
  ]

  return (
    <nav className="bg-white border-b border-[#E0E0E0] sticky top-0 z-50">
      <div className="container h-20 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-[#2E7D32]">
          🍃 FoodAI
        </NavLink>

        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                font-medium transition ${
                  isActive
                    ? "text-[#4CAF50]"
                    : "text-[#263238] hover:text-[#4CAF50]"
                }
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E0E0E0] px-6 py-4">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-[#263238]"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar