import { useNavigate } from "react-router-dom";
import { AddressType } from "../../types/types";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import { ButtonRed } from "../ButtonRed/ButtonRed";
import styles from "./orderItem.module.css";
import { paths } from "../../paths";
import { useAppDispatch } from "../../store/store";
import { setError } from "../../store/features/materialsSlice";
import { useDeleteOrder } from "../../hooks/useDeleteOrder";
import { getOrder } from "../../api/apiOrders";
import { setItem } from "../../store/features/telegramStorageSlice";

type OrderItemProp = {
  orderId: number;
  address: AddressType;
  itemsCount: number;
  totalQuantity: number;
};

export const OrderItem = ({ orderId, address, itemsCount, totalQuantity }: OrderItemProp) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleDeleteOrder = useDeleteOrder({ id: orderId });

  const handleEditOrder = () => {
    getOrder({ id: orderId })
      .then((data) => {
        dispatch(setItem(data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch(setError(""));
      });

    navigate(paths.UPDATE);
  };
  return (
    <li className={styles.orderItemList}>
      <div className={styles.orderItemBox}>
        <div className={styles.orderItem}>
          <p className={styles.orderItemId}>№{orderId}</p>
          <p className={styles.orderItemAddress}>
            {address.street}, {address.house}
          </p>
        </div>
        <div>
          <p>Позиций в заказе - {itemsCount}</p>
          <p>Общ. кол-во (шт.) - {totalQuantity}</p>
        </div>
      </div>
      <div className={styles.orderBtnBox}>
        <ButtonGray onClick={handleEditOrder} title="Редактировать" />
        <ButtonRed onClick={handleDeleteOrder} title="Удалить" />
      </div>
    </li>
  );
};
