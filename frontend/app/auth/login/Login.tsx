"use client"; // Marca este archivo como un componente del cliente

import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-96 bg-gray-100 p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="block w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="block w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
