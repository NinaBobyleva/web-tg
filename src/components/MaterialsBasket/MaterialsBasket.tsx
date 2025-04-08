import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import styles from "./materialsBasket.module.css";
import { deleteOrderItem, editOrderItem, getOrder } from "../../api/apiMaterials";
import { useAppDispatch } from "../../store/store";
import { setOrder } from "../../store/features/materialsSlice";

type MaterialsBasketProp = {
  title: string;
  img: string;
  quantity: number;
  id: number;
  orderId: number;
};

export const MaterialsBasket = ({ title, img, quantity, id, orderId }: MaterialsBasketProp) => {
  const [value, setValue] = useState(quantity.toString());
  const dispatch = useAppDispatch();

  useEffect(() => {
    editOrderItem({ id, quantity: Number(value) }).then((res) => res);
  }, [value, id]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (/^\d*$/.test(newValue)) {
      setValue(newValue);
    }
  };

  const handleBlur = () => {
    const numValue = parseInt(value) || 1;
    setValue(numValue.toString());
  };

  const handleIncrement = () => {
    const newValue = (parseInt(value) || 0) + 1;
    setValue(newValue.toString());
  };

  const handleDecrement = () => {
    const current = parseInt(value) || 1;
    const newValue = current > 1 ? current - 1 : 1;
    setValue(newValue.toString());
  };

  const handleDeleteMaterial = async () => {
    await deleteOrderItem({ id }).then();
    await getOrder({ id: orderId }).then((data) => {
      dispatch(setOrder(data.materials_by_category));
    })
    .catch((error) => {
      console.log(error);
    })
  };

  return (
    <li className={styles.materialsBox}>
      <div className={styles.materialNameBox}>
        <img className={styles.materialImg} src={img} alt="material" />
        <p className={styles.material}>{title}</p>
      </div>
      <div className={styles.buttonBox}>
        <div className={styles.buttonQuantityBox}>
          <Button title="-" onClick={handleDecrement} />
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className={styles.buttonBoxInput}
            onBlur={handleBlur}
            onChange={handleInputChange}
            value={value}
          />
          <Button title="+" onClick={handleIncrement} />
        </div>
        <img onClick={handleDeleteMaterial} className={styles.buttonBoxImg} src="./img/close.svg" alt="close" />
      </div>
    </li>
  );
};
