import SuspendFallbackLoading from "@/layout/suspendFallbackLoading";
import routerList from "@/routes";
import generateMenus from "@/shared/utils/menu";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Suspense, useCallback, useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import styles from "./index.module.less";
import CustomHeader from "./components/Header";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

//import GlobalNav from "../GlobalNav";
//import GlobalFooter from "../GlobalFooter";

const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const mainRoutes = generateMenus(routerList);

  const collapse = useCallback(() => {
    setCollapsed((collapsed) => !collapsed);
  }, []);

  return (
    <Layout>
      <Header className={styles.header}>
        <CustomHeader />
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          width={200}
          className="site-layout-background"
          onCollapse={collapse}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["/example"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {mainRoutes?.map((route) => (
              <SubMenu
                key={route.key}
                icon={<UserOutlined />}
                title={route.title}
              >
                {route.children?.map((subRoute) => (
                  <Menu.Item key={subRoute.key}>
                    <Link to={`${route.path}/${subRoute.path}`}>
                      {subRoute.title}
                    </Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
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
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
