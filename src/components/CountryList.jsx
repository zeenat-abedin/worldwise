import PropTypes from "prop-types";

import CountryItem from "./CountryItem";
import Spinner from "./Spinner";

import styles from "./CountryList.module.css";
import Message from "./Message";

export default function CountryList({ cities, loading }) {
  if (loading) return <Spinner />;
  if (!cities.length) {
    return <Message message="Add your first country by clicking on the map" />;
  }

  //checking if the array already contains the current city. So we can say the array, then we map over it, and then el.city, which will basically create an array of all the cities that are already in the countries array. And then we ask if this includes the current city. Or actually the country in the current city. Okay, so if that is not the case, so if the current country is not yet in this array that we are creating here, well, then let's return a new array which will contain all the current elements plus a new one.

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  cities: PropTypes.array,
  loading: PropTypes.bool,
};
