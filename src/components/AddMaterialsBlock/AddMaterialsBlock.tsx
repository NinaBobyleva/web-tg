import { ButtonGray } from "../ButtonGray/ButtonGray";
import { Form } from "../Form/Form";
import styles from "./addMaterialsBlock.module.css";

export const AddMaterialsBlock = () => {
  return (
    <div>
      <h2 className={styles.title}>Добавить материалы</h2>
      <Form>
        <div className={styles.formBox}>
          <div className={styles.inputBox}>
            <input className={styles.inputMaterial} type="text" />
            <input className={styles.inputQuantity} type="number" />
          </div>
          <ButtonGray title="Добавить" />
        </div>
      </Form>
    </div>
  );
};
