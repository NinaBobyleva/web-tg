const BASE_URL = "https://kr-order.ru/api/";

export const getAllMaterials = async () => {
  const res = await fetch(BASE_URL + "categories/");

  const response = await res.json();
  return response;
};

export const getAllBasketMaterials = async () => {
  const res = await fetch(BASE_URL + "orders/");

  const response = await res.json();
  return response;
};

export const getOrder = async ({ id }: { id: number }) => {
  const res = await fetch(BASE_URL + `orders/${id}/`);

  const response = await res.json();
  return response;
};

export const editOrderItem = async ({ id, quantityCounter }: { id: number; quantityCounter: number }) => {
  const res = await fetch(BASE_URL + `order-items/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      quantity: quantityCounter,
    }),
  });

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

  if (!res.ok) {
    throw new Error("error");
  }

  if (res.status === 204) {
    return null;
  }

  const response = await res.json();
  return response;
};
