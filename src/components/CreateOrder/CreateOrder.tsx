import { useEffect, useState } from "react";
import { ButtonGray } from "../ButtonGray/ButtonGray";
import styles from "./createOrder.module.css";
import { getAllAddresses } from "../../api/apiAddresses";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  setAddresses,
  setCurrentAddress,
  setCurrentOrder,
  setCurrentOrderId,
  setOrders,
} from "../../store/features/materialsSlice";
import { AddressList } from "../AddressList/AddressList";
import { useNavigate } from "react-router-dom";
import { paths } from "../../paths";
import { getOrders, postOrder } from "../../api/apiOrders";
import { newOrder } from "../../types/types";
import { formatAddress } from "../../helpers/formatAddress";

export const CreateOrder = ({ user }: { user: number | undefined }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  //   console.log(isOpen);
  const [inputValueAddress, setInputValueAddress] = useState("");
  //   console.log(inputValueAddress);
  const [addressId, setAddressId] = useState(0);
  const addresses = useAppSelector((state) => state.materials.addresses);
  //   console.log("addresses", addresses);
  const [inputValueDate, setInputValueDate] = useState("");

  useEffect(() => {
    if (inputValueAddress.length !== 0 && inputValueDate.length !== 0) {
      setIsDisabled(false);
    }
  }, [inputValueAddress, inputValueDate]);

  const handleAddNewOrder = async () => {
    const newOrder: newOrder = {
      address: addressId,
      user: user,
      status: "draft",
      comment: "",
      date_of_delivery: inputValueDate,
    };

    await postOrder(newOrder)
      .then((data) => {
        dispatch(setCurrentOrderId(data.id));
        dispatch(setCurrentOrder(data));
        const longAddress = formatAddress(data.address);
        dispatch(setCurrentAddress(longAddress));
        dispatch(setCurrentOrderId(data.id));
      })
      .catch((error) => {
        console.log(error);
      });

    await getOrders().then((res) => {
      dispatch(setOrders(res.results));
    });

    navigate(paths.UPDATE);
  };

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
                  address={el}
                  id={el.id}
                  setIsOpen={setIsOpen}
                  setAddressId={setAddressId}
                  setInputValueAddress={setInputValueAddress}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className={styles.createOrderDateBox}>
        <h3 className={styles.createOrderTitle}>Желаемая дата доставки:</h3>
        <input
          onChange={(e) => setInputValueDate(e.target.value)}
          className={styles.createOrderInputDate}
          type="date"
        />
      </div>
      <ButtonGray isDisabled={isDisabled} onClick={handleAddNewOrder} title="Создать заказ" />
    </div>
  );
};
