import styles from "./Account.module.css";

const Account = () => {
  return (
    <>
      <h2>Ваш профіль</h2>
      <ul className={styles.userDataList}>
        <li className={styles.userDataListItem}>Ім&apos;я</li>
        <li className={styles.userDataListItem}>Призвіще</li>
      </ul>
      <button type="button" className={styles.logoutButton}>
        Вийти з аккаунту
      </button>
    </>
  );
};

export default Account;
