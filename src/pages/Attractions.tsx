import { useNavigate } from "react-router-dom";
import ImageCard from "../components/ImageCard";
import Layout from "../components/Layout";
import { useContext } from "../context/ContextProvider";

const Attractions = () => {
  const { context } = useContext();
  const navigate = useNavigate();

  return (
    <Layout
      banner={
        <div className="absolute top-0 left-0 w-full bg-[#7B4F94] h-24" />
      }
    >
      <h1 className="w-full h-24 text-white flex items-center font-medium text-3xl">
        Sitios de interés y atractivos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-20">
        {context.attractions.map((attraction) => (
          <ImageCard
            key={attraction.id}
            image={attraction.image}
            title={attraction.name}
            onClick={() => navigate(`/atractivos/${attraction.id}`)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Attractions;
