import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState(true);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log(email, username, password);

  const handleSubmit = async () => {
    console.log("button clicked");
    if (!signIn) {
      const response = await axios.post("http://localhost:3000/signup", {
        email: email,
        password: password,
        username: username,
      });

      console.log(response);

      if (response.status === 200) {
        navigate("/home");
      }
    } else {
      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });
      console.log(response);
      if (response.status == 200) {
        navigate("/home");
      }
      console.log(response.error);

      // navigate("/login");
      setError(response.error);
    }
  };

  const handleToggle = () => {
    setSignIn(!signIn);
    console.log("toggle button clicked");
  };

  return (
    <div className="w-[300px] mx-auto mt-24 p-6 rounded-xl border bg-blue-100 shadow-md">
      <h2 className="text-center text-xl font-semibold mb-4">
        User {signIn ? "Login" : "Signup"}
      </h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium">
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-full mt-1 border focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {!signIn && (
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-full mt-1 border focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium">
          Password:
        </label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          password={password}
          placeholder="Enter your password"
          className="w-full px-4 py-2 rounded-full mt-1 border focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <p className="text-red-500">{error}</p>

      <p className="text-sm text-center mb-4">
        New user?{" "}
        <span
          onClick={handleToggle}
          className="text-blue-600 underline cursor-pointer"
        >
          {signIn ? "Signup" : "Login"}
        </span>
      </p>

      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-all"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
