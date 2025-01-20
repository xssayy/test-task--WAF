import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { getCurrentUser, logIn } from "../../redux/auth/operations";

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formElements = e.target.elements;

    const payload = {
      email: formElements.email.value,
      password: formElements.password.value,
    };
    await dispatch(logIn(payload));
    await dispatch(getCurrentUser());
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Вхід в аккаунт</h1>
        <form
          className={styles.form}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label className={styles.label} htmlFor="email">
            Електронна пошта
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="Введіть електронну пошту"
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
            to="/registration"
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
