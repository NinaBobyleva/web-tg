import { useEffect, useState } from "react";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import styles from "./addMaterialsBlock.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { postOrderItem } from "../../api/apiOrderItems";
import { setError } from "../../store/features/materialsSlice";
import { Modal } from "../Modal/Modal";
import { setItem } from "../../store/features/telegramStorageSlice";

export const AddMaterialsBlock = () => {
  const dispatch = useAppDispatch();
  const [isActiveModal, setIsActiveModal] = useState(false);
  const currentOrder = useAppSelector((state) => state.telegramStorage.data);
  const { error } = useAppSelector((state) => state.materials);
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

    if (!currentOrder?.id) {
      return;
    }
    const newOrder = [
      {
        material: inputValue.material,
        quantity: Number(inputValue.quantity),
      },
    ];

    const payload = {
      order: currentOrder.id,
      order_items: newOrder,
    };

    postOrderItem(payload)
      .then((data) => {
        dispatch(setItem(data));
        setIsActiveModal(true);
        setInputValue({
          material: "",
          quantity: "",
        });
        setTimeout(() => {
          setIsActiveModal(false);
        }, 2000);
      })
      .catch((error) => {
        dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch(setError(""));
      });
  };
  return (
    <div className={styles.addMaterialBox}>
      {isActiveModal && <Modal title="Материал добавлен в корзину" />}
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
        <ButtonGray isDisabled={isDisabled} onClick={handleAddInputOrder} title="Добавить" />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
