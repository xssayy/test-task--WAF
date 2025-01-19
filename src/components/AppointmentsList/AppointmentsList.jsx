import styles from "./AppointmentsList.module.css";

import AppointmentsListItem from "../AppointmentsListItem/AppointmentsListItem";

const AppointmentsList = ({ appointments }) => {
  return (
    <>
      <ul className={styles.appointmentList}>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            <AppointmentsListItem appointment={appointment} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AppointmentsList;
