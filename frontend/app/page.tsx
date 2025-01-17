// pages.tsx
import React from "react";
import FormIndex from "../src/pages/form/index"; // Importar la vista de index.tsx
import Packages from "../src/pages/form/packages"; // Importar la vista de packages.tsx

const Pages = () => {
  return (
    <div>
      <h1>Vista Principal</h1>
      {/* Renderiza el formulario de index */}
      <FormIndex />
      {/* Renderiza los paquetes */}
      <Packages />
    </div>
  );
};

export default Pages;
