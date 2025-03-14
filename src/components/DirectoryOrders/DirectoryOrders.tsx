import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import styles from "./directoryOrders.module.css";
import { getAllMaterials } from "../../api/apiMaterials";
import { Categories } from "../Categories/Categories";
import { CategoriesType } from "../../types/types";

export const DirectoryOrders = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  console.log(categories);

  useEffect(() => {
    getAllMaterials()
    .then((data) => {
        setCategories(data.results);
    })
  }, [])
  return (
    <div>
      <h2 className={styles.title}>Выбрать из справочника</h2>
      <div className={styles.buttonBox}>
        <Button title="Добавить выбранное" />
        <img className={styles.img} src="./img/basket.svg" alt="" />
      </div>
      <ul className={styles.list}>
        {categories.map((el) => (
            <Categories key={el.id} materials={el.materials} name={el.name} />
        ))}
      </ul>
    </div>
  );
};
