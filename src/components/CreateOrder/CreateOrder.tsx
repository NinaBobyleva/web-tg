import { useState } from "react";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import styles from "./createOrder.module.css";
import { getAllAddresses } from "../../api/apiMaterials";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setAddresses } from "../../store/features/materialsSlice";
import { AddressList } from "../AddressList/AddressList";

export const CreateOrder = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const addresses = useAppSelector((state) => state.materials.addresses);
  console.log("addresses", addresses);

  const handleAddresses = () => {
    if (!isOpen) {
      getAllAddresses().then((res) => {
        dispatch(setAddresses(res.results));
      });
    }
  };
  return (
    <div className={styles.createOrderBox}>
      <div className={styles.createOrderAddressBox}>
        <h3 className={styles.createOrderTitle}>Адрес:</h3>
        <input className={styles.createOrderInput} type="text" placeholder="Выберите адрес" />
        <img
          onClick={() => {
            handleAddresses();
            setIsOpen((prev) => !prev);
          }}
          className={styles.createOrderImg}
          src="./img/polygon.svg"
          alt="#"
        />
        {isOpen && (
          <ul className={styles.addressList}>
            {addresses?.map((el) => (
              <AddressList
                key={el.id}
                city={el.city}
                street={el.street}
                house={el.house}
                building={el.building}
                office={el.office}
                floor={el.floor}
              />
            ))}
          </ul>
        )}
      </div>
      <div className={styles.createOrderDateBox}>
        <h3 className={styles.createOrderTitle}>Желаемая дата доставки:</h3>
        <input className={styles.createOrderInput} type="date" />
      </div>
      <ButtonGray title="Создать заказ" />
    </div>
  );
};
