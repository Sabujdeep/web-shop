import { useState } from "react";
import "./App.css";
import AppRoute from "./routes/AppRoute";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
