import { ButtonGray } from "../ButtonGray/ButtonGray";
import { Input } from "../Input/Input";
import styles from "./createOrder.module.css";

export const CreateOrder = () => {
  return (
    <div className={styles.createOrderBox}>
      <Input type="text" placeholder="Выберите адрес" value="str" />
      {/* <input className={styles.createOrderInput} type="text" placeholder="Выберите адрес" /> */}
      <div>
        <h3>Желаемая дата доставки</h3>
        <input className={styles.createOrderInput} type="date" />
      </div>
      <ul className={styles.addressList}></ul>
      <ButtonGray title="Создать заказ" />
    </div>
  );
};
