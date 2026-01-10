import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP: frontend-only register simulation
    // Later this will be replaced by backend API call
    console.log("Registered user:", formData);

    // After successful registration → go to login
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow w-80 rounded"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          Create Account
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border p-2 w-full mb-3"
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          required
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          required
          onChange={handleChange}
        />

        <button className="bg-blue-600 text-white w-full p-2 rounded">
          Register
        </button>

        <p className="text-sm text-center mt-3">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
