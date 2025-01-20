import { ColorRing } from "react-loader-spinner";
import styles from "./DefaultLoader.module.css";

const DefaultLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <ColorRing
        visible={true}
        height="200"
        width="200"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#3D8BFF", "#A8B6B9", "#FFFFFF", "#3D8BFF", "#A8B6B9"]} // Синие, серые и белые цвета
      />
    </div>
  );
};

export default DefaultLoader;
