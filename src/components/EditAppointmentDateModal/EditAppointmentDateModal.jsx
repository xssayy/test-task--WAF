import Modal from "react-modal";
import styles from "./EditAppointmentDateModal.module.css";
import DatePickerComponent from "../DatePickerComponent/DatePickerComponent";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateClientData } from "../../redux/client/operations";

Modal.setAppElement("#root");

const EditAppointmentDateModal = ({ isOpen, closeModal, appointment }) => {
  const [appointmentDate, setAppointmentDate] = useState(
    new Date(appointment.appointmentTime)
  );
  const dispatch = useDispatch();

  const handleChangeAppointmentTime = () => {
    const updatedAppointment = {
      ...appointment,
      appointmentTime: appointmentDate.toISOString(),
    };
    console.log("====================================");
    console.log(updatedAppointment);
    console.log("====================================");
    dispatch(updateClientData(updatedAppointment));
    closeModal();
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
        onClick={handleChangeAppointmentTime}
      >
        Змінити час зустрічі
      </button>
    </ModalWrapper>
  );
};

export default EditAppointmentDateModal;
