import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./materials.module.css";

type MaterialsProp = {
  name: string;
  img_t: string;
  img_l: string;
  isActiveMaterial: boolean;
  handleImageOpen: (materialName: string) => void;
};

export const Materials = ({ name, img_t, img_l, isActiveMaterial, handleImageOpen }: MaterialsProp) => {
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <div className={styles.li}>
      {isActiveMaterial ? (
        <div className={styles.imageBox}>
          <img className={styles.image} src={img_l} alt="material" />
          <p className={styles.imageName}>{name}</p>
          <img onClick={() => handleImageOpen("")} className={styles.imageClose} src="./img/close.svg" alt="close" />
        </div>
      ) : null}
      <li className={styles.materialsBox}>
        <div className={styles.materialNameBox}>
          <img className={styles.materialImg} src={img_t} alt="material" />
          <p className={styles.material}>{name}</p>
        </div>
        <div className={styles.buttonBox}>
          <div className={styles.buttonQuantityBox}>
            <Button onClick={() => quantity !== 0 && setQuantity(quantity - 1)} title="-" />
            <input type="number" className={styles.input} defaultValue={quantity === 0 ? "" : quantity} />
            <Button onClick={() => setQuantity(quantity + 1)} title="+" />
          </div>
          <div onClick={() => handleImageOpen(name)} className={styles.materialBtn}>
            <div className={styles.btn}></div>
            <div className={styles.btn}></div>
            <div className={styles.btn}></div>
          </div>
        </div>
      </li>
    </div>
  );
};
