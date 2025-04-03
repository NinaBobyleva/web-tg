import styles from "./basketCategories.module.css";

export const BasketCategories = () => {
  
  return (
    <li className={styles.basketCategoryBox}>
      <div className={styles.basketBox}>
        <p className={styles.basketCategory}>{}</p>
      </div>
      <ul className={styles.basketListMaterials}></ul>
    </li>
  );
};
