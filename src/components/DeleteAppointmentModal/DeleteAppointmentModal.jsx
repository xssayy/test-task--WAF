import Modal from "react-modal";
import styles from "./DeleteAppointmentModal.module.css";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useDispatch } from "react-redux";
import { deleteClientAppointment } from "../../redux/client/operations";

Modal.setAppElement("#root");

const DeleteAppointmentModal = ({ isOpen, closeModal, appointment }) => {
  const dispatch = useDispatch();
  const hadleDeleteAppointment = () => {
    dispatch(deleteClientAppointment(appointment._id));
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
