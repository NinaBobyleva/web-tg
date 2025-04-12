import { useNavigate } from "react-router-dom";
import { AddressType } from "../../types/types";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import { ButtonRed } from "../ButtonRed/ButtonRed";
import styles from "./orderItem.module.css";
import { paths } from "../../paths";
import { useAppDispatch } from "../../store/store";
import { setCurrentAddress, setCurrentOrderId } from "../../store/features/materialsSlice";
import { useDeleteOrder } from "../../hooks/useDeleteOrder";

type OrderItemProp = {
  orderId: number;
  address: AddressType;
  itemsCount: number;
  totalQuantity: number;
};

export const OrderItem = ({ orderId, address, itemsCount, totalQuantity }: OrderItemProp) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const longAddress = `${address.city}, ${address.street}, ${address.house}${address.building}, ${address.office}, ${address.floor}`;

  const handleDeleteOrder = useDeleteOrder({id: orderId});
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
        <ButtonGray
          onClick={() => {
            navigate(paths.UPDATE);
            dispatch(setCurrentAddress(longAddress));
            dispatch(setCurrentOrderId(orderId));
          }}
          title="Редактировать"
        />
        <ButtonRed onClick={handleDeleteOrder} title="Удалить" />
      </div>
    </li>
  );
};
