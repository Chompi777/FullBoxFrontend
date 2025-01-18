"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CrearOrden() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    direccionRecoleccion: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    email: "",
    direccionDestinatario: "",
    departamento: "",
    municipio: "",
    referencia: "",
    indicaciones: "",
    fechaProgramada: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    navigate("/agregar-bultos");
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Crea una orden</h1>
          <p className="text-gray-600">
            Dale una ventaja competitiva a tu negocio con entregas{" "}
            <strong>el mismo día</strong> (Área Metropolitana) y{" "}
            <strong>el día siguiente</strong> a nivel nacional.
          </p>
        </div>
        <form className="space-y-6">
          {/* Dirección de recolección */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dirección de recolección
            </label>
            <input
              type="text"
              name="direccionRecoleccion"
              value={formData.direccionRecoleccion}
              onChange={handleChange}
              className="input-styled"
              placeholder="Ej. Colonia Las Magnolias..."
            />
          </div>

          {/* Fecha programada */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha Programada
            </label>
            <input
              type="date"
              name="fechaProgramada"
              value={formData.fechaProgramada}
              onChange={handleChange}
              className="input-styled"
            />
          </div>

          {/* Nombres y Apellidos */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombres
              </label>
              <input
                type="text"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
                className="input-styled"
                placeholder="Gabriela"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Apellidos
              </label>
              <input
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                className="input-styled"
                placeholder="Díaz López"
              />
            </div>
          </div>

          {/* Teléfono y Email */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="input-styled"
                placeholder="+503 6962 8383"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-styled"
                placeholder="example@email.com"
              />
            </div>
          </div>

          {/* Dirección del destinatario */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dirección del destinatario
            </label>
            <input
              type="text"
              name="direccionDestinatario"
              value={formData.direccionDestinatario}
              onChange={handleChange}
              className="input-styled"
              placeholder="Ej. Final 49 Av. Sur y Bulevar Los Próceres..."
            />
          </div>

          {/* Departamento y Municipio */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Departamento
              </label>
              <input
                type="text"
                name="departamento"
                value={formData.departamento}
                onChange={handleChange}
                className="input-styled"
                placeholder="San Salvador"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Municipio
              </label>
              <input
                type="text"
                name="municipio"
                value={formData.municipio}
                onChange={handleChange}
                className="input-styled"
                placeholder="San Salvador"
              />
            </div>
          </div>

          {/* Punto de referencia */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Punto de Referencia
            </label>
            <input
              type="text"
              name="referencia"
              value={formData.referencia}
              onChange={handleChange}
              className="input-styled"
              placeholder="Ej. Cerca del redondel Árbol de la Paz"
            />
          </div>

          {/* Indicaciones */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Indicaciones
            </label>
            <textarea
              name="indicaciones"
              value={formData.indicaciones}
              onChange={handleChange}
              className="input-styled"
              placeholder="Ej. Llamar antes de entregar."
              rows={3}
            ></textarea>
          </div>

          {/* Botón */}
          <button
            type="button"
            onClick={handleNext}
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Siguiente
          </button>
        </form>
      </div>
    </div>
  );
}
