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
  category: number;
  url: string;
};

export type OrdersType = {
  address: AddressType;
  comment: null;
  created_at: string;
  id: number;
  status: string;
  updated_at: string;
  user: UserType;
  items_count: number;
  total_quantity: number;
};

export type CategoriesBasketType = {
  id: number;
  materials: MaterialsBasketType[];
  name: string;
};

export type CurrentOrderType = {
  id: number;
  user: UserType[];
  address: AddressType[];
  materials_by_category: CategoriesBasketType[];
  status: string;
  date_of_delivery: string;
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
  order_item_id: number;
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
  first_name: string;
  id: number;
  last_name: string;
  telegram_id: number;
  telegram_username: string;
};

export type newOrder = {
  address: number;
  user: number | undefined;
  status: string;
  comment: string;
  date_of_delivery: string;
};

export interface OrderItem {
  material: string;
  quantity: number | null;
}

export interface OrderRequest {
  order: number;
  order_items: OrderItem[];
}

export type StatusType = {
  status: string;
}
