import { Link } from "react-router";
export default function Career() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section */}
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
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              About
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
          <p> Add stuff here</p>
        </div>
      </section>
    </div>
  );
}
