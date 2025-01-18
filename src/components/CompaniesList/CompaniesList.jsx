import { useState } from "react";
import styles from "./CompaniesList.module.css";
import DatePickerModal from "../DatePickerModal/DatePickerModal";

const CompaniesList = ({ companies }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <ul className={styles.companyList}>
        {companies.map((company, index) => (
          <li key={index} className={styles.companyItem}>
            <div className={styles.companyInfo}>
              <p className={styles.companyName}>{company.name}</p>
              <p className={styles.companyDescription}>{company.description}</p>
            </div>
            <button className={styles.consultButton} onClick={openModal}>
              Записаться на консультацию
            </button>
          </li>
        ))}
      </ul>
      {modalIsOpen && (
        <DatePickerModal isOpen={modalIsOpen} closeModal={closeModal} />
      )}
    </>
  );
};

export default CompaniesList;
