import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddressType, CategoriesBasketType, CategoriesType, OrdersType } from "../../types/types";

type SeminarsStateType = {
  categories: CategoriesType[];
  order: CategoriesBasketType[];
  orders: OrdersType[];
  addresses: AddressType[];
  isLoad: boolean;
  orderId: number;
  error: string;
};

const initialState: SeminarsStateType = {
  categories: [],
  order: [],
  orders: [],
  addresses: [],
  isLoad: false,
  orderId: 0,
  error: "",
};

const materialsSlice = createSlice({
  name: "materials",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<[]>) => {
      state.categories = action.payload;
    },
    setOrder: (state, action: PayloadAction<[]>) => {
      state.order = action.payload;
    },
    setIsLoad: (state, action: PayloadAction<boolean>) => {
      state.isLoad = action.payload;
    },
    setOrderId: (state, action: PayloadAction<number>) => {
      state.orderId = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setOrders: (state, action: PayloadAction<[]>) => {
      state.orders = action.payload;
    },
    setAddresses: (state, action: PayloadAction<[]>) => {
      state.addresses = action.payload;
    },
  },
});

export const { setCategories, setOrder, setIsLoad, setOrderId, setError, setOrders, setAddresses } = materialsSlice.actions;
export const materialsReducers = materialsSlice.reducer;
