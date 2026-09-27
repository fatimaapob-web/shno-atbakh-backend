function CategoryCard({ icon, title, description }) {
  return (
    <div className="card-hover bg-white rounded-3xl p-6 border border-[#E0E0E0] text-center">
      <div className="text-5xl mb-4">{icon}</div>

      <h3 className="text-xl font-bold text-[#263238] mb-2">
        {title}
      </h3>

      <p className="text-[#757575] text-sm leading-6">
        {description}
      </p>
    </div>
  )
}

export default CategoryCard