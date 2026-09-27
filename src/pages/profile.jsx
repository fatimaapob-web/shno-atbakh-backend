import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"

function Profile() {
  return (
    <div className="page-shell">
      <Navbar />

      <main className="py-16 min-h-[70vh]">

        <div className="container max-w-4xl">

          <div className="reveal-item profile-panel">

            <div className="text-center mb-10">

              <div className="profile-avatar">
                👩🏻‍🍳
              </div>

              <span className="section-eyebrow">YOUR KITCHEN, YOUR RULES</span>
              <h1>
                Your food story
              </h1>

              <p>
                A few things that make every meal feel like yours.
              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="reveal-item preference-card">
                <span className="preference-icon">✳</span>
                <h3>
                  Favorite Cuisine
                </h3>

                <p>
                  Eastern & Western
                </p>
              </div>

              <div className="reveal-item preference-card">
                <span className="preference-icon">♡</span>
                <h3>
                  Dietary Preference
                </h3>

                <p>
                  Healthy Meals
                </p>
              </div>

              <div className="reveal-item preference-card">
                <span className="preference-icon">☘</span>
                <h3>
                  Favorite Ingredients
                </h3>

                <p>
                  Chicken, Rice, Vegetables
                </p>
              </div>

              <div className="reveal-item preference-card">
                <span className="preference-icon">◷</span>
                <h3>
                  Cooking Time
                </h3>

                <p>
                  Under 30 minutes
                </p>
              </div>

            </div>

            <button className="button button-olive profile-edit">
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