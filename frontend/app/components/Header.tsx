import Image from "next/image";
import icon from "../iconBoxFul.png";

const Header: React.FC = () => {
  return (
    <header className="w-full h-16 bg-white border-b border-gray-200 flex items-center pl-4">
      <Image 
        src={icon} 
        alt="Ícono de la empresa" 
        className="h-8 w-auto"
      />
    </header>
  );
};

export default Header;
