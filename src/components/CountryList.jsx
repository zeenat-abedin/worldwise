import PropTypes from "prop-types";

import CityItem from "./CityItem";
import Spinner from "./Spinner";

import styles from "./CountryList.module.css";
import Message from "./Message";

export default function CountryList({ cities, loading }) {
  if (loading) return <Spinner />;
  if (!cities.length) {
    return <Message message="Add your first country by clicking on the map" />;
  }

  return (
    <ul className={styles.countryList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  cities: PropTypes.array,
  loading: PropTypes.bool,
};
