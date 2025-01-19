import { useState } from "react";
import styles from "./AppointmentsListItem.module.css";
import { format } from "date-fns";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import DeleteAppointmentModal from "../DeleteAppointmentModal/DeleteAppointmentModal";
import EditAppointmentDateModal from "../EditAppointmentDateModal/EditAppointmentDateModal";

const AppointmentsListItem = ({ appointment }) => {
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState(new Date());

  const openEditModal = () => {
    setModalEditIsOpen(true);
  };
  const closeEditModal = () => {
    setModalEditIsOpen(false);
  };

  const openDeleteModal = () => {
    setModalDeleteIsOpen(true);
  };

  const closeDeleteModal = () => {
    setModalDeleteIsOpen(false);
  };

  function formatISOToCustom(isoString) {
    return format(new Date(isoString), "dd/MM/yy HH:mm");
  }

  return (
    <div className={styles.appointmentItem}>
      <div className={styles.appointmentInfo}>
        <p className={styles.appointmentName}>{appointment.companyId}</p>
        <p className={styles.appointmentDescription}>
          {formatISOToCustom(appointment.appointmentTime)}
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <button
          type="button"
          className={styles.editButton}
          onClick={() => {
            openEditModal();
          }}
        >
          <FaEdit /> Змінити час консультації
        </button>
        <button
          type="button"
          className={styles.deleteButton}
          onClick={() => {
            openDeleteModal();
          }}
        >
          <FaRegTrashAlt />
          Видалити броннювання зустрічі
        </button>
      </div>
      <EditAppointmentDateModal
        isOpen={modalEditIsOpen}
        closeModal={closeEditModal}
        date={appointmentDate}
        setDate={setAppointmentDate}
        appointment={appointment}
      />

      <DeleteAppointmentModal
        isOpen={modalDeleteIsOpen}
        closeModal={closeDeleteModal}
        appointment={appointment}
      />
    </div>
  );
};

export default AppointmentsListItem;
