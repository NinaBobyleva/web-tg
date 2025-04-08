import { ButtonGray } from "../ButtonGray/ButtonGray";
import styles from "./orders.module.css";

export const Orders = () => {
  return (
    <div className={styles.ordersBox}>
      <h1 className={styles.ordersTitle}>Ваши заказы</h1>
      <ButtonGray title="Создать заказ" />
    </div>
  );
};
