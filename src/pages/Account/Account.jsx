import { useDispatch } from "react-redux";
import styles from "./Account.module.css";
import { logOut } from "../../redux/auth/operations";

const Account = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <h2>Ваш профіль</h2>
      <ul className={styles.userDataList}>
        <li className={styles.userDataListItem}>Ім&apos;я</li>
        <li className={styles.userDataListItem}>Призвіще</li>
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
