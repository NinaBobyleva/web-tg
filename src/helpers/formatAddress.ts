import { AddressType } from "../types/types";

export const formatAddress = (address: AddressType) => {
  return `${address.city}, ${address.street}, ${address.house}${address.building}, ${address.office}, ${address.floor}`;
};
