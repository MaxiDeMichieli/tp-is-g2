import Layout from "../components/Layout";
import Map from "../components/Map";
import MapPin from "../components/MapPin";
import { AssistanceType, useContext } from "../context/ContextProvider";

const Assistance = () => {
  const { context } = useContext();

  return (
    <Layout
      banner={
        <div className="absolute top-0 left-0 w-full bg-[#7B4F94] h-24" />
      }
    >
      <h1 className="w-full h-24 text-white flex items-center font-medium text-3xl">
        Centros de asistencia
      </h1>
      <div className="w-full py-12 flex flex-col">
        <div className="flex mb-4">
          <div className="flex items-end">
            <MapPin color="#6178F1" />
            <span>Móvil</span>
          </div>
          <div className="flex items-end ml-5">
            <MapPin color="#F16161" />
            <span>Fijo</span>
          </div>
        </div>
        <Map
          markers={context.assistance?.map((assistanceCenter) => ({
            ...assistanceCenter,
            color:
              assistanceCenter.type === AssistanceType.MOBILE
                ? "#6178F1"
                : "#F16161",
            popup:
              assistanceCenter.type === AssistanceType.MOBILE ? (
                <div className="flex flex-col">
                  <span className="font-bold">Centro de asistencia móvil (Solo hoy)</span>
                  <span>{assistanceCenter.schedule}</span>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="font-bold">{assistanceCenter.name}</span>
                  <span>{assistanceCenter.address}</span>
                  <span>{assistanceCenter.schedule}</span>
                  <span>Contacto: {assistanceCenter.contact}</span>
                </div>
              ),
          }))}
          center={{ lat: -32.89765923961716, lng: -68.84286361623253 }}
        />
      </div>
    </Layout>
  );
};

export default Assistance;
