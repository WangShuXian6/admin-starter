import styles from "./index.module.less";
import logoImage from "@/assets/images/logo/logo.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logoImage} alt="logo" />
    </div>
  );
};

export default Header;
