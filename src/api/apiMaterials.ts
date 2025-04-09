const BASE_URL = "https://dev.kr-order.ru/api/";
// const BASE_URL = "https://kr-order.ru/api/";

export const getAllMaterials = async () => {
  const res = await fetch(BASE_URL + "categories/");

  if (res.status === 500) {
    throw new Error("Сервер устал, попробуйте еще раз");
  }

  if (!res.ok) {
    throw new Error("Что-то пошло не так");
  }

  const response = await res.json();
  return response;
};

export const getOrders = async () => {
  const res = await fetch(BASE_URL + "orders/");

  const response = await res.json();
  return response;
};

export const getOrder = async ({ id }: { id: number }) => {
  const res = await fetch(BASE_URL + `orders/${id}/`);

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
  const res = await fetch(BASE_URL + `orders/${id}/`, {
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

export const editOrderItem = async ({ id, quantity }: { id: number; quantity: number }) => {
  const res = await fetch(BASE_URL + `order-items/${id}/`, {
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

export const deleteOrderItem = async ({ id }: { id: number }) => {
  const res = await fetch(BASE_URL + `order-items/${id}/`, {
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
