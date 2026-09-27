import heroImage from "../../assets/hero.png"

function Hero() {
  return (
    <section className="min-h-[650px] bg-[#FFFDF7] flex items-center overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">

        {/* النص */}
        <div className="slide-left">
          <span className="inline-block bg-[#E8F5E9] text-[#2E7D32] px-5 py-2 rounded-full text-sm font-semibold mb-6">
            ✨ AI-Powered Recipes
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-[#263238] leading-tight mb-6">
            What's in your fridge?
            <br />
            <span className="text-[#4CAF50]">
              Let's make something delicious!
            </span>
          </h1>

          <p className="text-lg text-[#757575] leading-8 max-w-xl mb-8">
            Tell us what ingredients you have in your fridge,
            and let our AI find delicious meals you can make.
          </p>

          <button
            className="
              bg-[#4CAF50]
              hover:bg-[#2E7D32]
              text-white
              px-8
              py-4
              rounded-2xl
              font-semibold
              text-lg
              transition-all
              duration-300
              hover:scale-105
              shadow-lg
            "
          >
            Find My Recipe →
          </button>
        </div>

        {/* الصورة */}
        <div className="slide-right flex justify-center">
          <div className="float w-full max-w-lg">
            <img
              src={heroImage}
              alt="Healthy food recipes"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero