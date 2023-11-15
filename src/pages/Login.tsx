import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "../context/ContextProvider";
import Logo from "../components/Logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { context, setContext } = useContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (context.logged) navigate("/mis-productos");
  }, [context.logged]);

  const handleLogin = () => {
    setContext({ logged: true, shopId: 1 });
  };

  return (
    <div className="flex h-[100vh] justify-center items-center p-0 m-0">
      <div className="flex flex-col w-full md:w-1/2 p-4 justify-center items-center h-full">
        <div
          className="w-72 mb-10 md:hidden md:mb-0 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Logo />
        </div>
        <form
          className="flex max-w-sm flex-col w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField
            label="Correo"
            variant="filled"
            type="email"
            fullWidth
            margin="dense"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Contraseña"
            variant="filled"
            type="password"
            fullWidth
            margin="dense"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-around mt-6">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleLogin}
            >
              Iniciar sesión
            </Button>
          </div>
        </form>
      </div>
      <div className="hidden md:flex w-1/2 h-full justify-center items-center bg-gray-300">
        <div
          className="w-2/3 max-w-md cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Login;
