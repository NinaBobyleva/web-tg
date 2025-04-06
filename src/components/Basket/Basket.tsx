import { useNavigate } from "react-router-dom";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import { ButtonRed } from "../ButtonRed/ButtonRed";
import styles from "./basket.module.css";
import { paths } from "../../paths";
import { useEffect, useState } from "react";
import { getOrder } from "../../api/apiMaterials";
import { CategoriesBasketType } from "../../types/types";
import { BasketCategories } from "../BasketCategories/BasketCategories";

export const Basket = () => {
  // const [basketCategories, setBasketCategories] = useState<OrdersType[]>([]);
  const [order, setOrder] = useState<CategoriesBasketType[]>([]);
  // console.log("order", order);
  const id = 24;
  // const order: OrdersType | undefined = basketCategories.find((el) => el.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    // getAllBasketMaterials()
    //   .then((data) => {
    //     setBasketCategories(data.results);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => {});

      getOrder({id})
      .then((data) => {
        setOrder(data.materials_by_category);
      })
  }, []);
  return (
    <div className={styles.wrapperBasket}>
      <div className={styles.headerBasket}>
        <h2 className={styles.title}>Ваш заказ</h2>
        <div className={styles.btnBox}>
          <ButtonGray onClick={() => navigate(paths.HOME)} title="Назад" />
          <ButtonRed title="Отправить заказ" />
        </div>
      </div>
      <ul className={styles.list}>
        {order.map((el) => (
          <BasketCategories key={el.id} setOrder={setOrder} materialsBasket={el.materials} title={el.name} orderId={id} />
        ))}
      </ul>
    </div>
  );
};
