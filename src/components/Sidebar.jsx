import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of cities</p>
    </div>
  );
}
