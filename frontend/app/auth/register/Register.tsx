"use client";

import React from "react";

export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-96 bg-gray-100 p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Crear Cuenta</h2>
        <input
          type="text"
          placeholder="Nombre"
          className="block w-full p-2 mb-4 border rounded"
        />
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
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
