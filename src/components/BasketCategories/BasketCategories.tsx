import { Dispatch, SetStateAction } from "react";
import { CategoriesBasketType, MaterialsBasketType } from "../../types/types";
import { MaterialsBasket } from "../MaterialsBasket/MaterialsBasket";
import styles from "./basketCategories.module.css";

type BasketCategoriesProp = {
  materialsBasket: MaterialsBasketType[];
  title: string;
  orderId: number;
  setOrder: Dispatch<SetStateAction<CategoriesBasketType[]>>;
};

export const BasketCategories = ({ materialsBasket, title, orderId, setOrder }: BasketCategoriesProp) => {
  // console.log("materialsBasket", materialsBasket);
  return (
    <li className={styles.basketCategoryBox}>
      <div className={styles.basketBox}>
        <p className={styles.basketCategory}>{title}</p>
      </div>
      <ul className={styles.basketListMaterials}>
        {materialsBasket.map((el) => (
          <MaterialsBasket key={el.id} setOrder={setOrder} title={el.name} img={el.image_thumbnail_url} quantity={el.quantity} id={el.order_item_id} orderId={orderId} />
        ))}
      </ul>
    </li>
  );
};
