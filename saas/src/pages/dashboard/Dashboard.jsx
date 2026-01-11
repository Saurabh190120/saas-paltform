import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">

      {/* ================= Sidebar ================= */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
        
        {/* Logo */}
        <div className="px-6 py-5 border-b border-slate-800">
          <h1 className="text-xl font-semibold">
            Nova<span className="text-indigo-400">Suite</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 text-sm">
          <NavItem label="Dashboard" />
          <NavItem label="Users" />
          <NavItem label="Analytics" />
          <NavItem label="Settings" />
        </nav>

        {/* Logout */}
        <div className="px-4 py-4 border-t border-slate-800">
          <button className="w-full bg-slate-800 hover:bg-slate-700 py-2 rounded-lg text-sm">
            Logout
          </button>
        </div>
      </aside>

      {/* ================= Main Content ================= */}
      <main className="flex-1 p-8">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <span className="text-slate-400 text-sm">
            Welcome back 👋
          </span>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <StatCard title="Total Users" value="1,245" />
          <StatCard title="Active Sessions" value="312" />
          <StatCard title="System Status" value="Healthy" />
        </div>

        {/* Content Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">
            Recent Activity
          </h3>
          <p className="text-slate-400 text-sm">
            Dashboard content will appear here.
          </p>
        </div>

      </main>
    </div>
  );
}

/* ================= Reusable Components ================= */

function NavItem({ label }) {
  return (
    <div className="px-4 py-2 rounded-lg hover:bg-slate-800 cursor-pointer">
      {label}
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <p className="text-slate-400 text-sm mb-2">{title}</p>
      <h3 className="text-2xl font-bold text-indigo-400">{value}</h3>
    </div>
  );
}
