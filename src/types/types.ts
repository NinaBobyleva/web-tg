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

export type OrdersType = {
  address: AddressType;
  comment: null;
  created_at: string;
  id: number;
  materials_by_category: CategoriesBasketType[];
  status: string;
  updated_at: string;
  user: UserType;
};

export type CategoriesBasketType = {
  id: number;
  materials: MaterialsBasketType[];
  name: string;
};

export type MaterialsBasketType = {
  default_shop: number;
  id: number;
  image_thumbnail_url: string;
  image_large_url: string;
  name: string;
  quantity: number;
  status: null;
  url: string;
};

export type AddressType = {
  building: string;
  city: string;
  floor: string;
  house: string;
  id: number;
  office: string;
  street: string;
};

export type UserType = {
  email: string;
};
