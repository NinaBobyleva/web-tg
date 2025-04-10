import { useEffect } from "react";
import styles from "./orders.module.css";
import { getOrders } from "../../api/apiOrders";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setOrders } from "../../store/features/materialsSlice";
import { OrderItem } from "../OrderItem/OrderItem";
import { retrieveLaunchParams } from "@telegram-apps/bridge";
import { CreateOrder } from "../CreateOrder/CreateOrder";

export const Orders = () => {
  const { tgWebAppData } = retrieveLaunchParams();
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.materials.orders);
  const ordersUser = orders.filter((el) => el.user !== null && el.user.email === tgWebAppData?.user?.username);
  const user = ordersUser.find((el) => el.user);
  // console.log("orders", orders);
  console.log("ordersUser", ordersUser);

  useEffect(() => {
    getOrders().then((data) => {
      // console.log(data.results);
      dispatch(setOrders(data.results));
    });
  }, [dispatch]);
  return (
    <div className={styles.ordersBox}>
      <h1 className={styles.ordersTitle}>Ваши заказы</h1>
      <CreateOrder user={user?.user.id} />
      <ul className={styles.OrderItemBlock}>
        {ordersUser.map((el) => (
          <OrderItem key={el.id} orderId={el.id} address={el.address} itemsCount={el.items_count} totalQuantity={el.total_quantity} />
        ))}
      </ul>
    </div>
  );
};
