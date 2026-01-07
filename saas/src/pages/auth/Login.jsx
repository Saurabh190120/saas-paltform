import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, role: "user" });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="bg-white p-6 shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-xl mb-4">Login</h2>
        <input
          className="border w-full p-2 mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-blue-600 text-white w-full p-2">
          Login
        </button>
      </form>
    </div>
  );
}
