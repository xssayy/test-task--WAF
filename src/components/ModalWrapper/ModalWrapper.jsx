import Modal from "react-modal";
import styles from "./ModalWrapper.module.css";
import { HiXMark } from "react-icons/hi2";

Modal.setAppElement("#root");

const ModalWrapper = ({
  isOpen,
  closeModal,

  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={styles.modal}
      style={{
        overlay: {
          backgroundColor: "rgba(47, 47, 47, 0.6)",
        },
      }}
    >
      {children}
      <button type="button" onClick={closeModal} className={styles.closeButton}>
        {" "}
        <HiXMark className={styles.closeIcon} />
      </button>
    </Modal>
  );
};

export default ModalWrapper;
