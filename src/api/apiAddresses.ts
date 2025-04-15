// const ADDRESSES_URL = "https://dev.kr-order.ru/api/addresses/";
const ADDRESSES_URL = "https://kr-order.ru/api/addresses/";

export const getAllAddresses = async () => {
  const res = await fetch(ADDRESSES_URL);

  if (res.status === 500) {
    throw new Error("Сервер устал, попробуйте еще раз");
  }

  if (!res.ok) {
    throw new Error("Что-то пошло не так");
  }

  const response = await res.json();
  return response;
};