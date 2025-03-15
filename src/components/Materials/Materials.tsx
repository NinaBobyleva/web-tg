import { useState } from "react";
import { Button } from "../Button/Button";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import styles from "./materials.module.css";

type MaterialsProp = {
  name: string;
  // quantity: number;
  // setQuantity: Dispatch<SetStateAction<number>>;
};

export const Materials = ({ name }: MaterialsProp) => {
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <div className={styles.li}>
      <li className={styles.materialsBox}>
        <p className={styles.material}>{name}</p>
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
          <ButtonGray title="Подробнее" />
        </div>
      </li>
    </div>
  );
};
