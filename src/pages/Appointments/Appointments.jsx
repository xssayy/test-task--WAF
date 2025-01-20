import { useSelector } from "react-redux";
import AppointmentsList from "../../components/AppointmentsList/AppointmentsList";
import CompanyAppointmentsList from "../../components/CompanyAppointmentsList/CompanyAppointmentsList";

import { selectUser } from "../../redux/auth/selectors";

const Appointments = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <h2>Ваші зустрічі</h2>
      {user.role === "client" ? (
        <AppointmentsList />
      ) : (
        <CompanyAppointmentsList />
      )}
    </>
  );
};

export default Appointments;
