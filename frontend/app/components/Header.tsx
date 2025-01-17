import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full h-20 bg-white/90 border-b border-gray-200 backdrop-blur-md flex items-center">
      {/* Logo de la empresa */}
      <div className="flex items-center ml-4">
        <img 
          src="/images/logo.png" 
          alt="Logo de la empresa" 
          className="h-12 w-auto" 
        />
      </div>

      {/* Navegación */}
      <nav className="ml-auto mr-8">
        <ul className="flex space-x-6">
          <li>
            <a 
              href="/" 
              className="text-gray-700 hover:text-gray-900 text-lg font-medium"
            >
              Inicio
            </a>
          </li>
          <li>
            <a 
              href="/form" 
              className="text-gray-700 hover:text-gray-900 text-lg font-medium"
            >
              Formulario
            </a>
          </li>
          <li>
            <a 
              href="/packages" 
              className="text-gray-700 hover:text-gray-900 text-lg font-medium"
            >
              Paquetes
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
