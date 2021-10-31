//import GlobalNav from "../GlobalNav";
import SuspendFallbackLoading from "@/layout/suspendFallbackLoading";
import { Suspense } from "react";
import { Outlet } from "react-router";
import styles from "./index.module.css";
//import GlobalFooter from "../GlobalFooter";

const LoginLayout = () => {
  return (
    <>
      <main className={styles.main}>LoginLayout</main>
      <Suspense
        fallback={
          <SuspendFallbackLoading
            message="Alert message title"
            description="Further details about the context of this alert."
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default LoginLayout;
