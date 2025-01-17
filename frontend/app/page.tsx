"use client"; // Marca este archivo como un componente del cliente

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrearOrden from "./form/CrearOrden";
import AgregarBultos from "./form/AgregarBultos";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<CrearOrden />} />
          <Route path="/agregar-bultos" element={<AgregarBultos />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
