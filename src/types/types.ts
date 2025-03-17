export type CategoriesType = {
  id: number;
  materials: MaterialsType[];
  name: string;
};

export type MaterialsType = {
  id: number;
  image_thumbnail_url: string;
  image_large_url: string;
  name: string;
};
