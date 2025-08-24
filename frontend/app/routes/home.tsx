import type { Route } from "./+types/home";
import { Link } from "react-router";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ">
                CareerCouch
              </h1>
            </div>
            <div className="flex items-center space-x-12">

            </div>
          </div>
        </div>
      </div>
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
                to={"/signin"}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-full"
              >
                Start Career Assessment
              </Link>
              <Link
                to={"/about"}
                className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 px-8 py-6 rounded-full shadow-sm transition-colors duration-200"
              >
                Chat with AI Career Coach
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
