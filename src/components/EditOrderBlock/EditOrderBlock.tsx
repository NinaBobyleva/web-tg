import { useNavigate } from "react-router-dom";
import { deleteOrder } from "../../api/apiMaterials";
// import { useAppDispatch } from "../../store/store";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import { ButtonRed } from "../ButtonRed/ButtonRed";
import { Input } from "../Input/Input";
import styles from "./editOrderBlock.module.css";
import { paths } from "../../paths";

export const EditOrderBlock = () => {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const id = 39;
  const handleDeleteOrder = () => {
    deleteOrder({ id }).then((res) => res);
  };
  return (
    <div className={styles.editBlock}>
      <h1 className={styles.title}>Редактирование заказа №46</h1>
      <div className={styles.inputBox}>
        <span>Адрес:</span>
        <Input type="text" />
      </div>
      <div className={styles.buttonBox}>
        <ButtonGray title="Обновить адрес" />
        <ButtonRed onClick={() => {
          handleDeleteOrder();
          navigate(paths.HOME);
        }} title="Удалить заказ" />
      </div>
    </div>
  );
};
