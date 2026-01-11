import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Users from "../pages/dashboard/Users";
import Settings from "../pages/dashboard/Settings";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/auth/Register";
import Home from "../pages/Home";
import Profile from "../pages/dashboard/Profile";
import Analytics from "../pages/dashboard/Analytics"; 
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
<Route
  path="/dashboard/profile"
  element={
    <ProtectedRoute allowedRoles={["user"]}>
      <Profile />
    </ProtectedRoute>
  }
/>
<Route
  path="/dashboard/users"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <Users />
    </ProtectedRoute>
  }
/>

<Route
  path="/dashboard/analytics"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <Analytics />
    </ProtectedRoute>
  }
/>

      <Route
        path="/dashboard/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
      
    </Routes>
  );
}
