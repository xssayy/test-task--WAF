import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Вхід в аккаунт</h1>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="email">
            Електронна пошту
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="Введіть електронну пошта"
          />

          <label className={styles.label} htmlFor="password">
            Пароль
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            placeholder="Введіть пароль"
          />

          <button type="submit" className={styles.button}>
            Войти
          </button>
        </form>
        <p className={styles.redirectToRegistationPageText}>
          Ще не маєте свого аккаунту?{" "}
          <NavLink
            to="/register"
            className={styles.redirectToRegistationPageLink}
          >
            Зареєструватися
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
