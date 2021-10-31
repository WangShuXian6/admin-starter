import styles from "./index.module.css";
import { Outlet } from "react-router";
//import GlobalNav from "../GlobalNav";
//import GlobalFooter from "../GlobalFooter";

const Login = () => {
  return (
    <>
      <main className={styles.main}>Login</main>
      {/* <GlobalNav /> */}
      <Outlet />
      {/* <GlobalFooter /> */}
    </>
  );
};

export default  Login;
