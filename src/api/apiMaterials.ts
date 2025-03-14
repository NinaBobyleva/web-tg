const URL_MATERIALS = "http://46.243.187.5/api/categories/";

export const getAllMaterials = async() => {
    const res = await fetch(URL_MATERIALS);

    const response = await res.json();
    return response;
}