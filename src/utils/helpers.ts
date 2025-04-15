import { AddressType } from "../types/types";

export const formatAddress = (address: AddressType | undefined) => {
  return `${address?.city}, ${address?.street}, ${address?.house}, ${address?.office}, ${address?.floor}`;
};
