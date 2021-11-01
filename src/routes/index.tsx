// import { RouteObject } from "react-router";
import { lazy, FC } from "react";

import DefaultLayout from "@/layout/default";
import LoginLayout from "@/layout/login";
import WrapperRouteComponent from "./pravateRoute";
import NotFoundPage from "@/pages/404/404";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
export interface RouteParams {
  element?: React.ReactElement;
  path?: string;
  index?: boolean;
  title?: string;
  icon?: any;
  children?: RouteParams[];
}

const Dashboard = lazy(
  () => import(/* webpackChunkName: "404'"*/ "@/pages/dashboard")
);
const Example = lazy(
  () => import(/* webpackChunkName: "404'"*/ "@/pages/example")
);
const Example1 = lazy(
  () => import(/* webpackChunkName: "404'"*/ "@/pages/example/example1")
);
const Login = lazy(() => import(/* webpackChunkName: "404'"*/ "@/pages/login"));

const routerList: RouteParams[] = [
  {
    element: <WrapperRouteComponent element={<DefaultLayout />} />,
    path: "/",
    children: [
      {
        index: true,
        element: <WrapperRouteComponent element={<Dashboard />} />,
      },
      {
        path: "example",
        element: <WrapperRouteComponent element={<Example />} />,
        title: "示例",
        icon:<UserOutlined />,
        children: [
          {
            index: true,
            element: <WrapperRouteComponent element={<Example1 />} />,
          },
          {
            path: "abc1",
            title: "abc1",
            element: <WrapperRouteComponent element={<Example1 />} />,
          },
          {
            path: "abc2",
            title: "abc2",
            element: <WrapperRouteComponent element={<Example1 />} />,
          },
          {
            path: ":exampleId",
            element: <WrapperRouteComponent element={<Example1 />} />,
          },
        ],
      },
      {
        path: "example222",
        element: <WrapperRouteComponent element={<Example />} />,
        title: "示例",
        icon:<UserOutlined />,
        children: [
          {
            index: true,
            element: <WrapperRouteComponent element={<Example1 />} />,
          },
          {
            path: "abc1",
            title: "abc1",
            element: <WrapperRouteComponent element={<Example1 />} />,
          },
          {
            path: "abc2",
            title: "abc2",
            element: <WrapperRouteComponent element={<Example1 />} />,
          },
          {
            path: ":exampleId",
            element: <WrapperRouteComponent element={<Example1 />} />,
          },
        ],
      },
    ],
  },
  {
    element: <LoginLayout />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routerList;
