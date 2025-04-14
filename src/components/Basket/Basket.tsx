import { useNavigate } from "react-router-dom";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import { ButtonRed } from "../ButtonRed/ButtonRed";
import styles from "./basket.module.css";
import { paths } from "../../paths";
import { BasketCategories } from "../BasketCategories/BasketCategories";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { EditOrderBlock } from "../EditOrderBlock/EditOrderBlock";
import { editOrder } from "../../api/apiOrders";
import { StatusType } from "../../types/types";
import { useState } from "react";
import { setError } from "../../store/features/materialsSlice";

export const Basket = () => {
  const dispatch = useAppDispatch();
  const { currentOrder, currentOrderId, error } = useAppSelector((state) => state.materials);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const navigate = useNavigate();

  const handleEditOrder = () => {
    const status: StatusType = {
      status: "in_progress",
    };
    editOrder({ id: currentOrderId, status })
      .then(() => {
        setIsActiveModal(true);
        setTimeout(() => {
          setIsActiveModal(false);
          navigate(paths.HOME);
        }, 2000);
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };

  return (
    <>
      <EditOrderBlock />
      <div className={styles.wrapperBasket}>
        {isActiveModal && (
          <div className={styles.modalBox}>
            <p className={styles.modalTitle}>Заказ успешно отправлен</p>
            <img className={styles.modalImg} src="./img/icons-completed.svg" alt="completed" />
          </div>
        )}
        <div className={styles.headerBasket}>
          <h2 className={styles.title}>Ваш заказ</h2>
          <div className={styles.btnBox}>
            <ButtonGray onClick={() => navigate(paths.UPDATE)} title="Назад" />
            <ButtonRed onClick={handleEditOrder} title="Отправить заказ" />
          </div>
        </div>
        {!error ? (
          <ul className={styles.list}>
            {currentOrder?.materials_by_category.map((el) => (
              <BasketCategories key={el.id} materialsBasket={el.materials} title={el.name} orderId={el.id} />
            ))}
          </ul>
        ) : (
          <p className={styles.error}>{error}</p>
        )}
      </div>
    </>
  );
};
