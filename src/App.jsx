import { useState } from "react";
import "./App.css";
import AppRoute from "./routes/AppRoute";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
