import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* ================= NAVBAR ================= */}
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-wide">
            Nova<span className="text-indigo-400">Suite</span>
          </h1>

          <nav className="flex items-center gap-6 text-sm">
            <Link to="/login" className="text-slate-300 hover:text-white">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg"
            >
              Start Free
            </Link>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-36 text-center">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            One Platform.
            <span className="block text-indigo-400">
              Total Control.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-300 text-lg mb-10">
            NovaSuite helps teams manage users, roles, and insights
            through a secure and scalable SaaS dashboard.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/register"
              className="bg-indigo-500 hover:bg-indigo-600 px-8 py-4 rounded-xl font-medium"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="border border-slate-700 px-8 py-4 rounded-xl font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-bold text-indigo-400">99.9%</h3>
            <p className="text-slate-400 mt-2">Uptime Reliability</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-400">10x</h3>
            <p className="text-slate-400 mt-2">Faster Workflows</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-400">Secure</h3>
            <p className="text-slate-400 mt-2">JWT Auth & RBAC</p>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16">
            Built for Modern Teams
          </h3>

          <div className="grid md:grid-cols-3 gap-12">
            <Feature
              title="Authentication & Security"
              desc="Secure login, protected routes, and token-based authorization."
            />
            <Feature
              title="Role-Based Dashboards"
              desc="Different experiences for admins and users."
            />
            <Feature
              title="Scalable Architecture"
              desc="Designed for growth, performance, and maintainability."
            />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 text-center">
        <h3 className="text-4xl font-bold mb-6">
          Start Your SaaS Journey Today
        </h3>
        <p className="text-slate-400 mb-10">
          No credit card required. Set up in minutes.
        </p>
        <Link
          to="/register"
          className="bg-indigo-500 hover:bg-indigo-600 px-10 py-4 rounded-xl font-semibold"
        >
          Create Free Account
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © 2026 NovaSuite. Crafted with React & Tailwind.
      </footer>
    </div>
  );
}

/* ===== Local Feature Component ===== */
function Feature({ title, desc }) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-slate-400">{desc}</p>
    </div>
  );
}
