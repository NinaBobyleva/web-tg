import { useNavigate } from "react-router-dom";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import { ButtonRed } from "../ButtonRed/ButtonRed";
import styles from "./basket.module.css";
import { paths } from "../../paths";
import { useEffect } from "react";
import { getOrder } from "../../api/apiMaterials";
import { BasketCategories } from "../BasketCategories/BasketCategories";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setOrder } from "../../store/features/materialsSlice";

export const Basket = () => {
  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.materials.order);
  // console.log("order", order);
  const id = 24;
  const navigate = useNavigate();

  useEffect(() => {
    getOrder({ id }).then((data) => {
      dispatch(setOrder(data.materials_by_category));
    });
  }, [dispatch]);
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
          <BasketCategories key={el.id} materialsBasket={el.materials} title={el.name} orderId={id} />
        ))}
      </ul>
    </div>
  );
};
