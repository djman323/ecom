// src/login.jsx
import React, { useState } from "react";
import { useAuth } from "../auth-context"; // Correct path
import { useNavigate } from "react-router-dom"; // Import useNavigate
import pm from "../assets/P.png"; // Correct path
import "../components/login.css";

export const Login = () => {
  const { login, googleLogin, user, logout } = useAuth(); // Get context functions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form login
  const handleLogin = async () => {
    if (email.trim() && password.trim()) {
      try {
        await login(email, password); // Use context function to login
      } catch (error) {
        console.error("Login error: ", error.message);
      }
    } else {
      alert("Please enter a valid email and password");
    }
  };

  return (
    <div className="container-fluid co1">
      <div className="card c1">
        <div className="navImg">
          <img src={pm} alt="Avatar" className="avatar" />
        </div>
        <div className="log">
          {user ? (
            <div>
              <h1>Welcome To PocketMart, {user.displayName || "User"}!</h1>
              <h3>You are logged in</h3>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <div>
              <h1>Login Page</h1>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <button onClick={handleLogin}>Login</button>
              <br />
              <button onClick={googleLogin}>Login with Google</button>
              <br />
              <p>
                Don't have an account?{" "}
                <button onClick={() => navigate("/register")}>
                  Register here
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
