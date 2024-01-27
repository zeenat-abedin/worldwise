import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export default function Map() {
  const [searchParamas, setSearchParams] = useSearchParams();
  const lat = searchParamas.get("lat");
  const lng = searchParamas.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <p>
        Position: {lat}, {lng}
      </p>
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 45 });
        }}
      >
        Change Position
      </button>
    </div>
  );
}
