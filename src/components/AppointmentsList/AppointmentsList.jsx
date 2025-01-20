import styles from "./AppointmentsList.module.css";
import AppointmentsListItem from "../AppointmentsListItem/AppointmentsListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectClientData } from "../../redux/client/selectors";
import { getClientData } from "../../redux/client/operations";

const AppointmentsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClientData());
  }, [dispatch]);

  const clientData = useSelector(selectClientData);

  if (
    !clientData ||
    !clientData.appointments ||
    clientData.appointments.length === 0
  ) {
    return <p>У вас ще немає записів.</p>;
  }

  return (
    <ul className={styles.appointmentList}>
      {clientData.appointments.map((appointment) => (
        <li key={appointment._id}>
          <AppointmentsListItem appointment={appointment} />
        </li>
      ))}
    </ul>
  );
};

export default AppointmentsList;
