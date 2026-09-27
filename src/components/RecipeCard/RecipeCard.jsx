function RecipeCard({ recipe, onFavorite }) {
  return (
    <article className="recipe-card card-hover">
      <div className="recipe-image image-zoom">
        <img
          src={recipe.image}
          alt={recipe.name}
          loading="lazy"
        />
        <span className="recipe-cuisine">{recipe.cuisine}</span>
        <button
          type="button"
          onClick={() => onFavorite?.(recipe)}
          className="recipe-favorite"
          aria-label={recipe.favorite ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={Boolean(recipe.favorite)}
        >
          {recipe.favorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="recipe-body">
        <div className="recipe-title-row">
          <h3>{recipe.name}</h3>
          <span className="recipe-rating">★ 4.9</span>
        </div>
        <p className="recipe-description">{recipe.description}</p>
        <div className="recipe-meta">
          <span><span aria-hidden="true">◷</span> {recipe.time} min</span>
          <span className="recipe-match">{recipe.match}% ingredient match</span>
        </div>
        <div className="recipe-card-bottom">
          <span className="recipe-callout">A good one to cook tonight</span>
          <span className="recipe-arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </article>
  )
}

export default RecipeCard