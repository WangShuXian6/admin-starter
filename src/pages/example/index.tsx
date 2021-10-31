import styles from "./index.module.css";
import { Outlet } from "react-router";

const Example = () => {
  return (
    <>
      <main className={styles.main}>Example</main>
      <Outlet />
    </>
  );
};

export default Example
