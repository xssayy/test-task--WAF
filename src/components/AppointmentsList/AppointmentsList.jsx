import styles from "./AppointmentsList.module.css";

import AppointmentsListItem from "../AppointmentsListItem/AppointmentsListItem";

const AppointmentsList = ({ appointments }) => {
  return (
    <>
      <ul className={styles.appointmentList}>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <AppointmentsListItem appointment={appointment} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AppointmentsList;
