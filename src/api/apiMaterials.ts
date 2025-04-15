// const MATERIALS_URL = "https://dev.kr-order.ru/api/categories/";
const MATERIALS_URL = "https://kr-order.ru/api/categories/";

export const getAllMaterials = async () => {
  const res = await fetch(MATERIALS_URL);

  if (res.status === 500) {
    throw new Error("Сервер устал, попробуйте еще раз");
  }

  if (!res.ok) {
    throw new Error("Что-то пошло не так");
  }

  const response = await res.json();
  return response;
};
