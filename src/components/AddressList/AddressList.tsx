import styles from "./addressList.module.css";

type AddressListProp = {
  city: string;
  street: string;
  house: string;
  building: string;
  office: string;
  floor: string;
};

export const AddressList = ({ city, street, house, building, office, floor }: AddressListProp) => {
  console.log(1);
  return (
    <li className={styles.addressListBox}>
      <span>{city}, {street}, {house}{building}, {office}, {floor}</span>
    </li>
  );
};
