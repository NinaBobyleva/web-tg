import { OrderRequest } from "../types/types";

// const ORDER_ITEMS_URL = "https://dev.kr-order.ru/api/order-items/";
const ORDER_ITEMS_URL = "https://kr-order.ru/api/order-items/";

export const editOrderItem = async ({ id, quantity }: { id: number; quantity: number }) => {
  const res = await fetch(ORDER_ITEMS_URL + `${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      quantity: quantity,
    }),
  });

  if (res.status === 404) {
    throw new Error("Не найдено");
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

export const postOrderItem = async (payload: OrderRequest) => {
    const res = await fetch(ORDER_ITEMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  
    if (res.status === 404) {
      throw new Error("Не найдено");
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

export const deleteOrderItem = async ({ id }: { id: number }) => {
  const res = await fetch(ORDER_ITEMS_URL + `${id}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status === 204) {
    return res.ok;
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
