import styles from "./CompanyAppointmentsList.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCompanyData } from "../../redux/company/operations";
import { selectCompanyData } from "../../redux/company/selectors";
import CompanyAppointmentsListItem from "../CompanyAppointmentsListItem/CompanyAppointmentsListItem";

const CompanyAppointmentsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyData());
  }, [dispatch]);
  const companyData = useSelector(selectCompanyData);
  console.log(companyData);
  if (
    !companyData ||
    !companyData.appointments ||
    companyData.appointments.length === 0
  ) {
    return <p>У вас ще немає записів.</p>;
  }

  return (
    <ul className={styles.appointmentList}>
      {companyData.appointments.map((appointment) => (
        <li key={appointment.clientData._id}>
          <CompanyAppointmentsListItem appointment={appointment} />
        </li>
      ))}
    </ul>
  );
};

export default CompanyAppointmentsList;
