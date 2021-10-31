import {} from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC<{}> = () => {
  const navigate = useNavigate();
  return <>404</>;
};

export default NotFoundPage;
