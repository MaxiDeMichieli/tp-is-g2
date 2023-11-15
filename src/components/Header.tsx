import { Button } from "@mui/material";
import { useContext } from "../context/ContextProvider";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const { context, setContext } = useContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setContext({ logged: false, shopId: null });
    navigate("/");
  };

  return (
    <div className="flex justify-center w-full py-3 px-3 md:px-6 lg:px-16 shadow-md sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <div
          className="w-40 cursor-pointer"
          onClick={() => navigate(context?.logged ? "/mis-productos" : "/")}
        >
          <Logo />
        </div>
        <div className="flex">
          <div className="flex items-center">
            {context.logged ? (
              <>
                <Link
                  to={"/mis-productos"}
                  className="mr-5 text-sm font-medium text-[#7B4F94]"
                >
                  Mis productos
                </Link>
                <Link
                  to={"/crear-aviso"}
                  className="mr-5 text-sm font-medium text-[#7B4F94]"
                >
                  Crear aviso
                </Link>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => handleLogout()}
                >
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <>
                <Link
                  to={"/"}
                  className="mr-5 text-sm font-medium text-[#7B4F94]"
                >
                  Inicio
                </Link>
                <Link
                  to={"/atractivos"}
                  className="mr-5 text-sm font-medium text-[#7B4F94]"
                >
                  Atractivos
                </Link>
                <Link
                  to={"/asistencia"}
                  className="mr-5 text-sm font-medium text-[#7B4F94]"
                >
                  Asistencia
                </Link>
                <Link
                  to={"/comercios"}
                  className="mr-5 text-sm font-medium text-[#7B4F94]"
                >
                  Comercios
                </Link>
                <Link
                  to={"/productos"}
                  className="mr-5 text-sm font-medium text-[#7B4F94]"
                >
                  Productos
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
