import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Bienvenido a mi página</h1>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/form">Formulario</a></li>
          <li><a href="/packages">Paquetes</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
