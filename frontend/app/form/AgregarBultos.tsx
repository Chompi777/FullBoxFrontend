"use client";
import React, { useState } from "react";

export default function AgregarBultos() {
  const [bultos, setBultos] = useState([]);
  const [bulto, setBulto] = useState({
    largo: "",
    alto: "",
    ancho: "",
    peso: "",
    contenido: "",
  });

  const handleAddBulto = () => {
    setBultos([...bultos, bulto]);
    setBulto({ largo: "", alto: "", ancho: "", peso: "", contenido: "" });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-semibold text-center text-blue-700 mb-6">
          Agrega tus Bultos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600">Largo (cm)</label>
            <input
              type="number"
              placeholder="Ej: 50"
              value={bulto.largo}
              onChange={(e) => setBulto({ ...bulto, largo: e.target.value })}
              className="p-2 border rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600">Alto (cm)</label>
            <input
              type="number"
              placeholder="Ej: 30"
              value={bulto.alto}
              onChange={(e) => setBulto({ ...bulto, alto: e.target.value })}
              className="p-2 border rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600">Ancho (cm)</label>
            <input
              type="number"
              placeholder="Ej: 20"
              value={bulto.ancho}
              onChange={(e) => setBulto({ ...bulto, ancho: e.target.value })}
              className="p-2 border rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600">Peso (lb)</label>
            <input
              type="number"
              placeholder="Ej: 10"
              value={bulto.peso}
              onChange={(e) => setBulto({ ...bulto, peso: e.target.value })}
              className="p-2 border rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col md:col-span-4">
            <label className="text-sm font-medium text-gray-600">Contenido</label>
            <input
              type="text"
              placeholder="Ej: Ropa, Libros..."
              value={bulto.contenido}
              onChange={(e) => setBulto({ ...bulto, contenido: e.target.value })}
              className="p-2 border rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>
        </div>
        <button
          onClick={handleAddBulto}
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Agregar Bulto
        </button>
        <ul className="mt-6 space-y-4">
          {bultos.map((b, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-blue-50 p-3 rounded-lg shadow-md"
            >
              <div>
                <p className="text-sm font-medium text-gray-700">{b.contenido}</p>
                <p className="text-xs text-gray-500">{`${b.peso} lb - ${b.largo}x${b.ancho}x${b.alto} cm`}</p>
              </div>
            </li>
          ))}
        </ul>
        {bultos.length > 0 && (
          <button className="w-full bg-green-600 text-white p-3 rounded-lg font-medium mt-6 hover:bg-green-700 transition">
            Enviar Bultos
          </button>
        )}
      </div>
    </div>
  );
}
