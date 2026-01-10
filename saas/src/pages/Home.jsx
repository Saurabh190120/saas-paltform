import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ================= Top Bar ================= */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">
            SaaS<span className="text-blue-600">Flow</span>
          </h1>

          <nav className="flex items-center gap-6">
            <Link to="/login" className="text-sm font-medium hover:text-blue-600">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white text-sm px-5 py-2 rounded-lg"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* ================= Hero ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Manage Your Business  
              <span className="block text-blue-600">From One Dashboard</span>
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              SaaSFlow helps you track users, manage roles, and scale faster
              with a clean and secure platform.
            </p>

            <div className="flex gap-4">
              <Link
                to="/register"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
              >
                Start Free
              </Link>
              <Link
                to="/login"
                className="border border-gray-300 px-6 py-3 rounded-lg font-medium"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Right visual placeholder */}
          <div className="hidden md:block">
            <div className="h-80 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl" />
          </div>
        </div>
      </section>

      {/* ================= Feature Highlights ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Secure Authentication
              </h3>
              <p className="text-gray-600">
                Industry-standard login, protected routes, and token-based security.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Role-Based Access
              </h3>
              <p className="text-gray-600">
                Control what users can see and manage with flexible permissions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Scalable Architecture
              </h3>
              <p className="text-gray-600">
                Built to grow with your product and team.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">
            Start Building Today
          </h3>
          <p className="text-gray-600 mb-8">
            Create an account and experience a modern SaaS workflow.
          </p>
          <Link
            to="/register"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium"
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © 2026 SaaSFlow. Built with React & Tailwind.
      </footer>

    </div>
  );
}
