import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Attractions from "./pages/Attractions";
import Attraction from "./pages/Attraction";
import Assistance from "./pages/Assistance";
import Shops from "./pages/Shops";
import Products from "./pages/Products";
import Product from "./pages/Product";
import CreateProduct from "./pages/CreateProduct";

function Router() {
  return (
    <BrowserRouter basename="/tp-is-g2/">
      <Routes>
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/atractivos" element={<Attractions />} />
        <Route path="/atractivos/:attractionId" element={<Attraction />} />
        <Route path="/asistencia" element={<Assistance />} />
        <Route path="/comercios" element={<Shops />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/productos/:productId" element={<Product />} />
        <Route path="/comercios/:shopId" element={<Products />} />
        <Route path="/mis-productos" element={<Products />} />
        <Route path="/crear-aviso" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
