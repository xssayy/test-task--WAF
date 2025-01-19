import AppointmentsList from "../../components/AppointmentsList/AppointmentsList";

const Appointments = () => {
  const appointments = [
    {
      companyId: "Company А ID",
      appointmentTime: "2025-01-10T13:00:20.034Z",
      id: 1,
    },
    {
      companyId: "Company B ID",
      appointmentTime: "2025-03-18T07:30:14.034Z",
      id: 2,
    },
    {
      companyId: "Company C ID",
      appointmentTime: "2025-01-06T10:05:18.034Z",
      id: 3,
    },
  ];
  return (
    <>
      <h2>Ваші зустрічі</h2>
      <AppointmentsList appointments={appointments} />
    </>
  );
};

export default Appointments;
