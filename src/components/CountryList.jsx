import PropTypes from "prop-types";

import CountryItem from "./CountryItem";
import Spinner from "./Spinner";

import styles from "./CountryList.module.css";
import Message from "./Message";

export default function CountryList({ cities, loading }) {
  const countries = [];

  if (loading) return <Spinner />;
  if (!cities.length) {
    return <Message message="Add your first country by clicking on the map" />;
  }

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  cities: PropTypes.array,
  loading: PropTypes.bool,
};
