//https://www.youtube.com/watch?v=tEMrD9t85v4 video link
import "./App.css";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./components/cart/cart";
import { Shop } from "./components/shop/shop";
import { ShopContextProvider } from "./components/shop/shop-context";
import { Login } from "./components/login";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
