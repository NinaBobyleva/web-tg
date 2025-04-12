import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddressType, CategoriesBasketType, CategoriesType, OrdersType } from "../../types/types";
import { setUser } from "./userSlice";

type SeminarsStateType = {
  categories: CategoriesType[];
  order: CategoriesBasketType[];
  orders: OrdersType[];
  userOrders: OrdersType[];
  addresses: AddressType[];
  currentAddress: string;
  isLoad: boolean;
  currentOrderId: number;
  error: string;
  userId: number | undefined;
};

const initialState: SeminarsStateType = {
  categories: [],
  order: [],
  orders: [],
  userOrders: [],
  addresses: [],
  currentAddress: "",
  isLoad: false,
  currentOrderId: 0,
  error: "",
  userId: undefined,
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
    setCurrentOrderId: (state, action: PayloadAction<number>) => {
      state.currentOrderId = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setOrders: (state, action: PayloadAction<OrdersType[]>) => {
      state.orders = action.payload;
      state.userOrders = action.payload.filter((el) => el.user !== null && el.user.id === state.userId);
    },
    setAddresses: (state, action: PayloadAction<[]>) => {
      state.addresses = action.payload;
    },
    setCurrentAddress: (state, action: PayloadAction<string>) => {
      state.currentAddress = action.payload;
    },
    setUserOrders: () => {
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setUser, (state, action) => {
      state.userId = action?.payload?.id;
    });
  },
});

export const {
  setCategories,
  setOrder,
  setIsLoad,
  setCurrentOrderId,
  setError,
  setOrders,
  setAddresses,
  setCurrentAddress,
  setUserOrders,
} = materialsSlice.actions;
export const materialsReducers = materialsSlice.reducer;
