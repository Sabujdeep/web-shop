import { useState } from "react";
import "./App.css";
import AppRoute from "./routes/AppRoute";
import { HashRouter } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <HashRouter>
          <AppRoute />
        </HashRouter>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
