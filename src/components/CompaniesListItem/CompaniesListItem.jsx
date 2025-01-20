import styles from "./CompaniesListItem.module.css";
import ChooseAppointmentDateModal from "../ChooseAppointmentDateModal/ChooseAppointmentDateModal";
import { useState } from "react";

function CompaniesListItem({ company }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.companyItem}>
      <div className={styles.companyInfo}>
        <p className={styles.companyName}>{company.companyName}</p>
        <p className={styles.companyDescription}>
          {company.companyDescription}
        </p>
      </div>
      <button
        type="button"
        className={styles.consultButton}
        onClick={openModal}
      >
        Записатися на консультацию
      </button>
      <ChooseAppointmentDateModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        company={company}
      />
    </div>
  );
}

export default CompaniesListItem;
