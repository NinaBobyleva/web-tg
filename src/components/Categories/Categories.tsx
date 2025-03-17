import { useState } from "react";
import { MaterialsType } from "../../types/types";
import styles from "./categorias.module.css";
import { Materials } from "../Materials/Materials";

type CategoriesProp = {
  materials: MaterialsType[];
  name: string;
};

export const Categories = ({ materials, name }: CategoriesProp) => {
  const [isOpenCategory, setIsOpenCategory] = useState<boolean>(false);

  return (
    <li className={styles.categoryBox}>
      <div className={styles.box}>
        <img
          onClick={() => setIsOpenCategory((prev) => !prev)}
          className={isOpenCategory ? styles.elementOpen : styles.element}
          src="./img/Polygon.svg"
          alt="#"
        />
        <p className={styles.category}>{name}</p>
      </div>
      <ul className={styles.listMaterials}>
        {isOpenCategory &&
          materials.map((el) => <Materials key={el.id} name={el.name} />)}
      </ul>
    </li>
  );
};
