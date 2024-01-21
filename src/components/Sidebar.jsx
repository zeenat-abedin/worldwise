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
      <p>List of cities</p>
    </div>
  );
}
