import { useEffect, useState } from "react";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import styles from "./directoryOrders.module.css";
import { getAllMaterials } from "../../api/apiMaterials";
import { Categories } from "../Categories/Categories";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../paths";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setCategories, setError, setIsLoad } from "../../store/features/materialsSlice";
import { useMaterials } from "../../context/MaterialContext";
import { postOrderItem } from "../../api/apiOrderItems";
import { setItem } from "../../store/features/telegramStorageSlice";

export const DirectoryOrders = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentOrder = useAppSelector((state) => state.telegramStorage.data);
  const { categories, isLoad } = useAppSelector((state) => state.materials);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeMaterial, setActiveMaterial] = useState<string | null>(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const { materials, setMaterials } = useMaterials();

  useEffect(() => {
    if (materials.length !== 0) {
      setIsDisabled(false);
    } else if (materials.length === 0) {
      setIsDisabled(true);
    }
  }, [materials]);

  const handleSubmitMaterials = () => {
    if (!currentOrder?.id) {
      return;
    }
    const payload = {
      order: currentOrder?.id,
      order_items: materials,
    };

    if (!payload) {
      return;
    }
    postOrderItem(payload)
      .then((data) => {
        dispatch(setItem(data));
        setMaterials([]);
      })
      .catch((error) => {
        dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch(setError(""));
      });

    navigate(paths.BASKET);
  };

  const handleCategoryOpen = (categoryName: string) => {
    setActiveCategory((prev) => (prev === categoryName ? null : categoryName));
    setActiveMaterial(null);
  };

  useEffect(() => {
    dispatch(setIsLoad(true));
    getAllMaterials()
      .then((data) => {
        dispatch(setCategories(data.results));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch(setIsLoad(false));
        dispatch(setError(""));
      });
  }, [dispatch]);

  return (
    <div>
      <h2 className={styles.title}>Выбрать из справочника</h2>
      <div className={styles.buttonBox}>
        <ButtonGray isDisabled={isDisabled} onClick={handleSubmitMaterials} title="Добавить выбранное" />
        <Link to={paths.BASKET}>
          <img className={styles.img} src="./img/basket.svg" alt="" />
        </Link>
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
