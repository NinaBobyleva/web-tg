const URL_MATERIALS = "https://kr-order.ru/api/";

export const getAllMaterials = async () => {
  const res = await fetch(URL_MATERIALS + "categories/");

  const response = await res.json();
  return response;
};

export const getAllBasketMaterials = async () => {
  const res = await fetch(URL_MATERIALS + "orders/");

  const response = await res.json();
  return response;
}; 