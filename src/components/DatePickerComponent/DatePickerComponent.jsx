import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePickerComponent.module.css";

const DatePickerComponent = ({ appointmentDate, setAppointmentDate }) => {
  const minWorkTime = new Date();
  minWorkTime.setHours(4, 0, 0, 0);

  const currentTime = new Date();

  const minTime = new Date(
    Math.max(minWorkTime.getTime(), currentTime.getTime())
  );

  return (
    <DatePicker
      className={styles.datePickerInput}
      selected={appointmentDate}
      onChange={(date) => setAppointmentDate(date)}
      dateFormat="dd/MM/yy HH:mm"
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={30}
      timeCaption="Time"
      minDate={new Date()}
      minTime={minTime}
      maxTime={new Date().setHours(18, 0)}
      fixedHeight
      icon="fa fa-calendar"
    />
  );
};

export default DatePickerComponent;
