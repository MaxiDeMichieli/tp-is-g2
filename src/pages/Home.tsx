import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import ImageCard from "../components/ImageCard";

const options = [
  {
    image: "./atractivos.jpg",
    route: "/atractivos",
    name: "Sitios de interés y atractivos",
  },
  {
    image: "./asistencia.jpg",
    route: "/asistencia",
    name: "Centros de asistencia",
  },
  {
    image: "./comercios.jpg",
    route: "/comercios",
    name: "Comercios",
  },
  {
    image: "./productos.jpg",
    route: "/productos",
    name: "Productos",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout
      banner={
        <>
          <img
            src="./banner.jpg"
            alt="banner"
            className="w-full hidden sm:block"
          />
          <img
            src="./banner-mobile.jpg"
            alt="banner"
            className="w-full sm:hidden"
          />
        </>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-20">
        {options.map((option) => (
          <ImageCard
            key={option.route}
            image={option.image}
            title={option.name}
            onClick={() => navigate(option.route)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
