import { FC } from "react";
import styles from "./index.module.css";

const RightContent: FC = ({ children }) => {
  return (
    <>
      <main className={styles.main}>RightContent</main>
      {children}
    </>
  );
};

export default RightContent;
