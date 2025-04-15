import { MaterialsType } from "../../types/types";
import styles from "./categories.module.css";
import { Materials } from "../Materials/Materials";

type CategoriesProp = {
  materials: MaterialsType[];
  name: string;
  handleCategoryOpen: (categoryName: string) => void;
  isActive: boolean;
  activeMaterial: string | null;
  setActiveMaterial: React.Dispatch<React.SetStateAction<string | null>>;
};

export const Categories = ({
  materials,
  name,
  handleCategoryOpen,
  isActive,
  activeMaterial,
  setActiveMaterial
}: CategoriesProp) => {
  const handleImageOpen = (materialName: string) => {
    setActiveMaterial((prev) => (prev === materialName ? null : materialName));
  };

  return (
    <li className={styles.categoryBox}>
      <div onClick={() => handleCategoryOpen(name)} className={styles.box}>
        <img className={isActive ? styles.elementOpen : styles.element} src="./img/polygon.svg" alt="#" />
        <p className={styles.category}>{name}</p>
      </div>
      <ul className={styles.listMaterials}>
        {isActive &&
          materials.map((el) => (
            <Materials
              key={el.id}
              name={el.name}
              isActiveMaterial={activeMaterial === el.name}
              handleImageOpen={handleImageOpen}
              img_t={el.image_thumbnail_url}
              img_l={el.image_large_url}
              url={el.url}
            />
          ))}
      </ul>
    </li>
  );
};
