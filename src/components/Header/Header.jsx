import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                clsx(styles.navLink, { [styles.activeLink]: isActive })
              }
            >
              Головна сторінка
            </NavLink>
          </li>
          <li>
            <NavLink
              to="appointments"
              className={({ isActive }) =>
                clsx(styles.navLink, { [styles.activeLink]: isActive })
              }
            >
              Мої зустрічі
            </NavLink>
          </li>
          <li>
            <NavLink
              to="companies"
              className={({ isActive }) =>
                clsx(styles.navLink, { [styles.activeLink]: isActive })
              }
            >
              Компанії
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink
        to="account"
        className={({ isActive }) =>
          clsx(styles.profileButton, { [styles.activeButton]: isActive })
        }
      >
        Мій профіль
      </NavLink>
    </header>
  );
}
