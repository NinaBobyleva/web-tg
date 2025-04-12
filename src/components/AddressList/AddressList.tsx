import styles from "./addressList.module.css";

type AddressListProp = {
  city: string;
  street: string;
  house: string;
  building: string;
  office: string;
  floor: string;
  id: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAddressId: React.Dispatch<React.SetStateAction<number>>;
};

export const AddressList = ({
  city,
  street,
  house,
  building,
  office,
  floor,
  id,
  setIsOpen,
  setAddressId,
}: AddressListProp) => {
  return (
    <li className={styles.addressListBox}>
      <div
        onClick={() => {
          setIsOpen(false);
          setAddressId(id);
        }}
      >
        <span>
          {city}, {street}, {house}
          {building}, {office}, {floor}
        </span>
      </div>
    </li>
  );
};
