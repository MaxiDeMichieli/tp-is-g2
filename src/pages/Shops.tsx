import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Map from "../components/Map";
import { useContext } from "../context/ContextProvider";

const Shops = () => {
  const { context } = useContext();

  return (
    <Layout
      banner={
        <div className="absolute top-0 left-0 w-full bg-[#7B4F94] h-24" />
      }
    >
      <h1 className="w-full h-24 text-white flex items-center font-medium text-3xl">
        Comercios
      </h1>
      <div className="w-full py-12 flex flex-col">
        <Map
          markers={context.shops?.map((shop) => ({
            ...shop,
            popup: (
              <div>
                <div className="flex flex-col mb-2">
                  <span className="font-semibold">{shop.name}</span>
                  <img className="my-1" src={shop.image} alt={shop.name} />
                  <span>{shop.description}</span>
                  <span>{shop.address}</span>
                  <span>{shop.schedule}</span>
                  <span>Contacto: {shop.contact}</span>
                </div>
                <Link to={`/comercios/${shop.id}`}>Ver más</Link>
              </div>
            ),
          }))}
          center={{ lat: -32.89765923961716, lng: -68.84286361623253 }}
        />
      </div>
    </Layout>
  );
};

export default Shops;
