"use client"; // Marca este archivo como un componente del cliente

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrearOrden from "./form/CrearOrden";
import AgregarBultos from "./form/AgregarBultos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./auth/login/Login"; // Asegúrate de usar la ruta correcta
import Register from "./auth/register/Register"; // Asegúrate de usar la ruta correcta

export default function Page() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<CrearOrden />} />
          <Route path="/agregar-bultos" element={<AgregarBultos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
