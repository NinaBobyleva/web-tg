import { useNavigate } from "react-router-dom";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import { ButtonRed } from "../ButtonRed/ButtonRed";
import styles from "./basket.module.css";
import { paths } from "../../paths";
import { useEffect } from "react";
import { getOrder } from "../../api/apiMaterials";
import { BasketCategories } from "../BasketCategories/BasketCategories";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setError, setOrder } from "../../store/features/materialsSlice";

export const Basket = () => {
  const dispatch = useAppDispatch();
  const { order, error } = useAppSelector((state) => state.materials);
  console.log("order", order);
  const id = 24;
  const navigate = useNavigate();

  useEffect(() => {
    getOrder({ id })
      .then((data) => {
        dispatch(setOrder(data.materials_by_category));
      })
      .catch((error) => {
        dispatch(setError(error.message));
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
      {!error ? (
        <ul className={styles.list}>
          {order.map((el) => (
            order.length !== 0 ? <BasketCategories key={el.id} materialsBasket={el.materials} title={el.name} orderId={id} /> : <p className={styles.error}>В заказе отсутствуют позиции</p>
          ))}
        </ul>
      ) : (
        <p className={styles.error}>{error}</p>
      )}
    </div>
  );
};
