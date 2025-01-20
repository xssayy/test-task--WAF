import { NavLink } from "react-router-dom";
import styles from "./Registration.module.css";
import { useDispatch } from "react-redux";
import { getCurrentUser, register } from "../../redux/auth/operations";
import { useState } from "react";
import { createCompany } from "../../redux/company/operations";

const Registration = () => {
  const [role, setRole] = useState("client"); // Состояние для роли
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formElements = e.target.elements;

    const payload = {
      firstName: formElements.firstName.value,
      lastName: formElements.lastName.value,
      email: formElements.email.value,
      password: formElements.password.value,
      role,
    };

    await dispatch(register(payload));

    dispatch(getCurrentUser());
    if (role === "companyOwner") {
      const company = {
        companyName: formElements.companyName.value,
        companyDescription: formElements.companyDescription.value,
      };

      if (!company.companyName || !company.companyDescription) {
        return alert("Company name and description are required.");
      }

      dispatch(createCompany(company));
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Реєстрація</h1>
        <form
          className={styles.form}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
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
            placeholder="Введіть eлектроннy пошту"
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

          {/* Дополнительные поля для владельца компании */}
          {role === "companyOwner" && (
            <>
              <label className={styles.label} htmlFor="companyName">
                Назва компанії
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className={styles.input}
                placeholder="Введіть назву вашої компанії"
              />

              <label className={styles.label} htmlFor="companyDescription">
                Опис компанії
              </label>
              <input
                type="text"
                id="companyDescription"
                name="companyDescription"
                className={styles.input}
                placeholder="Введіть опис вашої компанії"
              />
            </>
          )}

          {/* Радиокнопки для выбора роли */}
          <div className={styles.radioGroup}>
            <label className={styles.label}>Укажіть хто ви:</label>
            <div className={styles.radioContainer}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="role"
                  value="client"
                  checked={role === "client"}
                  onChange={handleRoleChange}
                />
                Я клієнт
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="role"
                  value="companyOwner"
                  checked={role === "companyOwner"}
                  onChange={handleRoleChange}
                />
                Я власник компанії
              </label>
            </div>
          </div>

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
