import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./materials.module.css";

type MaterialsProp = {
  name: string;
};

export const Materials = ({ name }: MaterialsProp) => {
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <div className={styles.li}>
      <li className={styles.materialsBox}>
        <div className={styles.materialNameBox}>
          <img className={styles.materialImg} src="./img/cement.jpg" alt="material" />
          <p className={styles.material}>{name}</p>
        </div>
        <div className={styles.buttonBox}>
          <div className={styles.buttonQuantityBox}>
            <Button
              onClick={() => quantity !== 0 && setQuantity(quantity - 1)}
              title="-"
            />
            <input
              type="number"
              className={styles.input}
              defaultValue={quantity === 0 ? "" : quantity}
            />
            <Button onClick={() => setQuantity(quantity + 1)} title="+" />
          </div>
          <div className={styles.materialBtn}>
            <div className={styles.btn}></div>
            <div className={styles.btn}></div>
            <div className={styles.btn}></div>
          </div>
        </div>
      </li>
    </div>
  );
};
