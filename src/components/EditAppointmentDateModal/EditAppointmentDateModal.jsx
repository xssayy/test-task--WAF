import Modal from "react-modal";
import styles from "./EditAppointmentDateModal.module.css";
import DatePickerComponent from "../DatePickerComponent/DatePickerComponent";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useState } from "react";

Modal.setAppElement("#root");

const EditAppointmentDateModal = ({ isOpen, closeModal, appointment }) => {
  const [appointmentDate, setAppointmentDate] = useState(
    new Date(appointment.appointmentTime)
  );

  const handleChangeAppointmentTime = () => {
    const reqBody = {
      userId: 32124123124123,
      companyId: appointment.companyId,
      time: appointmentDate.toISOString(),
    };
    console.log("Send request to change appointment time via body: ", reqBody);
  };

  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <h3 className={styles.companyTitle}>{appointment.companyId}</h3>
      <p className={styles.companyDescription}>Заглушка</p>
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
        type="button"
        className={styles.acceptButton}
        onClick={() => {
          handleChangeAppointmentTime();
        }}
      >
        Змінити час зустрічі
      </button>
    </ModalWrapper>
  );
};

export default EditAppointmentDateModal;
