import { Button } from '../Button/Button';
import { ButtonRed } from '../ButtonRed/ButtonRed';
import { Input } from '../Input/Input';
import styles from './editOrderBlock.module.css'

export const EditOrderBlock = () => {
  return (
    <div className={styles.editBlock}>
      <h1 className={styles.title}>Редактирование заказа</h1>
      <div className={styles.inputBox}>
        <span>Адрес:</span>
        <Input type="text" />
      </div>
      <div className={styles.buttonBox}>
        <Button title="Обновить адрес" />
        <ButtonRed title="Удалить заказ" />
      </div>
    </div>
  );
};
