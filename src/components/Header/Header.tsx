import styles from "./header.module.css";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import { retrieveLaunchParams } from '@telegram-apps/sdk';
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../paths";

export const Header = () => {
  const navigate = useNavigate();
  const { tgWebAppData } = retrieveLaunchParams();

  return (
    <div className={styles.header}>
      <div className={styles.orderBox}>
        <Link to={paths.HOME}>
          <img className={styles.logo} src="./img/logo.png" alt="logo" />
        </Link>
        <div className={styles.btnBox}>
          <ButtonGray onClick={() => navigate(paths.HOME)} title="Мои заказы" />
        </div>
      </div>
      <div className={styles.loginBox}>
        <p className={styles.login}>{tgWebAppData?.user?.first_name}</p>
      </div>
    </div>
  );
};
