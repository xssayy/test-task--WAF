import { useDispatch, useSelector } from "react-redux";
import styles from "./Account.module.css";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

const Account = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  const user = useSelector(selectUser);

  return (
    <>
      <h2>Ваш профіль</h2>
      <ul className={styles.userDataList}>
        <li className={styles.userDataListItem}>Ім&apos;я: {user.firstName}</li>
        <li className={styles.userDataListItem}>Призвіще: {user.lastName}</li>
        <li className={styles.userDataListItem}>Пошта: {user.email} </li>
        <li className={styles.userDataListItem}>
          Тип аккаунту: {user.role === "client" ? "Клієнт" : "Власник компанії"}
        </li>
      </ul>
      <button
        type="button"
        className={styles.logoutButton}
        onClick={handleLogout}
      >
        Вийти з аккаунту
      </button>
    </>
  );
};

export default Account;
