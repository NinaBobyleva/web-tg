import styles from "./header.module.css";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import { retrieveLaunchParams } from "@telegram-apps/bridge";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../paths";

export const Header = () => {
  const navigate = useNavigate();
  const { tgWebAppData } = retrieveLaunchParams();
  console.log("launchParams", tgWebAppData);

  const data = JSON.stringify({
    eventType: 'web_app_setup_back_button',
    eventData: {
      is_visible: true,
    },
  });
  
  window.parent.postMessage(data, 'https://t.me/KRorder_bot/KR_order');

  return (
    <div className={styles.header}>
      <div className={styles.orderBox}>
        <Link to={paths.HOME}>
          <img className={styles.logo} src="./img/logo.png" alt="logo" />
        </Link>
        <div className={styles.btnBox}>
          <ButtonGray onClick={() => navigate(paths.HOME)} title="Мои заказы" />
          <ButtonGray title="Выйти" />
        </div>
      </div>
      <div className={styles.loginBox}>
        <p className={styles.login}>{tgWebAppData?.user?.first_name}</p>
      </div>
    </div>
  );
};
