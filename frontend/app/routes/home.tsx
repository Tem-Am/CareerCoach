import { useNavigate } from "react-router";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo / Title */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-90 transition">
              CareerCouch
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              About
            </Link>
            <Link
              to="/career"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Career
            </Link>
            <Link
              to="/signin"
              className="px-4 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium transition"
            >
              Sign In
            </Link>
          </nav>

          {/* Mobile Menu (optional placeholder) */}
          <div className="md:hidden">
            {/* later you can add a mobile menu button (hamburger) here */}
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <p className="mb-3 bg-blue-100 text-blue-700 hover:bg-blue-200">
              ✨ AI-Powered Career Discovery
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Discover Your Perfect Career Path
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Unlock your potential with AI-powered assessments, personalized
              recommendations, and expert guidance. Join thousands of students
              and graduates who found their dream careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to={"/"}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-full"
              >
                Start Career Assessment
              </Link>
              <Link
                to={"/"}
                className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 px-8 py-6 rounded-full shadow-sm transition-colors duration-200"
              >
                Chat with AI Career Coach
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-gray-600">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-gray-600">Career Paths</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-gray-600">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Helper Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How We Help You Succeed</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform combines cutting-edge AI with expert
              career guidance
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:-translate-y-1">
              <div className="text-center pb-2 pt-3">
                <p className="text-lg mb-2">AI-Power Assesment</p>
              </div>
            </div>
            <div className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:-translate-y-1">
              <div className="text-center pb-2 pt-3">
                <p className="text-lg mb-2">Smart Career ChatBot</p>
              </div>
            </div>
            <div className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:-translate-y-1">
              <div className="text-center pb-2 pt-3">
                <p className="text-lg mb-2">Resources</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold">CareerCompass</span>
              </div>
              <p className="text-gray-400">
                Empowering the next generation to find meaningful careers
                through AI-powered guidance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Career Assessment</li>
                <li>AI Chatbot</li>
                <li>Job Matching</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Career Guides</li>
                <li>Industry Insights</li>
                <li>Salary Data</li>
                <li>Success Stories</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CareerCompass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
