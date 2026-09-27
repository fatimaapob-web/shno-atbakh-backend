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
    <nav className="site-nav sticky top-0 z-50">
      <div className="container nav-inner">
        <NavLink to="/" className="brand-mark">
          <span className="brand-icon" aria-hidden="true">✳</span>
          <span>good<span className="brand-highlight">food</span><small>RECIPES FOR REAL LIFE</small></span>
        </NavLink>

        <div className="desktop-nav">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""} ${
                  isActive
                    ? "is-current"
                    : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-nav">
          <div className="container mobile-nav-links">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-link"
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