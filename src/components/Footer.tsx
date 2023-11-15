import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-3 md:px-6 lg:px-16 bg-[#7B4F94]">
      <div className="flex flex-col sm:flex-row justify-between text-white w-full max-w-7xl py-16">
        <div className="sm:w-1/3 flex justify-center">
          <div className="flex flex-col">
            <span className="font-bold py-1">Contacto</span>
            <span className="text-sm py-1">+54 9 11 5555-5555</span>
            <span className="text-sm py-1">contacto@mendoza.com</span>
            <span className="text-sm py-1">9 de Julio 500</span>
            <span className="text-sm py-1">Mendoza, Argentina</span>
          </div>
        </div>
        <div className="sm:w-1/3 flex justify-center">
          <div className="flex flex-col">
            <span className="font-bold py-1">Soporte</span>
            <Link to="/" className="text-sm py-1">
              Preguntas frecuentes
            </Link>
          </div>
        </div>
        <div className="sm:w-1/3 flex justify-center">
          <div className="flex flex-col">
            <span className="font-bold py-1">¿Sos comerciante?</span>
            <Link to="/iniciar-sesion" className="text-sm py-1">
              Ingresa a tu cuenta
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl">
        <p className="text-xs text-center text-white py-3 border-t-2 border-opacity-25 border-white">
          Copyright © 2023 Turismo Mendoza. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
