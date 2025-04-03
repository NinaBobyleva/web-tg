import { MaterialsBasketType } from "../../types/types";
import { MaterialsBasket } from "../MaterialsBasket/MaterialsBasket";
import styles from "./basketCategories.module.css";

type BasketCategoriesProp = {
    materialsBasket: MaterialsBasketType[];
    title: string;
};

export const BasketCategories = ({ materialsBasket, title }: BasketCategoriesProp) => {
  console.log(materialsBasket);

  return (
    <li className={styles.basketCategoryBox}>
      <div className={styles.basketBox}>
        <p className={styles.basketCategory}>{title}</p>
      </div>
      <ul className={styles.basketListMaterials}>
        {materialsBasket.map((el) => (
            <MaterialsBasket key={el.id} title={el.name} img={el.image_thumbnail_url} quantity={el.quantity} />
        ))}
      </ul>
    </li>
  );
};
