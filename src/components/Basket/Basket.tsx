import { useNavigate } from "react-router-dom";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import { ButtonRed } from "../ButtonRed/ButtonRed";
import styles from "./basket.module.css";
import { paths } from "../../paths";
import { useEffect, useState } from "react";
import { getAllBasketMaterials } from "../../api/apiMaterials";
import { CategoriesBasketType, OrdersType } from "../../types/types";
import { BasketCategories } from "../BasketCategories/BasketCategories";

export const Basket = () => {
  const [basketCategories, setBasketCategories] = useState<OrdersType[]>([]);
  const id = 46;
  console.log(basketCategories);
  const order: OrdersType | undefined = basketCategories.find((el) => el.id === id);
  const orderId: CategoriesBasketType[] | undefined = order?.materials_by_category;
  console.log(orderId);
  const navigate = useNavigate();

  useEffect(() => {
    getAllBasketMaterials()
      .then((data) => {
        setBasketCategories(data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
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
      <ul>
        {orderId?.map((el) => (
          <BasketCategories key={el.id} materialsBasket={el.materials} title={el.name} />
        ))}
      </ul>
    </div>
  );
};
