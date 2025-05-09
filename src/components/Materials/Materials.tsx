import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./materials.module.css";
import { useMaterials } from "../../context/MaterialContext";

type MaterialsProp = {
  name: string;
  img_t: string;
  img_l: string;
  isActiveMaterial: boolean;
  handleImageOpen: (materialName: string) => void;
  url: string;
};

export const Materials = ({ name, img_t, img_l, isActiveMaterial, handleImageOpen, url }: MaterialsProp) => {
  const { addMaterial, updateMaterial } = useMaterials();
  const [quantity, setQuantity] = useState<number>(0);

  if (!url) {
    return;
  }

  const handleQuantityChange = (newQuantity: number) => {
    const validatedQuantity = Math.max(0, newQuantity);
    setQuantity(validatedQuantity);

    addMaterial({ material: name, quantity: validatedQuantity });

    // Обновляем материал в общем состоянии
    updateMaterial(name, validatedQuantity);
  };

  return (
    <div className={styles.li}>
      {isActiveMaterial ? (
        <div className={styles.imageBox}>
          <img className={styles.image} src={img_l} alt="material" />
          <p className={styles.imageName}>{name}</p>
          <div className={styles.imageCloseBox}>
            <a href={url} target="_blank"><p>Ссылка на товар</p></a>
            <img onClick={() => handleImageOpen("")} className={styles.imageClose} src="./img/close.svg" alt="close" />
          </div>
        </div>
      ) : null}
      <li className={styles.materialsBox}>
        <div className={styles.materialNameBox}>
          <img className={styles.materialImg} src={img_t} alt="material" />
          <p className={styles.material}>{name}</p>
        </div>
        <div className={styles.buttonBox}>
          <div className={styles.buttonQuantityBox}>
            <Button onClick={() => handleQuantityChange(quantity - 1)} title="-" />
            <input type="number" className={styles.input} defaultValue={quantity === 0 ? "" : quantity} />
            <Button
              onClick={() => {
                handleQuantityChange(quantity + 1);
              }}
              title="+"
            />
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
