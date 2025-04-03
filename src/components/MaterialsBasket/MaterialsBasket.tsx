import { Button } from "../Button/Button";
import styles from "./materialsBasket.module.css";

type MaterialsBasketProp = {
  title: string;
  img: string;
  quantity: number;
};

export const MaterialsBasket = ({ title, img, quantity }: MaterialsBasketProp) => {
  return (
    <div className={styles.li}>
      <li className={styles.materialsBox}>
        <div className={styles.materialNameBox}>
          <img className={styles.materialImg} src={img} alt="material" />
          <p className={styles.material}>{title}</p>
        </div>
        <div className={styles.buttonBox}>
          <div className={styles.buttonQuantityBox}>
            <Button title="-" />
            <input type="number" className={styles.input} defaultValue={quantity} />
            <Button title="+" />
          </div>
        </div>
      </li>
    </div>
  );
};
