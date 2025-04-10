import { useEffect, useState } from "react";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import styles from "./createOrder.module.css";
import { getAllAddresses } from "../../api/apiMaterials";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setAddresses, setCurrentAddress } from "../../store/features/materialsSlice";
import { AddressList } from "../AddressList/AddressList";
import { useNavigate } from "react-router-dom";
import { paths } from "../../paths";
import { postOrder } from "../../api/apiOrders";
import { newOrder } from "../../types/types";

export const CreateOrder = ({user}: {user: number | undefined}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  //   console.log(isOpen);
  const [inputValueAddress, setInputValueAddress] = useState("");
  //   console.log(inputValueAddress);
  const [addressId, setAddressId] = useState(0);
  const addresses = useAppSelector((state) => state.materials.addresses);
  //   console.log("addresses", addresses);
  const [inputValueDate, setInputValueDate] = useState("");

  const handleAddNewOrder = () => {
    const newOrder: newOrder = {
      address: addressId,
      user: user,
      status: "draft",
      comment: "",
      date_of_delivery: inputValueDate
    }

    console.log(newOrder);

    postOrder(newOrder)
    .then((date) => {
      console.log(date);
    })

    navigate(paths.UPDATE);
  }

  useEffect(() => {
    const value = addresses.find((el) => el.id === addressId);
    if (!value) {
      return;
    }
    setInputValueAddress(
      `${value?.city}, ${value?.street}, ${value?.house}${value?.building}, ${value?.office}, ${value?.floor}`,
    );
    dispatch(
      setCurrentAddress(
        `${value?.city}, ${value?.street}, ${value?.house}${value?.building}, ${value?.office}, ${value?.floor}`,
      ),
    );
  }, [addressId, addresses, dispatch]);

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
        <input onChange={(e) => setInputValueDate(e.target.value)} className={styles.createOrderInputDate} type="date" />
      </div>
      <ButtonGray onClick={handleAddNewOrder} title="Создать заказ" />
    </div>
  );
};
