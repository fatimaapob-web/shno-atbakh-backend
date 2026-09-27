function AISection() {
  return (
    <section className="py-20 bg-[#E8F5E9]">
      <div className="container">

        <div className="max-w-4xl mx-auto text-center">

          <div className="ai-glow inline-flex items-center justify-center w-20 h-20 bg-white rounded-full text-4xl shadow-md mb-6">
            🤖
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#263238] mb-5">
            Let AI Cook With What You Have
          </h2>

          <p className="text-[#757575] text-lg leading-8 max-w-2xl mx-auto mb-8">
            Add the ingredients available in your fridge and our AI
            will suggest recipes that match them.
          </p>

          <button className="bg-[#FF7043] hover:opacity-90 text-white px-8 py-4 rounded-2xl font-semibold transition hover:scale-105">
            Try AI Recipe Finder
          </button>

        </div>

      </div>
    </section>
  )
}

export default AISection