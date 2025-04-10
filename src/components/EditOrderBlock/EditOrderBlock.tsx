import { useNavigate } from "react-router-dom";
import { deleteOrder } from "../../api/apiOrders";
// import { useAppDispatch } from "../../store/store";
import { ButtonRed } from "../ButtonRed/ButtonRed";
import { Input } from "../Input/Input";
import styles from "./editOrderBlock.module.css";
import { paths } from "../../paths";
import { useAppSelector } from "../../store/store";

export const EditOrderBlock = () => {
  // const dispatch = useAppDispatch();
  const address = useAppSelector((state) => state.materials.currentAddress);
  const navigate = useNavigate();
  const id = 80;
  const handleDeleteOrder = () => {
    deleteOrder({ id }).then((res) => res);
  };
  return (
    <div className={styles.editBlock}>
      <h1 className={styles.title}>Редактирование заказа №{id}</h1>
      <div className={styles.inputBox}>
        <span>Адрес:</span>
        <Input type="text" value={address} />
      </div>
      <div className={styles.buttonBox}>
        <ButtonRed onClick={() => {
          handleDeleteOrder();
          navigate(paths.HOME);
        }} title="Удалить заказ" />
      </div>
    </div>
  );
};
