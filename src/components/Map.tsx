import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MapPin from "./MapPin";
import { renderToString } from "react-dom/server";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.scss";

const Map = ({ markers, center }) => {
  if (markers)
    return (
      <MapContainer
        center={center}
        zoom={13}
        minZoom={11}
        scrollWheelZoom={true}
        style={{
          height: "700px",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers?.map((marker) => (
          <Marker
            position={marker.location}
            key={marker.location}
            icon={L.divIcon({
              html: renderToString(<MapPin color={marker.color} />),
              iconAnchor: [13, 39],
            })}
          >
            <Popup>{marker.popup}</Popup>
          </Marker>
        ))}
      </MapContainer>
    );
};

export default Map;
