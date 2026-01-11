import { NavLink, useNavigate } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">

        {/* Logo */}
        <div className="px-6 py-5 border-b border-slate-800">
          <h1 className="text-xl font-semibold">
            Nova<span className="text-indigo-400">Suite</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1 capitalize">
            {role} panel
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 text-sm">
          <SidebarLink to="/dashboard" label="Dashboard" />

          {/* ADMIN ONLY */}
          {role === "admin" && (
            <>
              <SidebarLink to="/dashboard/users" label="Users" />
              <SidebarLink to="/dashboard/analytics" label="Analytics" />
            </>
          )}

          {/* USER ONLY */}
          {role === "user" && (
            <>
              <SidebarLink to="/dashboard/profile" label="My Profile" />
            </>
          )}

          <SidebarLink to="/dashboard/settings" label="Settings" />
        </nav>

        {/* Logout */}
        <div className="px-4 py-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full bg-slate-800 hover:bg-slate-700 py-2 rounded-lg text-sm"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

/* Sidebar Link */
function SidebarLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-4 py-2 rounded-lg ${
          isActive
            ? "bg-indigo-500 text-white"
            : "text-slate-300 hover:bg-slate-800"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
