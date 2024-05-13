import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import styles from "../styles/DefaultLayout.module.css";

export function DefaultLayout() {
  return (
    <div className={styles.corpo}>
      <Navbar />
      <Outlet />
    </div>
  );
}
