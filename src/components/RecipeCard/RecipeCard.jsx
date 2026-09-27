function RecipeCard({ recipe, onFavorite }) {
  return (
    <article className="card-hover bg-white rounded-3xl overflow-hidden border border-[#E0E0E0] shadow-sm">

      <div className="image-zoom h-52 bg-[#E8F5E9]">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">

        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold bg-[#E8F5E9] text-[#2E7D32] px-3 py-1 rounded-full">
            {recipe.cuisine}
          </span>

          <button
            onClick={() => onFavorite?.(recipe)}
            className="text-2xl hover:scale-110 transition-transform"
            aria-label="Add to favorites"
          >
            {recipe.favorite ? "❤️" : "♡"}
          </button>
        </div>

        <h3 className="text-xl font-bold text-[#263238] mb-2">
          {recipe.name}
        </h3>

        <p className="text-sm text-[#757575] mb-4">
          {recipe.description}
        </p>

        <div className="flex items-center justify-between text-sm">
          <span>⏱️ {recipe.time} min</span>
          <span className="font-semibold text-[#4CAF50]">
            {recipe.match}% match
          </span>
        </div>

      </div>
    </article>
  )
}

export default RecipeCard