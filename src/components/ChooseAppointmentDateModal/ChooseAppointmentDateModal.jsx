import Modal from "react-modal";
import styles from "./ChooseAppointmentDateModal.module.css";

import DatePickerComponent from "../DatePickerComponent/DatePickerComponent";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookAppointment } from "../../redux/client/operations";
import { selectUser } from "../../redux/auth/selectors";
import { bookAppointmentToCompanyAcc } from "../../redux/company/operations";

Modal.setAppElement("#root");

const ChooseAppointmentDateModal = ({ isOpen, closeModal, company }) => {
  const [appointmentDate, setAppointmentDate] = useState(new Date());

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const companyDataPayload = {
    companyName: company.companyName,
    companyOwnerId: company.companyOwnerId,
    companyDescription: company.companyDescription,
  };
  const handleBookAppointment = () => {
    const reqBodyToClientAcc = {
      appointmentTime: appointmentDate.toISOString(),
      company: companyDataPayload,
    };
    dispatch(bookAppointment(reqBodyToClientAcc));
  };

  const handleBookAppointmentToCompanyAcc = () => {
    const appointmentBody = {
      appointmentTime: appointmentDate.toISOString(),
      clientData: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    };

    const reqBodyToCompanyAcc = {
      companyId: company._id,
      appointmentBody,
    };

    dispatch(bookAppointmentToCompanyAcc(reqBodyToCompanyAcc));
  };

  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <h3 className={styles.companyTitle}>{company.name}</h3>
      <p className={styles.companyDescription}>{company.description}</p>
      <div className={styles.datePickerContainer}>
        <p className={styles.datePickerLabel}>
          Будь ласка, оберіть час консультації:
        </p>{" "}
        <DatePickerComponent
          appointmentDate={appointmentDate}
          setAppointmentDate={setAppointmentDate}
        />
      </div>
      <button
        className={styles.acceptButton}
        type="button"
        onClick={() => {
          handleBookAppointment();
          handleBookAppointmentToCompanyAcc();
          closeModal();
        }}
      >
        Забронювати час зустрічі
      </button>
    </ModalWrapper>
  );
};

export default ChooseAppointmentDateModal;
