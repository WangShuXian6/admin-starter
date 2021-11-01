//import GlobalNav from "../GlobalNav";
import SuspendFallbackLoading from "@/layout/suspendFallbackLoading";
import { Suspense } from "react";
import { Outlet } from "react-router";
import styles from "./index.module.less";
//import GlobalFooter from "../GlobalFooter";

const LoginLayout = () => {
  return (
    <Suspense
      fallback={
        <SuspendFallbackLoading
          message="Alert message title"
          description="Further details about the context of this alert."
        />
      }
    >
      <div className={styles.main}>
        <Outlet />
      </div>
    </Suspense>
  );
};

export default LoginLayout;
