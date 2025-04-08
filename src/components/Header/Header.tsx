import styles from "./header.module.css";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import { retrieveLaunchParams } from "@telegram-apps/bridge";

export const Header = () => {
  const { tgWebAppData } = retrieveLaunchParams();
  // console.log("launchParams", tgWebAppData);

  return (
    <div className={styles.header}>
      <div className={styles.orderBox}>
        <img className={styles.logo} src="./img/logo.png" alt="logo" />
        <div className={styles.btnBox}>
          <ButtonGray title="Мои заказы" />
        </div>
      </div>
      <div className={styles.loginBox}>
        <p className={styles.login}>{tgWebAppData?.user?.username}</p>
        <ButtonGray title="Выйти" />
      </div>
    </div>
  );
};
