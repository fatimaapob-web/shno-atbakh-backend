import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

function Profile() {
  return (
    <div>
      <Navbar />

      <main className="py-16 min-h-[70vh]">

        <div className="container max-w-4xl">

          <div className="bg-white rounded-3xl border border-[#E0E0E0] p-8 md:p-12 shadow-sm">

            <div className="text-center mb-10">

              <div className="w-28 h-28 mx-auto rounded-full bg-[#E8F5E9] flex items-center justify-center text-6xl mb-5">
                👩🏻‍🍳
              </div>

              <h1 className="text-3xl font-bold text-[#263238]">
                Your Profile
              </h1>

              <p className="text-[#757575] mt-2">
                Manage your preferences and food choices.
              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-[#FFFDF7] rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">
                  Favorite Cuisine
                </h3>

                <p className="text-[#757575]">
                  Eastern & Western
                </p>
              </div>

              <div className="bg-[#FFFDF7] rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">
                  Dietary Preference
                </h3>

                <p className="text-[#757575]">
                  Healthy Meals
                </p>
              </div>

              <div className="bg-[#FFFDF7] rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">
                  Favorite Ingredients
                </h3>

                <p className="text-[#757575]">
                  Chicken, Rice, Vegetables
                </p>
              </div>

              <div className="bg-[#FFFDF7] rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">
                  Cooking Time
                </h3>

                <p className="text-[#757575]">
                  Under 30 minutes
                </p>
              </div>

            </div>

            <button className="mt-8 w-full bg-[#4CAF50] hover:bg-[#2E7D32] text-white py-4 rounded-2xl font-semibold transition">
              Edit Preferences
            </button>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  )
}

export default Profile