import { ButtonGray } from "../ButtonGray/ButtonGray";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input";
import styles from "./addMaterialsBlock.module.css";

export const AddMaterialsBlock = () => {
  return (
    <div>
      <h2 className={styles.title}>Добавить материалы</h2>
      <Form>
        <div className={styles.formBox}>
          <div className={styles.inputBox}>
            <Input type="text" />
            <input className={styles.input} type="number" />
          </div>
          <ButtonGray title="Добавить в заказ" />
        </div>
      </Form>
    </div>
  );
};
