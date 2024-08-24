// src/App.js
import React, { useState } from "react";
import pm from "C:/Users/Shilpesh Jani/Extra projects Devansh/ecom/src/assets/P.png";
import "./login.css";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // For simplicity, let's assume any non-empty username and password is valid
    if (username.trim() !== "" && password.trim() !== "") {
      setLoggedIn(true);
    } else {
      alert("Please enter a valid username and password");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="container-fluid co1">
      <div className="card c1">
        <div className="navImg">
          <img src={pm} alt="Avatar" class="avatar" />
        </div>
        <div className="log">
          {isLoggedIn ? (
            <div>
              <h1>Welcome To PocketMart, {username}!</h1>
              <h3>You are logged in</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div>
              <h1>Login Page</h1>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
