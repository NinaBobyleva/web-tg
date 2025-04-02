const URL_MATERIALS = "https://kr-order.ru/api/";
// const URL_MATERIALS1 = "https://46.243.187.5/api/";

export const getAllMaterials = async () => {
  const res = await fetch(URL_MATERIALS + "categories/");

  const response = await res.json();
  return response;
};
