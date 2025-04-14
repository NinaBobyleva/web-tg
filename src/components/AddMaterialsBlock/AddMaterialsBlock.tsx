import { useEffect, useState } from "react";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import styles from "./addMaterialsBlock.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { postOrderItem } from "../../api/apiOrderItems";
import { setCurrentOrder } from "../../store/features/materialsSlice";

export const AddMaterialsBlock = () => {
  const dispatch = useAppDispatch();
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [error, setError] = useState("");
  const orderId = useAppSelector((state) => state.materials.currentOrderId);
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputValue, setInputValue] = useState({
    material: "",
    quantity: "",
  });

  const onChangedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  useEffect(() => {
    if (inputValue.material.length !== 0 && inputValue.quantity.length !== 0) {
      setIsDisabled(false);
    }
  }, [inputValue]);

  const handleAddInputOrder = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!orderId) {
      return;
    }
    const newOrder = [
      {
        material: inputValue.material,
        quantity: Number(inputValue.quantity),
      },
    ];

    const payload = {
      order: orderId,
      order_items: newOrder,
    };

    postOrderItem(payload)
      .then((data) => {
        dispatch(setCurrentOrder(data));
        setIsActiveModal(true);
        setTimeout(() => {
          setIsActiveModal(false);
        }, 2000);
      })
      .catch((error) => {
        setError(error);
      });
    setInputValue({
      material: "",
      quantity: "",
    });
  };
  return (
    <div>
      <h2 className={styles.title}>Добавить материалы</h2>
      {isActiveModal && (
        <div className={styles.modalBox}>
          <p className={styles.modalTitle}>Материал добавлен в корзину</p>
          <img className={styles.modalImg} src="./img/icons-completed.svg" alt="completed" />
        </div>
      )}
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
        <ButtonGray isDisabled={isDisabled} onClick={handleAddInputOrder} title="Добавить" />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
