import { AddressType } from "../../types/types";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import { ButtonRed } from "../ButtonRed/ButtonRed";
import styles from "./orderItem.module.css";

type OrderItemProp = {
    orderId: number;
    address: AddressType;
}

export const OrderItem = ({orderId, address}: OrderItemProp) => {
    console.log(address);
    return (
        <li className={styles.orderItemList}>
            <div className={styles.orderItemBox}>
                <p className={styles.orderItemId}>№{orderId}</p>
                <p className={styles.orderItemAddress}>{address.street}, {address.house}</p>
            </div>
            <div className={styles.orderBtnBox}>
                <ButtonGray title="Редактировать" />
                <ButtonRed title="Удалить" />
            </div>
        </li>
    );
}