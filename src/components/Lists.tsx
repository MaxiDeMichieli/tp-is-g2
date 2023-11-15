import { useNavigate } from "react-router-dom";
import { useContext } from "../context/ContextProvider";
import Layout from "../components/Layout";

const Lists = () => {
  const { context, setContext } = useContext();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[].map((destination) => (
          <div
            className="relative bg-white p-4 shadow-md rounded-md overflow-hidden min-h-[220px] destination-hover cursor-pointer"
            onClick={() => navigate("/destination/" + destination.id)}
          >
            <div
              className="absolute top-0 left-0 bg-cover bg-center w-full h-full transition-transform transform scale-105 duration-300 destination-image"
              style={{ backgroundImage: `url(${destination.image})` }}
            ></div>
            <div className="w-full h-full flex z-10 relative flex-col justify-end">
              <span className="font-extrabold text-white text-xl">
                {destination.to} ${destination.price}
              </span>
              <span className="font-medium text-white text-sm">
                Desde {destination.from}
              </span>
              <span className="font-light text-white text-sm">
                {destination.date}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-gray-900" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[].map((excursion) => (
          <div className="relative bg-white shadow-md rounded-md overflow-hidden min-h-[190px] hover:shadow-lg transition-shadow flex flex-col cursor-pointer">
            <div
              className="bg-cover bg-center w-full h-24"
              style={{ backgroundImage: `url(${excursion.image})` }}
            ></div>
            <div className="p-4 flex z-10 relative flex-col justify-between flex-grow">
              <span className="font-bold text-gray-800 text-lg">
                {excursion.name}
              </span>
              <span className="font-semibold text-gray-800 text-lg">
                ${excursion.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Lists;
