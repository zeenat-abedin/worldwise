import { Outlet } from "react-router-dom";

import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Worldwise, Inc
        </p>
      </footer>
    </div>
  );
}
