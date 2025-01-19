import Modal from "react-modal";
import styles from "./DeleteAppointmentModal.module.css";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

Modal.setAppElement("#root");

const DeleteAppointmentModal = ({ isOpen, closeModal, appointment }) => {
  const hadleDeleteAppointment = () => {
    console.log("====================================");
    console.log("delete appointment with id: ", appointment.id);
    console.log("====================================");
  };
  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <h3 className={styles.title}>Видалити зустріч?</h3>
      <p className={styles.description}>
        Натиснувши кнопку нижче, зустріч буде видалена. <br />
        Ви завжди можете записатися повторно.
      </p>
      <button
        type="button"
        className={styles.deleteButton}
        onClick={hadleDeleteAppointment}
      >
        Видалити зустріч
      </button>
    </ModalWrapper>
  );
};

export default DeleteAppointmentModal;
