import styles from "./index.module.css";
import { Outlet } from "react-router";
//import GlobalNav from "../GlobalNav";
//import GlobalFooter from "../GlobalFooter";

const Dashboard = () => {
  return (
    <>
      <main className={styles.main}>Dashboard</main>
      {/* <GlobalNav /> */}
      <Outlet />
      {/* <GlobalFooter /> */}
    </>
  );
};

export default Dashboard;
