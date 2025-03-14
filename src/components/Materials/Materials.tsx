import { Button } from "../Button/Button";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import styles from "./materials.module.css";

export const Materials = ({ name }: { name: string }) => {
  return (
    <div className={styles.li}>
      <li className={styles.materialsBox}>
        <p className={styles.material}>{name}</p>
        <div className={styles.buttonBox}>
          <div className={styles.buttonQuantityBox}>
            <Button title="-" />
            <input className={styles.input} />
            <Button title="+" />
          </div>
          <ButtonGray title="Подробнее" />
        </div>
      </li>
    </div>
  );
};
