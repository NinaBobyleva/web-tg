import { MaterialsType } from "../../types/types";
import styles from "./categories.module.css";
import { Materials } from "../Materials/Materials";

type CategoriesProp = {
  materials: MaterialsType[];
  name: string;
  handleCategoryOpen: (categoryName: string) => void;
  isActive: boolean;
};

export const Categories = ({ materials, name, handleCategoryOpen, isActive }: CategoriesProp) => {
  return (
    <li className={styles.categoryBox}>
      <div className={styles.box}>
        <img
          onClick={() => handleCategoryOpen(name)}
          className={isActive ? styles.elementOpen : styles.element}
          src="./img/Polygon.svg"
          alt="#"
        />
        <p className={styles.category}>{name}</p>
      </div>
      <ul className={styles.listMaterials}>
        {isActive &&
          materials.map((el) => (
            <Materials
              key={el.id}
              name={el.name}
              img_t={el.image_thumbnail_url}
              img_l={el.image_large_url}
            />
          ))}
      </ul>
    </li>
  );
};
