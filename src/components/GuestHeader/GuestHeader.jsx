import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./GuestHeader.module.css";

function GuestHeader() {
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
              to="login"
              className={({ isActive }) =>
                clsx(styles.navLink, { [styles.activeLink]: isActive })
              }
            >
              Увійти
            </NavLink>
          </li>
          <li>
            <NavLink
              to="registration"
              className={({ isActive }) =>
                clsx(styles.navLink, { [styles.activeLink]: isActive })
              }
            >
              Зареєструватися
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default GuestHeader;
