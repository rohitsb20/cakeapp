import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";

import StoreContextProvider from "./context/storeContext.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <StoreContextProvider>
        <Navbar />
        <App />
        <Footer />
      </StoreContextProvider>
    </Router>
    <Toaster />
  </StrictMode>
);
