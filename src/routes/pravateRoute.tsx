import React, { FC } from "react";
import { Route, useNavigate } from "react-router-dom";
import { Result, Button } from "antd";
import { RouteProps, useLocation } from "react-router";

const PrivateRoute: FC<{ element: any }> = ({ element }) => {
  const logged = true;
  const navigate = useNavigate();
  const location = useLocation();

  return logged ? (
    element
  ) : (
    <Result
      status="403"
      title="403"
      subTitle={"sub"}
      extra={
        <Button
          type="primary"
          onClick={() =>
            navigate("/login", {
              replace: true,
              state: { from: location.pathname },
            })
          }
        >
          goToLogin
        </Button>
      }
    />
  );
};

export default PrivateRoute;
