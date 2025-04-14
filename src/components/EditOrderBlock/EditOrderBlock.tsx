import { useNavigate } from "react-router-dom";
import { ButtonRed } from "../ButtonRed/ButtonRed";
import { Input } from "../Input/Input";
import styles from "./editOrderBlock.module.css";
import { paths } from "../../paths";
import { useAppSelector } from "../../store/store";
import { useDeleteOrder } from "../../hooks/useDeleteOrder";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const EditOrderBlock = () => {
  const { currentAddress, currentOrderId } = useAppSelector((state) => state.materials);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const navigate = useNavigate();

  const handleDeleteOrder = useDeleteOrder({ id: currentOrderId });
  return (
    <div className={styles.editBlock}>
      {isActiveModal && (
        <Modal title="Заказ удален" />
      )}
      <h1 className={styles.title}>Редактирование заказа №{currentOrderId}</h1>
      <div className={styles.inputBox}>
        <span>Адрес:</span>
        <Input type="text" value={currentAddress && currentAddress} />
      </div>
      <div className={styles.buttonBox}>
        <ButtonRed
          onClick={() => {
            handleDeleteOrder();
            setIsActiveModal(true);
            setTimeout(() => {
              setIsActiveModal(false);
              navigate(paths.HOME);
            }, 1500);
          }}
          title="Удалить заказ"
        />
      </div>
    </div>
  );
};
