import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import styles from "./materialsBasket.module.css";
import { deleteOrderItem, editOrderItem, getOrder } from "../../api/apiMaterials";
import { CategoriesBasketType } from "../../types/types";

type MaterialsBasketProp = {
  title: string;
  img: string;
  quantity: number;
  id: number;
  orderId: number;
  setOrder: Dispatch<SetStateAction<CategoriesBasketType[]>>;
};

export const MaterialsBasket = ({ title, img, quantity, id, orderId, setOrder }: MaterialsBasketProp) => {
  const [quantityCounter, setQuantityCounter] = useState(quantity);
  // console.log("quantityCounter", quantityCounter);

  useEffect(() => {
    editOrderItem({ id, quantityCounter }).then((res) => {
      setQuantityCounter(res.quantity);
    });
  }, [quantityCounter, id, orderId]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      setQuantityCounter(newValue);
    } else if (e.target.value === "") {
      return;
    }
  };

  const handleDeleteMaterial = async () => {
    await deleteOrderItem({ id }).then();
    await getOrder({ id: orderId }).then((data) => {
      console.log(1);
      setOrder(data.materials_by_category);
    });
  };

  return (
    <li className={styles.materialsBox}>
      <div className={styles.materialNameBox}>
        <img className={styles.materialImg} src={img} alt="material" />
        <p className={styles.material}>{title}</p>
      </div>
      <div className={styles.buttonBox}>
        <div className={styles.buttonQuantityBox}>
          <Button title="-" onClick={() => setQuantityCounter((prev) => (prev > 0 ? prev - 1 : 0))} />
          <input type="number" className={styles.buttonBoxInput} onChange={handleInputChange} value={quantityCounter} />
          <Button title="+" onClick={() => setQuantityCounter((prev) => prev + 1)} />
        </div>
        <img onClick={handleDeleteMaterial} className={styles.buttonBoxImg} src="./img/close.svg" alt="close" />
      </div>
    </li>
  );
};
