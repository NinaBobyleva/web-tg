import { formatAddress } from "../../helpers/formatAddress";
import { AddressType } from "../../types/types";
import styles from "./addressList.module.css";

type AddressListProp = {
  address: AddressType;
  id: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAddressId: React.Dispatch<React.SetStateAction<number>>;
  setInputValueAddress: React.Dispatch<React.SetStateAction<string>>;
};

export const AddressList = ({
  address,
  id,
  setIsOpen,
  setAddressId,
  setInputValueAddress
}: AddressListProp) => {
  const longAddress = formatAddress(address);
  return (
    <li className={styles.addressListBox}>
      <div
        onClick={() => {
          setIsOpen(false);
          setInputValueAddress(longAddress);
          setAddressId(id);
        }}
      >
        <span>
          {longAddress}
        </span>
      </div>
    </li>
  );
};
