
"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CrearOrden() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    direccion: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    email: "",
    destinatario: "",
    departamento: "",
    municipio: "",
    referencia: "",
    indicaciones: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    navigate("/agregar-bultos");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Crea una orden</h1>
          <p className="text-lg text-gray-600">
            Dale una ventaja competitiva a tu negocio con entregas <strong>el mismo día</strong> (Área Metropolitana) y <strong>el día siguiente</strong> a nivel nacional.
          </p>
        </div>
        <form className="space-y-4">
          {/* Formulario */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Dirección de recolección</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Ej. Colonia Las Magnolias..."
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombres</label>
              <input
                type="text"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Apellidos</label>
              <input
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="+503 6962 8383"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          {/* Botón Siguiente */}
          <button
            type="button"
            onClick={handleNext}
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            Siguiente
          </button>
        </form>
      </div>
    </div>
  );
}
