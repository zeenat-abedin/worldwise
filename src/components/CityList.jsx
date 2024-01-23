import PropTypes from "prop-types";

import CityItem from "./CityItem";
import Spinner from "./Spinner";

import styles from "./CityList.module.css";
import Message from "./Message";

export default function CityList({ cities, loading }) {
  if (loading) return <Spinner />;
  if (!cities.length) {
    return <Message message="Add your first city by clicking on the map" />;
  }

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
