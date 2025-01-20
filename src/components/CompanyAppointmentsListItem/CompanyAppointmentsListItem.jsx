import styles from "./CompanyAppointmentsListItem.module.css";
import { format } from "date-fns";

const CompanyAppointmentsListItem = ({ appointment }) => {
  function formatISOToCustom(isoString) {
    return format(new Date(isoString), "dd/MM/yy HH:mm");
  }

  return (
    <div className={styles.appointmentItem}>
      <div className={styles.appointmentInfo}>
        <p className={styles.appointmentName}>
          {appointment.clientData.firstName +
            " " +
            appointment.clientData.lastName}
        </p>

        <p className={styles.appointmentDescription}>
          {formatISOToCustom(appointment.appointmentTime)}
        </p>
      </div>
    </div>
  );
};

export default CompanyAppointmentsListItem;
