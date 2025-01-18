import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="appointments">Мої зустрічі</Link>
          </li>
          <li>
            <Link to="companies">Компанії</Link>
          </li>
        </ul>
      </nav>
      <button className={styles.profileButton}>
        <Link to="account">Мій профіль</Link>
      </button>
    </header>
  );
}
