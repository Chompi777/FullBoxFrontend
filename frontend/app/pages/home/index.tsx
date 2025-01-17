import React from 'react';
import Header from '../../components/Header';  // Importa el componente Header
import Footer from '../../components/Footer';  // Importa el componente Footer
import Button from '../../components/Button';  // Importa el componente Button

const HomePage: React.FC = () => {
  const handleClick = () => {
    alert("¡Haz hecho clic en el botón!");
  };

  return (
    <div>
      <Header />
      <main>
        <h2>¡Bienvenido a la Página Principal!</h2>
        <p>Esta es una demostración de cómo organizar tu aplicación en Next.js usando componentes.</p>
        <Button label="Haz clic aquí" onClick={handleClick} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
