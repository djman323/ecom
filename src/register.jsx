// src/register.jsx
import React, { useState } from "react";
import pm from "../src/assets/P.png"; // Correct path
import { useAuth } from "../src/auth-context"; // Correct path
import "../src/components/login.css";

export const Register = ({ setIsRegister }) => {
  const { register, googleLogin, user, logout } = useAuth(); // Get context functions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  // Handle form registration
  const handleRegister = async () => {
    if (email.trim() && password.trim() && displayName.trim()) {
      try {
        await register(email, password, displayName); // Use context function to register
      } catch (error) {
        console.error("Registration error: ", error.message);
      }
    } else {
      alert("Please fill in all fields");
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
              <h1>Register Page</h1>
              <label>
                Display Name:
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </label>
              <br />
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
              <button onClick={handleRegister}>Register</button>
              <br />
              <button onClick={googleLogin}>Register with Google</button>
              <br />
              <p>
                Already have an account?{" "}
                <button onClick={() => setIsRegister(false)}>Login here</button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
