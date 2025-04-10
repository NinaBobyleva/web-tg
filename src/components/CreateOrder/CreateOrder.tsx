import { useEffect, useState } from "react";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import styles from "./createOrder.module.css";
import { getAllAddresses } from "../../api/apiMaterials";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setAddresses, setCurrentAddress } from "../../store/features/materialsSlice";
import { AddressList } from "../AddressList/AddressList";
import { useNavigate } from "react-router-dom";
import { paths } from "../../paths";

export const CreateOrder = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  //   console.log(isOpen);
  const [inputValueAddress, setInputValueAddress] = useState("");
//   console.log(inputValueAddress);
  const [addressId, setAddressId] = useState(0);
  const addresses = useAppSelector((state) => state.materials.addresses);
  //   console.log("addresses", addresses);
  useEffect(() => {
    const value = addresses.find((el) => el.id === addressId);
    // console.log(value);
    if (!value) {
        return;
    }
    setInputValueAddress(
      `${value?.city}, ${value?.street}, ${value?.house}${value?.building}, ${value?.office}, ${value?.floor}`,
    );
    dispatch(setCurrentAddress(`${value?.city}, ${value?.street}, ${value?.house}${value?.building}, ${value?.office}, ${value?.floor}`))
  }, [addressId, addresses, dispatch]);

  const handleAddresses = () => {
    if (!isOpen) {
      getAllAddresses().then((res) => {
        dispatch(setAddresses(res.results));
      });
    }
  };

  const handleAddOrder = () => {
    navigate(paths.UPDATE);
  };
  return (
    <div className={styles.createOrderBox}>
      <div className={styles.createOrderAddressBox}>
        <h3 className={styles.createOrderTitle}>Адрес:</h3>
        <input
          className={styles.createOrderInput}
          type="text"
          readOnly
          value={inputValueAddress && inputValueAddress}
          placeholder="Выберите адрес"
        />
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
          <div className={styles.addressListBlock}>
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
                  id={el.id}
                  setIsOpen={setIsOpen}
                  setAddressId={setAddressId}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className={styles.createOrderDateBox}>
        <h3 className={styles.createOrderTitle}>Желаемая дата доставки:</h3>
        <input className={styles.createOrderInputDate} type="date" />
      </div>
      <ButtonGray onClick={handleAddOrder} title="Создать заказ" />
    </div>
  );
};
