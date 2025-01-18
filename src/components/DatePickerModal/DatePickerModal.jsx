import Modal from "react-modal";
import styles from "./DatePickerModal.module.css";
import { HiXMark } from "react-icons/hi2";
import DatePickerComponent from "../DatePickerComponent/DatePickerComponent";
import { useState } from "react";
import { useEffect } from "react";
Modal.setAppElement("#root");

const DatePickerModal = ({ isOpen, closeModal }) => {
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  useEffect(() => {
    console.log(appointmentDate);
  }, [appointmentDate]);

  const handeBookAppointment = () => {
    const reqBody = {
      userId: 3,
      companyId: 3,
      time: appointmentDate.toISOString(),
    };

    console.log("Send request via body: ", reqBody);
  };

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
      <div className={styles.modalContainer}>
        <h3 className={styles.companyTitle}>Назва компанії</h3>
        <p className={styles.companyDescription}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
          officia vero odio eius reiciendis ea dicta similique ipsum, recusandae
          odit cumque repellat dolorem architecto sed soluta aspernatur optio
          voluptates eveniet. Saepe, eius! Suscipit incidunt iste eos maiores
          deserunt rem, quo id quidem autem? Cupiditate reprehenderit, tenetur
          earum maxime nisi molestias.
        </p>
        <div className={styles.datePickerContainer}>
          <p className={styles.datePickerLabel}>
            Будь ласка, оберіть час консультації:
          </p>{" "}
          <DatePickerComponent
            appointmentDate={appointmentDate}
            setAppointmentDate={setAppointmentDate}
          />
        </div>
        <button className={styles.consultButton} onClick={handeBookAppointment}>
          Забронювати зустріч
        </button>
        <button
          type="button"
          onClick={closeModal}
          className={styles.closeButton}
        >
          {" "}
          <HiXMark className={styles.closeIcon} />
        </button>
      </div>
    </Modal>
  );
};

export default DatePickerModal;
