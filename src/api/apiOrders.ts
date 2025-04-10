const ORDERS_URL = "https://dev.kr-order.ru/api/orders/";

export const getOrders = async () => {
  const res = await fetch(ORDERS_URL);

  const response = await res.json();
  return response;
};

export const getOrder = async ({ id }: { id: number }) => {
  const res = await fetch(ORDERS_URL + `${id}/`);

  if (res.status === 404) {
    throw new Error("Такого заказа не существует");
  }

  if (res.status === 500) {
    throw new Error("Сервер устал, попробуйте еще раз");
  }

  if (!res.ok) {
    throw new Error("Что-то пошло не так");
  }

  const response = await res.json();
  return response;
};

export const deleteOrder = async ({ id }: { id: number }) => {
  const res = await fetch(ORDERS_URL + `${id}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status === 404) {
    throw new Error("Такого заказа не существует");
  }

  if (res.status === 500) {
    throw new Error("Сервер устал, попробуйте еще раз");
  }

  if (!res.ok) {
    throw new Error("Что-то пошло не так");
  }

  const response = await res.json();
  return response;
};
