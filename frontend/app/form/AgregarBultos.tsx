// app/form/AgregarBultos.tsx
"use client";

import { useState } from "react";

export default function AgregarBultos() {
  const [bultos, setBultos] = useState([]);
  const [bulto, setBulto] = useState({ largo: "", alto: "", ancho: "", peso: "", contenido: "" });

  const handleAddBulto = () => {
    setBultos([...bultos, bulto]);
    setBulto({ largo: "", alto: "", ancho: "", peso: "", contenido: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Agrega tus bultos</h1>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <input
            type="number"
            placeholder="Largo (cm)"
            value={bulto.largo}
            onChange={(e) => setBulto({ ...bulto, largo: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="number"
            placeholder="Alto (cm)"
            value={bulto.alto}
            onChange={(e) => setBulto({ ...bulto, alto: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="number"
            placeholder="Ancho (cm)"
            value={bulto.ancho}
            onChange={(e) => setBulto({ ...bulto, ancho: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="number"
            placeholder="Peso (lb)"
            value={bulto.peso}
            onChange={(e) => setBulto({ ...bulto, peso: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Contenido"
            value={bulto.contenido}
            onChange={(e) => setBulto({ ...bulto, contenido: e.target.value })}
            className="col-span-4 p-2 border rounded-lg"
          />
        </div>
        <button
          onClick={handleAddBulto}
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Agregar
        </button>
        <ul className="mt-4 space-y-2">
          {bultos.map((b, index) => (
            <li
              key={index}
              className="flex justify-between bg-gray-100 p-2 rounded-lg shadow-sm"
            >
              <span>{`${b.peso} lb - ${b.contenido}`}</span>
              <span>{`${b.largo}x${b.ancho}x${b.alto} cm`}</span>
            </li>
          ))}
        </ul>
        <button className="w-full bg-green-600 text-white p-2 rounded-lg mt-4 hover:bg-green-700">
          Enviar
        </button>
      </div>
    </div>
  );
}
