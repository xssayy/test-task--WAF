import Modal from "react-modal";
import styles from "./ChooseAppointmentDateModal.module.css";

import DatePickerComponent from "../DatePickerComponent/DatePickerComponent";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useState } from "react";

Modal.setAppElement("#root");

const ChooseAppointmentDateModal = ({ isOpen, closeModal, company }) => {
  const [appointmentDate, setAppointmentDate] = useState(null);
  const handleBookAppointment = () => {
    const reqBody = {
      userId: 3,
      companyId: company.id,
      time: appointmentDate.toISOString(),
    };
    console.log("Send request via body: ", reqBody);
    closeModal();
  };

  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <h3 className={styles.companyTitle}>{company.name}</h3>
      <p className={styles.companyDescription}>{company.description}</p>
      <div className={styles.datePickerContainer}>
        <p className={styles.datePickerLabel}>
          Будь ласка, оберіть час консультації:
        </p>{" "}
        <DatePickerComponent
          appointmentDate={appointmentDate}
          setAppointmentDate={setAppointmentDate}
        />
      </div>
      <button
        className={styles.acceptButton}
        type="button"
        onClick={handleBookAppointment}
      >
        Забронювати час зустрічі
      </button>
    </ModalWrapper>
  );
};

export default ChooseAppointmentDateModal;
