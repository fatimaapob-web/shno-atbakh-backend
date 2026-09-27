function CategoryCard({ icon, title, description }) {
  return (
    <div className="reveal-item category-card card-hover">
      <span className="category-icon">{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <span className="category-arrow" aria-hidden="true">↗</span>
    </div>
  )
}

export default CategoryCard