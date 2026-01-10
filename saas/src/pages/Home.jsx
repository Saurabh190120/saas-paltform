import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-gray-800">
          SaaS App
        </h1>

        <div className="space-x-4">
          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Register
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 items-center justify-center text-center px-6">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Build & Manage Your SaaS Effortlessly
          </h2>

          <p className="text-gray-600 mb-6">
            A modern full-stack SaaS platform with authentication,
            dashboards, and role-based access.
          </p>

          <div className="space-x-4">
            <Link
              to="/register"
              className="bg-blue-600 text-white px-6 py-3 rounded"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="border border-gray-300 px-6 py-3 rounded"
            >
              Login
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 text-sm">
        © 2026 SaaS App. All rights reserved.
      </footer>

    </div>
  );
}
