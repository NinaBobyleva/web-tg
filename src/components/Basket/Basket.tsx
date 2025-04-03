import { useNavigate } from "react-router-dom";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import { ButtonRed } from "../ButtonRed/ButtonRed";
import styles from "./basket.module.css";
import { paths } from "../../paths";
import { useEffect, useState } from "react";
import { getAllBasketMaterials } from "../../api/apiMaterials";
import { CategoriesType } from "../../types/types";

export const Basket = () => {
  const [basketCategories, setBasketCategories] = useState<CategoriesType[]>([]);
  console.log(basketCategories);
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
    </div>
  );
};
