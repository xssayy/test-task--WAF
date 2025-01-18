import { Suspense } from "react";
import styles from "./SharedLayout.module.css";

const SharedLayout = ({ children }) => (
  <div className={styles.layout}>
    <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
  </div>
);

export default SharedLayout;
