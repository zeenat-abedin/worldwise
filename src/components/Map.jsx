import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import styles from "./Map.module.css";

export default function Map() {
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [searchParamas, setSearchParams] = useSearchParams();
  const lat = searchParamas.get("lat");
  const lng = searchParamas.get("lng");

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
