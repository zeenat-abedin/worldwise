import PropTypes from "prop-types";

import CityItem from "./CityItem";
import Spinner from "./Spinner";

import styles from "./CityList.module.css";

export default function CityList({ cities, loading }) {
  if (loading) return <Spinner />;

  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.array,
  loading: PropTypes.bool,
};
