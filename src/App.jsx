import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
