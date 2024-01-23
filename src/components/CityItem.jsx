import PropTypes from "prop-types";
import styles from "./CityItem.module.css";

export default function CityItem({ city }) {
  console.log(city);
  const { cityName, date, emoji } = city;
  return (
    <li className={styles.CityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.cityName}>{cityName}</h3>
      <time className={styles.date}>{date}</time>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.string,
};
