// app/form/page.tsx
'use client'; // Esto marca el archivo como un Client Component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const FormIndex = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    direccionRecoleccion: "",
    direccionDestino: "",
    departamento: "",
    municipio: "",
    referencia: "",
    indicaciones: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes navegar a la siguiente página
    router.push("/form/packages"); // Cambia esto a tu ruta deseada
  };

  return (
    <div className="container">
      <h1>Crea una orden</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombres:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </label>
        {/* Agregar más campos del formulario aquí */}
        <button type="submit">Siguiente</button>
      </form>
    </div>
  );
};

export default FormIndex;
