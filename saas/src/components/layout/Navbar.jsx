import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between">
      <span>SaaS App</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
