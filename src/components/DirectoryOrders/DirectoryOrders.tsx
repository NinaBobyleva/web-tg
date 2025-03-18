import { useEffect, useState } from "react";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import styles from "./directoryOrders.module.css";
import { getAllMaterials } from "../../api/apiMaterials";
import { Categories } from "../Categories/Categories";
import { CategoriesType } from "../../types/types";

export const DirectoryOrders = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeMaterial, setActiveMaterial] = useState<string | null>(null);

  const handleCategoryOpen = (categoryName: string) => {
    setActiveCategory((prev) => (prev === categoryName ? null : categoryName));
    setActiveMaterial(null);
  };

  useEffect(() => {
    setIsLoad(true);
    getAllMaterials()
      .then((data) => {
        setCategories(data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoad(false);
      });
  }, []);
  return (
    <div>
      <h2 className={styles.title}>Выбрать из справочника</h2>
      <div className={styles.buttonBox}>
        <ButtonGray title="Добавить выбранное" />
        <img className={styles.img} src="./img/basket.svg" alt="" />
      </div>
      {isLoad ? (
        <p className={styles.loadMassage}>Данные загружаются</p>
      ) : (
        <ul className={styles.list}>
          {categories.map((el) => (
            <Categories
              key={el.id}
              materials={el.materials}
              handleCategoryOpen={handleCategoryOpen}
              isActive={activeCategory === el.name}
              activeMaterial={activeMaterial}
              setActiveMaterial={setActiveMaterial}
              name={el.name}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
