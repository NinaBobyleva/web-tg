import styles from './header.module.css'
import { ButtonGray } from "../ButtonGray/ButtonGray";
import { retrieveLaunchParams } from '@telegram-apps/sdk';

export const Header = () => {
  const launchParams  = retrieveLaunchParams();
  console.log("launchParams", launchParams);
  return (
    <div className={styles.header}>
      <div className={styles.orderBox}>
        <p className={styles.orderTitle}>Заказы</p>
        <div className={styles.btnBox}>
          <ButtonGray title="Мои заказы" />
          <ButtonGray title="API документация" />
        </div>
      </div>
      <div className={styles.loginBox}>
        <p className={styles.login}>234765@mail.ru</p>
        <ButtonGray title="Выйти" />
      </div>
    </div>
  );
};
