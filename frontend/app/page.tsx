// app/page.tsx
"use client";

import CrearOrden from './form/CrearOrden';
import AgregarBultos from './form/AgregarBultos';

export default function Page() {
  return (
    <div>
      <CrearOrden />
      <AgregarBultos />
    </div>
  );
}
