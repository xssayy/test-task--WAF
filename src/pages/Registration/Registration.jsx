import { NavLink } from "react-router-dom";
import styles from "./Registration.module.css";

const Registration = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Реєстрація</h1>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="firstName">
            Ім&apos;я
          </label>

          <input
            type="text"
            id="firstName"
            name="firstName"
            className={styles.input}
            placeholder="Введіть ваше ім'я"
          />

          <label className={styles.label} htmlFor="lastName">
            Призвіще
          </label>

          <input
            type="text"
            id="lastName"
            name="lastName"
            className={styles.input}
            placeholder="Введіть ваше призвіще"
          />

          <label className={styles.label} htmlFor="email">
            Електронна пошта
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="Введите электронную почту"
          />

          <label className={styles.label} htmlFor="password">
            Пароль
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            placeholder="Введите пароль"
          />

          <button type="submit" className={styles.button}>
            Зареєструватися
          </button>
        </form>
        <p className={styles.redirectToLoginPageText}>
          Вже маєти свій аккаунт?{" "}
          <NavLink to="/login" className={styles.redirectToLoginPageLink}>
            Увійти
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Registration;
