import { useEffect } from "react";
import styles from "./orders.module.css";
import { getOrders } from "../../api/apiOrders";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setError, setOrders } from "../../store/features/materialsSlice";
import { OrderItem } from "../OrderItem/OrderItem";
import { retrieveLaunchParams } from '@telegram-apps/sdk';
import { CreateOrder } from "../CreateOrder/CreateOrder";
import { postUser } from "../../api/apiUser";
import { setUser } from "../../store/features/userSlice";

export const Orders = () => {
  const { tgWebAppData } = retrieveLaunchParams();
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.materials.orders);
  // console.log("orders", orders);
  const user = useAppSelector((state) => state.user.user);
  const userOrders = orders.filter((el) => el.user !== null && el.user.id === user?.id && el.status === "draft");
  // console.log("userOrders", userOrders);

  useEffect(() => {
    getOrders()
      .then((data) => {
        dispatch(setOrders(data.results));
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  }, [dispatch]);

  useEffect(() => {
    const userData = {
      id: tgWebAppData?.user?.id,
      firstName: tgWebAppData?.user?.first_name,
      lastName: tgWebAppData?.user?.last_name,
      username: tgWebAppData?.user?.username,
    };

    postUser(userData)
      .then((res) => {
        dispatch(setUser(res));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);
  return (
    <div className={styles.ordersBox}>
      <h1 className={styles.ordersTitle}>Ваши заказы</h1>
      <CreateOrder user={user?.id} />
      <ul className={styles.OrderItemBlock}>
        {userOrders.map((el) =>
          userOrders.length !== 0 ? (
            <OrderItem
              key={el.id}
              orderId={el.id}
              address={el.address}
              itemsCount={el.items_count}
              totalQuantity={el.total_quantity}
            />
          ) : (
            <p className={styles.noOrders}>У вас пока нет заказов</p>
          ),
        )}
      </ul>
    </div>
  );
};
