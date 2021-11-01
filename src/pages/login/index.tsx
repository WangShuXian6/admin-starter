import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { LoginForm, ProFormCheckbox, ProFormText } from "@ant-design/pro-form";
import styles from "./index.module.less";
import userService from "@/services/user";

const usenameRule = [
  {
    required: true,
    message: "请输入用户名!",
  },
];

const passwordRule = [
  {
    required: true,
    message: "请输入密码！",
  },
];

const Login = () => {
  const login = async (value: any) => {
    const params = {
      loginname: value.username,
      password: value.password,
      service: "",
    };
    const result = await userService.login(params);
    return true;
  };

  return (
    <div className={styles.main}>
      <LoginForm
        logo=""
        title="哈银消费金融"
        subTitle="管理系统"
        onFinish={login}
      >
        <ProFormText
          name="username"
          fieldProps={{
            size: "large",
            prefix: <UserOutlined className={"prefixIcon"} />,
          }}
          placeholder={"用户名: admin or user"}
          rules={usenameRule}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: "large",
            prefix: <LockOutlined className={"prefixIcon"} />,
          }}
          placeholder={"密码: ant.design"}
          rules={passwordRule}
        />
        <div
          style={{
            marginBottom: 24,
          }}
        >
          {/* <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox> */}
          {/* <a
            style={{
              float: "right",
            }}
          >
            忘记密码
          </a> */}
        </div>
      </LoginForm>
    </div>
  );
};

export default Login;
