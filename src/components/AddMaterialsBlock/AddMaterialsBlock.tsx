import { useState } from "react";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import styles from "./addMaterialsBlock.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { postOrderItem } from "../../api/apiOrderItems";
import { setCurrentOrder } from "../../store/features/materialsSlice";

export const AddMaterialsBlock = () => {
  const dispatch = useAppDispatch();
  const orderId = useAppSelector((state) => state.materials.currentOrderId);
  const [inputValue, setInputValue] = useState({
    material: "",
    quantity: "",
  });

  console.log(inputValue);

  const onChangedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleAddInputOrder = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newOrder = [
      {
        material: inputValue.material,
        quantity: Number(inputValue.quantity),
      },
    ];

    const payload = {
      order: orderId,
      order_items: newOrder
    }

    postOrderItem(payload)
      .then((data) => {
        dispatch(setCurrentOrder(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2 className={styles.title}>Добавить материалы</h2>
      <div className={styles.formBox}>
        <div className={styles.inputBox}>
          <input
            onChange={onChangedInput}
            value={inputValue.material}
            name="material"
            className={styles.inputMaterial}
            type="text"
          />
          <input
            onChange={onChangedInput}
            value={inputValue.quantity}
            name="quantity"
            className={styles.inputQuantity}
            type="number"
          />
        </div>
        <ButtonGray onClick={handleAddInputOrder} title="Добавить" />
      </div>
    </div>
  );
};
