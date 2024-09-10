import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./components/cart/cart";
import { Shop } from "./components/shop/shop";
import { ShopContextProvider } from "./components/shop/shop-context";
import { Login } from "./components/login";
import { Register } from "./register"; // Import Register component
import { AuthProvider } from "./auth-context"; // Import AuthProvider

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* Add route for Register page */}
            </Routes>
          </Router>
        </ShopContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
