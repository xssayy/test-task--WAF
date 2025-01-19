import { useDispatch, useSelector } from "react-redux";
import AppointmentsList from "../../components/AppointmentsList/AppointmentsList";
import { useEffect } from "react";
import { getClientData } from "../../redux/client/operations";
import { selectClientData } from "../../redux/client/selectors";

const Appointments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClientData());
  }, [dispatch]);
  const clientData = useSelector(selectClientData);

  return (
    <>
      <h2>Ваші зустрічі</h2>
      {clientData?.appointments?.length > 0 ? (
        <AppointmentsList appointments={clientData?.appointments} />
      ) : (
        <div>У вас ще не має зустрічей.</div>
      )}
    </>
  );
};

export default Appointments;
